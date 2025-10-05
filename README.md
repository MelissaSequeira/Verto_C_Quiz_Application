# Quiz Application

A modern, interactive quiz application built with React frontend and Node.js/Express backend, featuring a countdown timer, detailed results, and responsive design.

## 📋 Project Description

This is a full-stack quiz application that allows users to take timed quizzes with multiple-choice questions. The application features:

- **Interactive Quiz Interface**: Clean, modern UI with smooth animations
- **Countdown Timer**: 5-minute timer with visual warnings and auto-submission
- **Detailed Results**: Question-by-question breakdown showing correct/incorrect answers
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Progress**: Visual progress bar and question counter
- **Persistent Data**: SQLite database for storing quiz questions

## 🚀 Features

### Frontend Features
- ⏱️ **Countdown Timer**: 5-minute timer with color-coded warnings
- 📊 **Progress Tracking**: Visual progress bar and question counter
- 🎨 **Modern UI**: Gradient backgrounds, smooth animations, and hover effects
- 📱 **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Detailed Results**: Show which questions were answered correctly/incorrectly
- 🔄 **Auto-submission**: Automatically submits when time runs out

### Backend Features
- 🗄️ **SQLite Database**: Persistent storage for quiz questions
- 🔒 **Secure API**: Separate endpoints for questions and submissions
- 📝 **Sample Data**: Pre-populated with sample quiz questions
- 🚀 **Express Server**: RESTful API with CORS support

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **CSS3** - Styling with modern features (gradients, animations, flexbox)
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **SQLite3 5.1.7** - Database
- **CORS 2.8.5** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Verto-project
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Start the server
npm start
# OR for development with auto-restart
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd Frontend/quiz-gui

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend application will run on `http://localhost:3000`

## 🧪 Running Tests

### Frontend Tests
```bash
cd Frontend/quiz-gui
npm test
```

This will run the React testing suite using Jest and React Testing Library.

### Backend Tests
Currently, no specific test cases are implemented for the backend. The backend includes a basic test script that can be run with:

```bash
cd Backend
npm test
```

## 🎮 How to Use

1. **Start the Application**: Open `http://localhost:3000` in your browser
2. **Begin Quiz**: Click "Start Quiz" on the welcome page
3. **Answer Questions**: Select your answers and navigate using Previous/Next buttons
4. **Timer Management**: Keep an eye on the countdown timer (5 minutes total)
5. **Submit**: Click "Submit Quiz" when finished, or wait for auto-submission
6. **Review Results**: View your score and detailed question breakdown

## 🏗️ Project Structure

```
Verto-project/
├── Backend/
│   ├── db.js              # Database configuration and sample data
│   ├── scoring.js          # scoring logic
│   ├── scoring.test.js     # Write test cases
│   ├── server.js          # Express server and API routes
│   ├── quiz.db           # SQLite database file
│   └── package.json      # Backend dependencies
├── Frontend/
│   ├── index.html        # Static HTML file
│   └── quiz-gui/         # React application
│       ├── public/       # Static assets
│       ├── src/
│       │   ├── App.js    # Main application component
│       │   ├── App.css   # Main application styles
│       │   ├── StartPage.js    # Welcome/start page
│       │   ├── QuizPage.js     # Quiz interface with timer
│       │   ├── ResultsPage.js  # Results and detailed breakdown
│       │   └── index.css # Global styles
│       └── package.json  # Frontend dependencies
└── README.md            # This file
```

## 🔧 API Endpoints

### GET `/quiz`
Returns all quiz questions (without correct answers)
```json
[
  {
    "id": 1,
    "text": "What is 2 + 2?",
    "option1": "2",
    "option2": "3", 
    "option3": "4",
    "option4": "5"
  }
]
```

### POST `/submit`
Submit user answers and get results
```json
// Request Body
{
  "1": 2,  // Question ID: Answer Index
  "2": 2,
  "3": 0
}

// Response
{
  "score": 2,
  "total": 3,
  "results": {
    "1": 2,  // Question ID: Correct Answer Index
    "2": 2,
    "3": 0
  }
}
```

## 🎨 Design Choices & Assumptions

### Design Decisions
1. **5-Minute Timer**: Chosen to create urgency without being too stressful
2. **Color-coded Timer**: Visual feedback system (blue → pink → red) for time awareness
3. **Gradient Design**: Modern, professional appearance with consistent color scheme
4. **Card-based Layout**: Clean, organized presentation of questions and results
5. **Mobile-first Responsive**: Ensures accessibility across all devices

### Technical Assumptions
1. **SQLite Database**: Lightweight, file-based database suitable for development
2. **CORS Enabled**: Allows frontend-backend communication on different ports
3. **0-based Indexing**: Answer options are indexed starting from 0
4. **Auto-submission**: Prevents users from exceeding time limits
5. **Persistent Storage**: Database file persists between server restarts

### User Experience Assumptions
1. **Clear Visual Feedback**: Users need immediate feedback on their selections
2. **Progress Indication**: Users want to know how much of the quiz remains
3. **Detailed Review**: Users benefit from seeing what they got right/wrong
4. **Time Awareness**: Visual timer helps users manage their time effectively

## 🚀 Deployment Considerations

### Backend Deployment
- Ensure Node.js is installed on the server
- Set up environment variables for production
- Consider using PM2 for process management
- Use a production database (PostgreSQL, MySQL) for scalability

### Frontend Deployment
- Build the React app: `npm run build`
- Serve static files using nginx or similar
- Configure environment variables for API endpoints
- Enable HTTPS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- No specific test cases implemented for backend
- Database schema is hardcoded (could be made configurable)
- No user authentication system
- No question categories or difficulty levels

## 🔮 Future Enhancements

- User authentication and score tracking
- Question categories and difficulty levels
- Multiple quiz types
- Leaderboards and statistics
- Question management interface
- Real-time multiplayer quizzes
- Question import/export functionality
