# Vercel Deployment Troubleshooting

## ✅ Check These Steps:

### 1. **Environment Variables Setup**

Go to your Vercel project dashboard:
1. Navigate to **Settings** → **Environment Variables**
2. Add ALL these variables:

```
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
FIREBASE_MEASUREMENT_ID
APP_ID
```

3. Make sure to set them for **Production**, **Preview**, and **Development** environments
4. **Redeploy** after adding variables

### 2. **Verify API Route Structure**

Your `api/` folder should contain:
```
api/
  ├── auth.js
  └── config.js
```

### 3. **Test the API Endpoint**

After deployment, test the API directly:
```
https://your-app-name.vercel.app/api/auth
```

You should see JSON response with Firebase config.

### 4. **Check Vercel Function Logs**

1. Go to your Vercel project dashboard
2. Click on **Functions** tab
3. Check for any errors in `/api/auth`

### 5. **Common Issues**

**Issue:** 404 on `/api/auth`
- **Solution:** Make sure `api/auth.js` exists and is committed to Git
- **Solution:** Redeploy after adding environment variables

**Issue:** 500 error on `/api/auth`
- **Solution:** Check that all environment variables are set
- **Solution:** Check Vercel function logs for specific error

**Issue:** "Firebase configuration not properly set"
- **Solution:** Verify all environment variables are added in Vercel dashboard
- **Solution:** Make sure variable names match exactly (case-sensitive)

### 6. **Redeploy After Changes**

After updating `vercel.json` or environment variables:
1. Push changes to Git
2. Vercel will auto-deploy, OR
3. Manually trigger redeploy in Vercel dashboard

## 🔍 Debugging Steps

1. **Check Vercel Deployment Logs:**
   - Go to your project → **Deployments**
   - Click on latest deployment
   - Check build logs for errors

2. **Test API Endpoint:**
   ```bash
   curl https://your-app.vercel.app/api/auth
   ```

3. **Check Browser Console:**
   - Open browser DevTools
   - Check Network tab
   - Look for `/api/auth` request
   - Check response status and body

4. **Verify Environment Variables:**
   - In Vercel dashboard, verify all 9 variables are set
   - Check for typos in variable names
   - Ensure no extra spaces in values

