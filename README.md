# Daily Task Tracker

A comprehensive task management application built with React and Firebase, featuring Pomodoro timer, analytics, and streak tracking.

## Features

- ✅ Task creation and management
- ⏱️ Pomodoro timer integration
- 📊 Daily accuracy tracking and analytics
- 🔥 Streak tracking to build habits
- 📱 Responsive design with dark mode
- 📄 PDF report generation
- 🔐 Firebase authentication

## Deployment on Vercel

This app is ready to deploy on Vercel with zero configuration.

### Quick Deploy

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deploy

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Environment Variables

No environment variables are required as Firebase configuration is embedded in the code.

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## Firebase Configuration

The app uses Firebase for:
- User authentication
- Data storage (Firestore)
- Real-time updates

Make sure your Firebase project is properly configured with:
- Authentication enabled
- Firestore database created
- Proper security rules

## License

MIT
