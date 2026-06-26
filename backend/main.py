from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import json
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Where submissions are saved as a fallback (so messages are never lost,
# even when email is not yet configured). One JSON object per line.
SUBMISSIONS_DIR = Path(__file__).parent / "submissions"
SUBMISSIONS_DIR.mkdir(exist_ok=True)


def save_submission(kind: str, data: dict):
    """Append a submission to submissions/<kind>.jsonl. Returns True on success."""
    try:
        record = {"received_at": datetime.now().isoformat(), **data}
        with open(SUBMISSIONS_DIR / f"{kind}.jsonl", "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False, default=str) + "\n")
        return True
    except Exception as e:
        print(f"Error saving submission: {e}")
        return False


def read_submissions(kind: str):
    """Read all records from submissions/<kind>.jsonl, newest first."""
    path = SUBMISSIONS_DIR / f"{kind}.jsonl"
    items = []
    if path.exists():
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    items.append(json.loads(line))
                except json.JSONDecodeError:
                    pass
    items.reverse()
    return items

app = FastAPI(title="Agarasar Cooperative Backend API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email Configuration
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USER = os.getenv("EMAIL_USER", "pudasainiaayushma@gmail.com")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "pudasainiaayushma@gmail.com")

# Pydantic Models
class LoginRequest(BaseModel):
    accountNumber: str
    password: str

class ContactRequest(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: Optional[str] = ""
    subject: Optional[str] = "General Inquiry"
    message: str

class RegistrationRequest(BaseModel):
    firstName: str
    middleName: Optional[str] = ""
    lastName: str
    accountNumber: Optional[str] = "For Bank Use Only"
    dateOfBirth: str
    email: EmailStr
    mobileNumber: str
    citizenshipNumber: str
    citizenshipIssueDate: Optional[str] = ""
    gender: str
    nationality: Optional[str] = "Nepali"
    accountType: str
    profession: str
    province: str
    district: str
    localMunicipality: str
    wardNo: str
    tole: str

# Email Sending Function
def send_email(to_email: str, subject: str, html_content: str):
    """Send HTML email using Gmail SMTP"""
    try:
        msg = MIMEMultipart('alternative')
        msg['From'] = EMAIL_USER
        msg['To'] = to_email
        msg['Subject'] = subject
        
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.send_message(msg)
        
        return True
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False

# Root Endpoint
@app.get("/")
async def root():
    return {
        "message": "Agarasar Cooperative Backend Server is running!",
        "framework": "FastAPI",
        "version": "1.0.0"
    }

# Favicon endpoint (to prevent 404 errors)
@app.get("/favicon.ico")
async def favicon():
    """Return 204 No Content for favicon requests"""
    from fastapi.responses import Response
    return Response(status_code=204)

# Login Endpoint
@app.post("/api/login")
async def login(request: LoginRequest):
    """Login endpoint with email notification"""
    
    # For demo purposes - verify credentials
    if request.accountNumber == "admin" and request.password == "admin":
        # Success - Send email notification
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S Nepal Time")
        
        html_content = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 24px;">🔐 Login Notification</h1>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2 style="color: #333; margin-top: 0;">New User Login Detected</h2>
                <p style="color: #666; line-height: 1.6;">A user has successfully logged into the Agarasar Cooperative system.</p>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #667eea; margin-top: 0;">Login Details:</h3>
                    <table style="width: 100%; color: #333;">
                        <tr>
                            <td style="padding: 8px 0;"><strong>Account Number:</strong></td>
                            <td style="padding: 8px 0;">{request.accountNumber}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Login Time:</strong></td>
                            <td style="padding: 8px 0;">{current_time}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Status:</strong></td>
                            <td style="padding: 8px 0;"><span style="background-color: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">Success</span></td>
                        </tr>
                    </table>
                </div>
                
                <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    This is an automated notification from Agarasar Cooperative Banking System.<br>
                    If you did not expect this notification, please contact support immediately.
                </p>
            </div>
        </div>
        """
        
        save_submission("logins", {"accountNumber": request.accountNumber, "status": "success"})
        send_email(ADMIN_EMAIL, "🔔 New Login Alert - Agarasar Cooperative", html_content)

        return {
            "success": True,
            "message": "Login successful",
            "role": "admin",
            "accountNumber": request.accountNumber
        }
    else:
        # Failed login - Send security alert
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S Nepal Time")
        
        html_content = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background: linear-gradient(135deg, #f43f5e 0%, #dc2626 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 24px;">⚠️ Failed Login Attempt</h1>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2 style="color: #333; margin-top: 0;">Security Alert</h2>
                <p style="color: #666; line-height: 1.6;">Someone tried to login with invalid credentials.</p>
                
                <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
                    <h3 style="color: #dc2626; margin-top: 0;">Attempt Details:</h3>
                    <table style="width: 100%; color: #333;">
                        <tr>
                            <td style="padding: 8px 0;"><strong>Account Number:</strong></td>
                            <td style="padding: 8px 0;">{request.accountNumber}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Attempt Time:</strong></td>
                            <td style="padding: 8px 0;">{current_time}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Status:</strong></td>
                            <td style="padding: 8px 0;"><span style="background-color: #dc2626; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">Failed</span></td>
                        </tr>
                    </table>
                </div>
                
                <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    This is a security alert from Agarasar Cooperative Banking System.
                </p>
            </div>
        </div>
        """
        
        save_submission("logins", {"accountNumber": request.accountNumber, "status": "failed"})
        send_email(ADMIN_EMAIL, "⚠️ Failed Login Attempt - Agarasar Cooperative", html_content)

        raise HTTPException(status_code=401, detail="Invalid credentials")

# Registration Endpoint
@app.post("/api/register")
async def register(request: RegistrationRequest):
    """Registration endpoint with email notification"""
    
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S Nepal Time")
    
    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Account Registration</h1>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">New Member Registration</h2>
            <p style="color: #666; line-height: 1.6;">A new member has registered on the Agarasar Cooperative platform.</p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <h3 style="color: #3b82f6; margin-top: 0;">Personal Information:</h3>
                <table style="width: 100%; color: #333;">
                    <tr>
                        <td style="padding: 8px 0;"><strong>Full Name:</strong></td>
                        <td style="padding: 8px 0;">{request.firstName} {request.middleName} {request.lastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Email:</strong></td>
                        <td style="padding: 8px 0;">{request.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Mobile:</strong></td>
                        <td style="padding: 8px 0;">{request.mobileNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Date of Birth:</strong></td>
                        <td style="padding: 8px 0;">{request.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Gender:</strong></td>
                        <td style="padding: 8px 0;">{request.gender}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Citizenship:</strong></td>
                        <td style="padding: 8px 0;">{request.citizenshipNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Account Type:</strong></td>
                        <td style="padding: 8px 0;">{request.accountType}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Profession:</strong></td>
                        <td style="padding: 8px 0;">{request.profession}</td>
                    </tr>
                </table>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #3b82f6; margin-top: 0;">Address Information:</h3>
                <table style="width: 100%; color: #333;">
                    <tr>
                        <td style="padding: 8px 0;"><strong>Province:</strong></td>
                        <td style="padding: 8px 0;">{request.province}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>District:</strong></td>
                        <td style="padding: 8px 0;">{request.district}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Municipality:</strong></td>
                        <td style="padding: 8px 0;">{request.localMunicipality}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Ward No:</strong></td>
                        <td style="padding: 8px 0;">{request.wardNo}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Tole:</strong></td>
                        <td style="padding: 8px 0;">{request.tole}</td>
                    </tr>
                </table>
            </div>

            <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #059669;">
                    <strong>📅 Registration Time:</strong> {current_time}
                </p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px;">
                <h4 style="margin-top: 0; color: #d97706;">⚡ Next Steps:</h4>
                <ol style="color: #92400e; line-height: 1.8; margin: 10px 0;">
                    <li>Review the registration details</li>
                    <li>Verify the documents (if uploaded)</li>
                    <li>Approve or contact the applicant</li>
                    <li>Generate account number</li>
                </ol>
            </div>
            
            <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                This is an automated notification from Agarasar Cooperative Registration System.<br>
                Please login to the admin panel to process this registration.
            </p>
        </div>
    </div>
    """
    
    # Persist the registration first, then attempt the email notification.
    save_submission("registrations", request.dict())
    send_email(ADMIN_EMAIL, "🎉 New Registration - Agarasar Cooperative", html_content)

    return {
        "success": True,
        "message": "Registration successful! Our team will contact you soon.",
        "data": {
            "name": f"{request.firstName} {request.lastName}",
            "email": request.email,
            "mobile": request.mobileNumber
        }
    }

# Contact Endpoint
@app.post("/api/contact")
async def contact(request: ContactRequest):
    """Contact form endpoint with email notification to admin"""

    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S Nepal Time")

    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✉️ New Contact Message</h1>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Someone reached out via the website</h2>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
                <table style="width: 100%; color: #333;">
                    <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td style="padding: 8px 0;">{request.firstName} {request.lastName}</td></tr>
                    <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td style="padding: 8px 0;">{request.email}</td></tr>
                    <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td style="padding: 8px 0;">{request.phone or '—'}</td></tr>
                    <tr><td style="padding: 8px 0;"><strong>Subject:</strong></td><td style="padding: 8px 0;">{request.subject}</td></tr>
                    <tr><td style="padding: 8px 0;"><strong>Received:</strong></td><td style="padding: 8px 0;">{current_time}</td></tr>
                </table>
            </div>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #6366f1; margin-top: 0;">Message:</h3>
                <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">{request.message}</p>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                Reply directly to {request.email} to respond to this enquiry.
            </p>
        </div>
    </div>
    """

    # Always persist the message so it's never lost, even if email is unconfigured.
    save_submission("contact", request.dict())

    # Best-effort email notification (requires a valid Gmail App Password in .env).
    emailed = send_email(ADMIN_EMAIL, f"✉️ New Contact Message - {request.subject}", html_content)
    if not emailed:
        print("Contact message saved to submissions/contact.jsonl (email not sent — check EMAIL_PASSWORD in .env)")

    return {
        "success": True,
        "emailed": emailed,
        "message": "Thank you for reaching out! Our team will get back to you within 24 hours."
    }

# Submissions Endpoint — lets the admin dashboard read saved data
# NOTE: open for this demo. In production, protect with authentication.
@app.get("/api/submissions/{kind}")
async def get_submissions(kind: str):
    """Return saved contact messages, registrations, or login activity (newest first)."""
    allowed = {"contact", "registrations", "logins"}
    if kind not in allowed:
        raise HTTPException(status_code=404, detail="Unknown submission type")
    items = read_submissions(kind)
    return {"kind": kind, "count": len(items), "items": items}

# Admin Dashboard Endpoint
@app.get("/admin")
async def admin_dashboard():
    """Admin dashboard - returns real stats computed from saved submissions"""
    registrations = read_submissions("registrations")
    logins = read_submissions("logins")
    contacts = read_submissions("contact")
    return {
        "message": "Welcome to Agarasar Cooperative Admin Dashboard",
        "stats": {
            "total_logins_today": len(logins),
            "pending_registrations": len(registrations),
            "total_members": len(registrations),
            "total_messages": len(contacts),
        },
        "admin_email": ADMIN_EMAIL,
        "server_status": "running",
        "email_configured": bool(EMAIL_PASSWORD)
    }

# Health Check Endpoint
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "email_configured": bool(EMAIL_PASSWORD),
        "admin_email": ADMIN_EMAIL
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
