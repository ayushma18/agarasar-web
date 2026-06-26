# 🏦 Agarasar Cooperative Banking Website

Modern, bilingual (Nepali/English) cooperative banking website with FastAPI backend and beautiful React frontend.

![Tech Stack](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=for-the-badge&logo=react)
![Tech Stack](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)
![Tech Stack](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Language](https://img.shields.io/badge/Language-Bilingual-FF6B6B?style=for-the-badge)

---

## ✨ Features

### 🎨 Modern UI/UX
- ✅ Fullscreen hero section with animated gradients
- ✅ Glassmorphism effects and smooth transitions
- ✅ Bilingual support (Nepali primary, English secondary)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated counters and interactive elements

### 🔐 Authentication & Registration
- ✅ Login with backend integration
- ✅ Registration form with comprehensive fields
- ✅ Loading states and error handling
- ✅ Back navigation buttons

### 📧 Email Notifications
- ✅ Login alerts (success & failed attempts)
- ✅ Registration notifications
- ✅ Beautiful HTML email templates
- ✅ Sent to admin: pudasainiaayushma@gmail.com

### 🚀 Backend API (FastAPI)
- ✅ Fast, modern Python framework
- ✅ Auto-generated API documentation (Swagger UI)
- ✅ Type-safe with Pydantic validation
- ✅ CORS enabled for frontend integration

---

## 🚀 Quick Start

### 1. Configure Email (One-time)
Edit `backend/.env`:
```env
EMAIL_PASSWORD=your-16-digit-app-password-here
```
Get App Password: https://myaccount.google.com/apppasswords

### 2. Start Backend
```bash
cd backend
./start.sh
```

### 3. Start Frontend
```bash
npm start
```

**Done!** Open http://localhost:3000

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get up and running in 3 steps
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete installation guide
- **[MIGRATION_NOTES.md](MIGRATION_NOTES.md)** - Node.js → FastAPI migration details
- **[backend/README.md](backend/README.md)** - Backend API documentation

---

## 🎯 Tech Stack

### Frontend
- **React 19** - UI framework
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation
- **Python SMTP** - Email notifications

### Features
- Bilingual (नेपाली + English)
- Responsive design
- Email notifications
- Modern animations

---

## 📖 Usage

### Login
1. Go to http://localhost:3000
2. Click "Login"
3. Credentials: `admin` / `admin`
4. Check admin email for notification

### Registration
1. Click "Register"
2. Fill out form
3. Submit
4. Admin receives notification email

### API Documentation
- **Swagger UI:** http://localhost:5000/docs
- **ReDoc:** http://localhost:5000/redoc

---

## 🛠️ Development

### Frontend
```bash
npm start          # Development server (port 3000)
npm test           # Run tests
npm run build      # Production build
```

### Backend
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 5000
```

Or use the quick start script:
```bash
cd backend
./start.sh
```

---

## 📁 Project Structure

```
agarasar-web/
├── backend/
│   ├── main.py              # FastAPI server
│   ├── requirements.txt     # Python dependencies
│   ├── .env                # Email configuration
│   ├── start.sh            # Quick start script
│   └── venv/               # Python virtual environment
├── src/
│   ├── components/
│   │   ├── Home.js         # Landing page (bilingual)
│   │   ├── Login.js        # Login form
│   │   ├── Registration.js # Registration form
│   │   ├── Header.js       # Navigation
│   │   ├── Services.js     # Services page
│   │   └── ...
│   ├── App.js
│   └── index.js
├── public/
├── package.json            # Frontend dependencies
├── QUICK_START.md          # Quick start guide
├── SETUP_GUIDE.md          # Complete setup guide
└── MIGRATION_NOTES.md      # Migration details
```

---

## 🌐 Pages

- **Home** (`/`) - Hero section, stats, benefits
- **Login** (`/login`) - User login with email notification
- **Register** (`/register`) - New member registration
- **Services** (`/services`) - Banking services
- **About** (`/about`) - About the cooperative
- **Contact** (`/contact`) - Contact information
- **Admin** (`/admin`) - Admin dashboard

---

## 📧 Email Configuration

1. **Enable 2-Step Verification** in Google Account
2. **Generate App Password**: https://myaccount.google.com/apppasswords
3. **Update** `backend/.env`:
   ```env
   EMAIL_USER=pudasainiaayushma@gmail.com
   EMAIL_PASSWORD=abcd efgh ijkl mnop
   ADMIN_EMAIL=pudasainiaayushma@gmail.com
   ```

---

## 🧪 Testing

### Test Login
```bash
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"accountNumber": "admin", "password": "admin"}'
```

### Test Health Check
```bash
curl http://localhost:5000/health
```

### Interactive Testing
Go to: http://localhost:5000/docs

---

## 🚨 Troubleshooting

**Backend won't start?**
```bash
cd backend
pip install -r requirements.txt
```

**Frontend won't start?**
```bash
npm install
```

**Emails not sending?**
- Check `.env` has correct `EMAIL_PASSWORD`
- Use App Password, not regular password
- Verify 2-Step Verification is enabled

**Port already in use?**
```bash
# Backend (5000)
lsof -i :5000
kill -9 <PID>

# Frontend (3000)
lsof -i :3000
kill -9 <PID>
```

---

## 📞 Support

**Admin Email:** pudasainiaayushma@gmail.com

**Documentation:**
- Quick Start: [QUICK_START.md](QUICK_START.md)
- Full Guide: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- API Docs: http://localhost:5000/docs (when running)

---

## 🎨 Design Features

- **Colors:** Blue (primary), Purple, Orange, Cyan gradients
- **Fonts:** Noto Sans Devanagari (Nepali), Inter/Poppins (English)
- **Effects:** Glassmorphism, floating animations, smooth transitions
- **Layout:** Modern hero sections, card grids, responsive design

---

## 🔐 Security Notes

⚠️ **Important:**
- Never commit `.env` to git
- Use App Passwords, not regular passwords
- For production: Add database, JWT auth, rate limiting, HTTPS

---

## 📄 License

This project is for Agarasar Cooperative internal use.

---

**Built with ❤️ for Agarasar Cooperative**

React 19 + FastAPI + Tailwind CSS

Last Updated: February 2026
