# Environment Variables Setup Guide

## ⚠️ IMPORTANT: Two Different APP_ID Variables!

There are **TWO separate** variables you need to set:

1. **`FIREBASE_APP_ID`** - Part of Firebase config (long format: `1:797229727242:web:5a154912b2d4fa0d4269f3`)
2. **`APP_ID`** - Separate variable for the app identifier (short format: `daily-task-tracker-97f29`)

## Required Environment Variables

Add **ALL 9** of these in Vercel Dashboard → Settings → Environment Variables:

### Firebase Configuration (7 variables):
```
FIREBASE_API_KEY=AIzaSyCZBPlWEsuZkHZr-_UbZYY9ZvqRqso8qQk
FIREBASE_AUTH_DOMAIN=daily-task-tracker-97f29.firebaseapp.com
FIREBASE_PROJECT_ID=daily-task-tracker-97f29
FIREBASE_STORAGE_BUCKET=daily-task-tracker-97f29.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=797229727242
FIREBASE_APP_ID=1:797229727242:web:5a154912b2d4fa0d4269f3
FIREBASE_MEASUREMENT_ID=G-WM6TF1HCK0
```

### App Configuration (2 variables):
```
APP_ID=daily-task-tracker-97f29
```

**Note:** `APP_ID` is different from `FIREBASE_APP_ID`!

## Steps to Fix:

1. **Go to Vercel Dashboard:**
   - Open your project
   - Click **Settings** → **Environment Variables**

2. **Add ALL 9 variables:**
   - Make sure you add **both** `FIREBASE_APP_ID` AND `APP_ID`
   - They have different values!

3. **Set for ALL environments:**
   - Check boxes for: **Production**, **Preview**, and **Development**
   - This ensures it works in all deployments

4. **Redeploy:**
   - After adding variables, you **MUST redeploy**
   - Go to **Deployments** tab
   - Click **Redeploy** on the latest deployment
   - OR push a new commit to trigger auto-deploy

5. **Verify:**
   - Test the API: `https://your-app.vercel.app/api/auth`
   - Should return JSON with Firebase config
   - Check Vercel Function Logs for any errors

## Common Mistakes:

❌ **Wrong:** Only adding `FIREBASE_APP_ID` (missing `APP_ID`)
✅ **Correct:** Adding both `FIREBASE_APP_ID` and `APP_ID`

❌ **Wrong:** Adding variables but not redeploying
✅ **Correct:** Always redeploy after adding environment variables

❌ **Wrong:** Only setting for Production
✅ **Correct:** Set for Production, Preview, AND Development

## Quick Checklist:

- [ ] `FIREBASE_API_KEY` added
- [ ] `FIREBASE_AUTH_DOMAIN` added
- [ ] `FIREBASE_PROJECT_ID` added
- [ ] `FIREBASE_STORAGE_BUCKET` added
- [ ] `FIREBASE_MESSAGING_SENDER_ID` added
- [ ] `FIREBASE_APP_ID` added (long format)
- [ ] `FIREBASE_MEASUREMENT_ID` added
- [ ] `APP_ID` added (short format: `daily-task-tracker-97f29`)
- [ ] All variables set for Production, Preview, and Development
- [ ] Project redeployed after adding variables

