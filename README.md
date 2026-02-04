# CDAC Placement Portal

A comprehensive placement portal built with React and Vite for CDAC students, placement coordinators, and companies.

## 🚀 Features

### For Students
- Update profile with photo upload
- View academic details
- Track interview schedules
- Monitor placement status

### For Placement Coordinators
- Add new students
- Add new companies
- View dashboard statistics
- Manage placement activities

### For Companies
- Post job opportunities
- Schedule interviews
- Update interview results
- Track hiring statistics

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Language**: JavaScript (No TypeScript)
- **Routing**: React Router DOM
- **Styling**: Plain CSS (No external UI libraries)
- **State Management**: React useState (No Redux)

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
├── components/
│   ├── Navbar.jsx
│   ├── Carousel.jsx
│   ├── Marquee.jsx
│   ├── LogoSlider.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   └── Login.jsx
├── dashboards/
│   ├── student/
│   │   └── StudentDashboard.jsx
│   ├── coordinator/
│   │   └── CoordinatorDashboard.jsx
│   └── company/
│       └── CompanyDashboard.jsx
├── styles/
│   ├── global.css
│   ├── home.css
│   └── dashboard.css
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔐 Login Credentials

For demo purposes, you can use any email/password combination with the following roles:

- **Student**: Select "Student" role
- **Placement Coordinator**: Select "Placement Coordinator" role  
- **Company**: Select "Company" role

## 🎨 Key Components

### Home Page
- Hero section with carousel
- Running marquee text
- Information cards
- Activities section
- Company logo slider
- Footer with contact details

### Dashboards
- **Student Dashboard**: Profile management, interview tracking, placement status
- **Coordinator Dashboard**: Student/company management, statistics
- **Company Dashboard**: Job posting, interview scheduling, result updates

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🎯 CDAC Syllabus Compliance

This project uses only concepts taught in the CDAC PG-DAC syllabus:
- React functional components
- React hooks (useState, useEffect)
- React Router for navigation
- Form handling
- Event handling
- CSS styling
- Local storage for simple authentication

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Highlights

1. **Role-based Authentication**: Different dashboards for different user types
2. **Interactive UI**: Smooth animations and transitions
3. **Form Validation**: Client-side form validation
4. **Responsive Design**: Mobile-first approach
5. **Modern React**: Uses latest React patterns and hooks
6. **Clean Code**: Well-organized component structure

## 📝 Future Enhancements

- Backend integration with REST APIs
- Database connectivity
- Email notifications
- File upload functionality
- Advanced search and filtering
- Report generation

## 🤝 Contributing

This is an academic project for CDAC PG-DAC students. Feel free to fork and enhance!

## 📄 License

This project is created for educational purposes as part of CDAC PG-DAC curriculum.

---

**Developed with ❤️ for CDAC Students**