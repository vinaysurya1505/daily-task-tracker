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

**⚠️ IMPORTANT:** Firebase configuration is loaded from environment variables via the `/api/auth` endpoint for security.

### Required Environment Variables

Add these to your Vercel project settings or `.env` file:

```
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
APP_ID=your_app_id
```

### Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable from the list above
4. Redeploy your application

## Local Development

**Note:** The API endpoints (`/api/auth`) require a server to function. For local development:

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Run local development server
vercel dev
```

This will start a local server that handles API routes correctly.

### Option 2: Simple Static Server (Limited)

For basic testing without API functionality:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

**Note:** API routes won't work with simple static servers. Use `vercel dev` for full functionality.

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
