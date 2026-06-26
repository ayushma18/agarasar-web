# 🏦 Agarasar Cooperative - Complete Setup Guide

A modern, bilingual (Nepali/English) cooperative banking website with **FastAPI Python backend** and email notifications.

## ✨ Features

### Frontend (React + Tailwind CSS)
- ✅ Modern, responsive design with Tailwind CSS
- ✅ Bilingual support (Nepali primary, English secondary)
- ✅ Fullscreen hero section with animated backgrounds
- ✅ Glassmorphism effects and modern gradients
- ✅ Login and Registration forms with backend integration
- ✅ Back navigation buttons
- ✅ Loading states and success/error messages

### Backend (FastAPI + Python)
- ✅ FastAPI REST API server (fast & modern)
- ✅ Email notifications on login (successful and failed attempts)
- ✅ Email notifications on registration
- ✅ Beautiful HTML email templates
- ✅ CORS enabled for frontend integration
- ✅ Auto-generated API documentation (Swagger UI)
- ✅ Type-safe with Pydantic validation
- ✅ Admin email: `pudasainiaayushma@gmail.com`

## 📋 Prerequisites

- **Node.js** (v14 or higher) - For frontend
- **npm** (v6 or higher) - For frontend
- **Python 3.8+** (3.10+ recommended) - For backend
- **pip** - Python package manager
- **Gmail Account** with App Password enabled

## 🚀 Installation & Setup

### Step 1: Install Frontend Dependencies

```bash
# From the project root directory
npm install
```

### Step 2: Install Backend Dependencies (Python)

```bash
# Navigate to backend folder
cd backend

# Option A: Install directly
pip install -r requirements.txt

# Option B: Use virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Linux/Mac
# OR
venv\Scripts\activate     # On Windows
pip install -r requirements.txt

# Go back to root
cd ..
```

### Step 3: Configure Email Settings

1. Open `backend/.env` file
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

## 🎮 Running the Application

### Option 1: Run Both Together (Recommended)

**Terminal 1 - Backend (FastAPI):**
```bash
cd backend
uvicorn main:app --reload --port 5000
```
Backend will start on: http://localhost:5000
API Docs: http://localhost:5000/docs

**Terminal 2 - Frontend (React):**
```bash
# From project root
npm start
```
Frontend will start on: http://localhost:3000

### Option 2: Production Mode

**Backend:**
```bash
cd backend
python main.py
```

**Frontend:**
```bash
npm start
```

## 🧪 Testing the Features

### 1. Test Login with Email Notification

1. Go to: http://localhost:3000
2. Click "Login" button
3. Enter credentials:
   - Account Number: `admin`
   - Password: `admin`
4. Click "Sign In"
5. Check email at `pudasainiaayushma@gmail.com`
6. You should receive a **Login Notification** email with:
   - Account number
   - Login timestamp (Nepal timezone)
   - Success badge

### 2. Test Registration with Email Notification

1. Go to: http://localhost:3000
2. Click "Register" button
3. Fill out the registration form:
   - First Name: John
   - Last Name: Doe
   - Email: john@example.com
   - Mobile: 9812345678
   - (Fill other required fields)
4. Click "Register Account"
5. Check email at `pudasainiaayushma@gmail.com`
6. You should receive a **Registration Notification** email with:
   - Complete personal information
   - Address details
   - Registration timestamp
   - Next steps for admin

### 3. Test API Directly (Using Swagger UI)

1. Start backend server
2. Go to: http://localhost:5000/docs
3. You'll see interactive API documentation
4. Click "Try it out" on any endpoint
5. Test login and registration directly!

## 📧 Email Notifications

All emails are sent to: **pudasainiaayushma@gmail.com**

### Login Success Email
- **Subject:** 🔔 New Login Alert - Agarasar Cooperative
- **Contains:** Account number, login time, success status
- **Theme:** Purple gradient

### Failed Login Email
- **Subject:** ⚠️ Failed Login Attempt - Agarasar Cooperative
- **Contains:** Account number, attempt time, security warning
- **Theme:** Red warning

### Registration Email
- **Subject:** 🎉 New Registration - Agarasar Cooperative
- **Contains:** Full member details, address, next steps
- **Theme:** Blue-cyan gradient

## 📁 Project Structure

```
agarasar-web/
├── backend/
│   ├── main.py            # FastAPI server (Python)
│   ├── requirements.txt   # Python dependencies
│   ├── .env              # Email configuration (⚠️ DO NOT COMMIT)
│   ├── .env.example      # Example environment variables
│   ├── .gitignore        # Git ignore for Python
│   └── README.md         # Backend documentation
├── src/
│   ├── components/
│   │   ├── Home.js       # Hero section (bilingual, proper spacing)
│   │   ├── Login.js      # Login form (with back button & API)
│   │   ├── Registration.js  # Registration form (with back button & API)
│   │   ├── Header.js     # Navigation header
│   │   └── ...
│   ├── App.js
│   └── index.js
├── package.json          # Frontend dependencies
└── README.md            # This file
```

## 🔧 Configuration

### Backend Configuration (Python)

File: `backend/.env`

```env
PORT=5000                               # Backend port
EMAIL_USER=pudasainiaayushma@gmail.com  # Gmail address
EMAIL_PASSWORD=your-app-password        # 16-digit App Password
ADMIN_EMAIL=pudasainiaayushma@gmail.com # Admin notification email
```

### Frontend API Endpoints

Both Login and Registration components connect to:
- **Base URL:** http://localhost:5000
- **Login:** POST `/api/login`
- **Registration:** POST `/api/register`
- **Docs:** GET `/docs` (Swagger UI)

## 🎨 Design Features

### Home Page
- ✅ Proper spacing below navbar (pt-32 instead of py-20)
- ✅ Fullscreen hero section
- ✅ Bilingual text (Nepali on top, English below)
- ✅ Animated counter stats
- ✅ Modern glassmorphism effects

### Login Page
- ✅ Back to Home button
- ✅ Loading spinner during API call
- ✅ Success/Error message display
- ✅ Email notification to admin

### Registration Page
- ✅ Back to Home button
- ✅ Comprehensive form fields
- ✅ Loading state on submit
- ✅ Success/Error message display
- ✅ Email notification to admin with all details

## 🚨 Troubleshooting

### Emails Not Sending?

1. **Check .env file:**
   ```bash
   cd backend
   cat .env
   ```
   Make sure EMAIL_USER and EMAIL_PASSWORD are set correctly

2. **Verify App Password:**
   - Must be 16 digits from Google App Passwords
   - NOT your regular Gmail password
   - 2-Step Verification must be enabled

3. **Check server logs:**
   - Look at the terminal where backend is running
   - Email errors will be printed

4. **Test email configuration:**
   ```bash
   curl http://localhost:5000/health
   ```
   Check if `email_configured` is `true`

### Python Module Not Found?

```bash
cd backend
pip install -r requirements.txt
```

Or activate virtual environment first:
```bash
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

### CORS Errors?

Make sure:
- Backend is running on port 5000
- Frontend is running on port 3000
- Check browser console for specific error

### Connection Refused?

```
Unable to connect to server. Please make sure backend is running.
```

**Solution:**
- Make sure backend server is started: `cd backend && uvicorn main:app --reload --port 5000`
- Check if port 5000 is free: `lsof -i :5000`

### Port Already in Use?

**Backend port 5000 in use:**
```bash
lsof -i :5000
kill -9 <PID>
```

**Frontend port 3000 in use:**
```bash
lsof -i :3000
kill -9 <PID>
```

## 📝 API Documentation

### Interactive Docs (Swagger UI)

Go to: **http://localhost:5000/docs**

You can test all endpoints directly in the browser!

### POST /api/login

**Request:**
```json
{
  "accountNumber": "admin",
  "password": "admin"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "role": "admin",
  "accountNumber": "admin"
}
```

### POST /api/register

**Request:**
```json
{
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

## 🐍 Why FastAPI?

### Advantages over Node.js/Express:

✅ **Faster** - One of the fastest Python frameworks (comparable to Node.js)
✅ **Type Safety** - Built-in data validation with Pydantic
✅ **Auto Documentation** - Swagger UI and ReDoc generated automatically
✅ **Modern Python** - Async/await support for high performance
✅ **Less Code** - More functionality with fewer lines
✅ **Better Errors** - Clear validation errors out of the box
✅ **Easy Testing** - Built-in test client
✅ **Great for ML/AI** - Easy to integrate Python ML libraries

### Tech Stack Comparison:

| Feature | FastAPI (Python) | Express (Node.js) |
|---------|------------------|-------------------|
| Speed | ⚡⚡⚡ Very Fast | ⚡⚡⚡ Very Fast |
| Type Safety | ✅ Built-in (Pydantic) | ❌ Requires TypeScript |
| Auto Docs | ✅ Swagger/ReDoc | ❌ Manual setup |
| Validation | ✅ Automatic | ❌ Manual (Joi, etc) |
| Async Support | ✅ Native | ✅ Native |
| Learning Curve | 🟢 Easy | 🟢 Easy |

## 🔐 Security Notes

⚠️ **Important:**
- Never commit `.env` file to git (already in `.gitignore`)
- Always use App Password, not regular Gmail password
- In production, add:
  - Database integration (PostgreSQL/MongoDB)
  - JWT authentication (FastAPI supports it easily)
  - Password hashing (bcrypt via passlib)
  - Rate limiting (slowapi package)
  - Input validation (already built-in with Pydantic!)
  - HTTPS/SSL

## 🎯 What Was Fixed & Improved

1. ✅ **Hero section spacing** - Added proper padding-top to avoid navbar overlap
2. ✅ **Back buttons** - Added to Login and Registration pages
3. ✅ **Backend rewritten in FastAPI** - Modern Python framework instead of Node.js
4. ✅ **Email service** - Python SMTP with beautiful HTML templates
5. ✅ **Frontend-Backend integration** - API calls with loading states
6. ✅ **Admin notifications** - Emails sent to pudasainiaayushma@gmail.com
7. ✅ **Auto API docs** - Swagger UI at /docs endpoint
8. ✅ **Type safety** - Pydantic models for validation

## 📞 Support

**Admin Email:** pudasainiaayushma@gmail.com

For any issues:
1. Check error messages in browser console (F12)
2. Check backend terminal logs
3. Verify .env configuration
4. Check spam folder for emails
5. Test API at: http://localhost:5000/docs

## 🚀 Next Steps (Optional Enhancements)

- [ ] Add database (PostgreSQL with SQLAlchemy)
- [ ] Implement JWT authentication
- [ ] Add file upload for documents
- [ ] Create admin dashboard APIs
- [ ] Add transaction management
- [ ] Implement account approval workflow
- [ ] Add SMS notifications (via Twilio)
- [ ] Deploy to cloud (AWS/GCP/Azure)
- [ ] Add unit tests (pytest)
- [ ] Add WebSocket for real-time updates

## 📄 License

This project is for Agarasar Cooperative internal use.

---

**Built with ❤️ using React & FastAPI for Agarasar Cooperative**

- Frontend: React 19 + Tailwind CSS
- Backend: FastAPI (Python 3.10+)
- Email: Gmail SMTP
- Styling: Modern glassmorphism & gradients

Last Updated: February 2026
