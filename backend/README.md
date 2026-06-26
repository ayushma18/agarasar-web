# Agarasar Cooperative Backend Server (FastAPI)

Modern Python backend server for Agarasar Cooperative banking system with email notifications.

## 🐍 Tech Stack

- **FastAPI** - Modern, fast Python web framework
- **Uvicorn** - Lightning-fast ASGI server
- **Pydantic** - Data validation using Python type hints
- **Python SMTP** - Email sending via Gmail

## ✨ Features

- ✅ Login API with email notifications
- ✅ Registration API with email notifications
- ✅ Email alerts to admin on every login and registration
- ✅ CORS enabled for frontend integration
- ✅ Beautiful HTML email templates
- ✅ Type-safe with Pydantic models
- ✅ Auto-generated API documentation (Swagger/ReDoc)

## 📋 Prerequisites

- **Python 3.8+** (3.10+ recommended)
- **pip** (Python package manager)
- **Gmail Account** with App Password enabled

## 🚀 Setup Instructions

### 1. Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

Or using virtual environment (recommended):

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Email Settings

1. Open the `.env` file
2. You'll see this:

```env
EMAIL_USER=pudasainiaayushma@gmail.com
EMAIL_PASSWORD=your-16-digit-app-password-here
```

3. **Generate Gmail App Password:**
   - Go to: https://myaccount.google.com/security
   - Enable **2-Step Verification** (if not already enabled)
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Give it a name like "Agarasar Backend"
   - Click **Generate**
   - Copy the 16-digit password (e.g., `abcd efgh ijkl mnop`)

4. Replace `your-16-digit-app-password-here` in `.env` file with the generated password

```env
EMAIL_USER=pudasainiaayushma@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### 3. Start the Server

**Development mode (with auto-reload):**
```bash
uvicorn main:app --reload --port 5000
```

**Production mode:**
```bash
python main.py
```

The server will start on: **http://localhost:5000**

## 📚 API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI:** http://localhost:5000/docs
- **ReDoc:** http://localhost:5000/redoc

## 🔌 API Endpoints

### 1. Root Endpoint
**GET** `/`

```bash
curl http://localhost:5000/
```

**Response:**
```json
{
  "message": "Agarasar Cooperative Backend Server is running!",
  "framework": "FastAPI",
  "version": "1.0.0"
}
```

---

### 2. Health Check
**GET** `/health`

```bash
curl http://localhost:5000/health
```

**Response:**
```json
{
  "status": "healthy",
  "email_configured": true,
  "admin_email": "pudasainiaayushma@gmail.com"
}
```

---

### 3. Login
**POST** `/api/login`

**Request Body:**
```json
{
  "accountNumber": "admin",
  "password": "admin"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "role": "admin",
  "accountNumber": "admin"
}
```

**Error Response (401):**
```json
{
  "detail": "Invalid credentials"
}
```

**Email Notification:** Sent to `pudasainiaayushma@gmail.com` with login details

---

### 4. Registration
**POST** `/api/register`

**Request Body:**
```json
{
  "firstName": "John",
  "middleName": "Kumar",
  "lastName": "Doe",
  "email": "john@example.com",
  "mobileNumber": "9812345678",
  "dateOfBirth": "1990-01-01",
  "gender": "Male",
  "citizenshipNumber": "12345",
  "accountType": "Savings",
  "profession": "Business",
  "province": "Bagmati",
  "district": "Kathmandu",
  "localMunicipality": "Kathmandu",
  "wardNo": "10",
  "tole": "Thamel"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful! Our team will contact you soon.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9812345678"
  }
}
```

**Email Notification:** Sent to `pudasainiaayushma@gmail.com` with complete registration details

---

## 📧 Email Templates

All emails are sent to: **pudasainiaayushma@gmail.com**

### Login Success Email
- **Subject:** 🔔 New Login Alert - Agarasar Cooperative
- **Theme:** Purple gradient
- **Contains:** Account number, login time (Nepal timezone), success badge

### Failed Login Email
- **Subject:** ⚠️ Failed Login Attempt - Agarasar Cooperative
- **Theme:** Red warning
- **Contains:** Account number, attempt time, security alert

### Registration Email
- **Subject:** 🎉 New Registration - Agarasar Cooperative
- **Theme:** Blue-cyan gradient
- **Contains:** Full personal info, address details, next steps, timestamp

## 🧪 Testing

### Test using the interactive API docs:

1. Start the server
2. Go to: http://localhost:5000/docs
3. Try out the endpoints directly in the browser!

### Test using curl:

```bash
# Test Login
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"accountNumber": "admin", "password": "admin"}'

# Test Registration
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "mobileNumber": "9812345678",
    "dateOfBirth": "1990-01-01",
    "gender": "Male",
    "citizenshipNumber": "12345",
    "accountType": "Savings",
    "profession": "Business",
    "province": "Bagmati",
    "district": "Kathmandu",
    "localMunicipality": "Kathmandu",
    "wardNo": "10",
    "tole": "Thamel"
  }'
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| EMAIL_USER | Gmail address for sending emails | pudasainiaayushma@gmail.com |
| EMAIL_PASSWORD | Gmail App Password (16 digits) | abcd efgh ijkl mnop |
| ADMIN_EMAIL | Admin email for notifications | pudasainiaayushma@gmail.com |

## 📦 Dependencies

```
fastapi==0.109.0          # Modern web framework
uvicorn[standard]==0.27.0 # ASGI server
python-dotenv==1.0.0      # Environment variables
pydantic[email]==2.5.3    # Data validation
python-multipart==0.0.6   # Form data support
```

## 🚨 Troubleshooting

### Emails Not Sending?

1. Check `.env` file has correct EMAIL_USER and EMAIL_PASSWORD
2. Verify using App Password, not regular Gmail password
3. Ensure 2-Step Verification is enabled
4. Check server terminal for error messages
5. Test: `curl http://localhost:5000/health`

### Port 5000 Already in Use?

```bash
lsof -i :5000  # Find process
kill -9 <PID>  # Kill it
# Or use different port:
uvicorn main:app --reload --port 8000
```

### Import Errors?

```bash
pip install -r requirements.txt
```

## 🎯 Advantages of FastAPI

✅ **Faster** - One of the fastest Python frameworks
✅ **Type Safety** - Built-in validation with Pydantic
✅ **Auto Documentation** - Swagger UI generated automatically
✅ **Modern** - Async/await support
✅ **Less Code** - More functionality, fewer lines

## 🔐 Security Notes

⚠️ Never commit `.env` to git
⚠️ Use App Password, not regular password
⚠️ For production: Add database, JWT, rate limiting, HTTPS

---

**Built with ❤️ using FastAPI for Agarasar Cooperative**

Last Updated: February 2026
