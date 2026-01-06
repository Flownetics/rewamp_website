# 🚀 Complete Railway Deployment Guide - Step by Step

Your code is **READY** for Railway hosting! All configuration files are in place. Follow these steps to deploy.

---

## ✅ Pre-Deployment Checklist

Your project has:
- ✅ `railway.json` - Railway build configuration
- ✅ `nixpacks.toml` - Build process configuration
- ✅ `Procfile` - Start command configuration
- ✅ Server configured to serve static files
- ✅ Code pushed to GitHub

---

## 📋 Step 1: Set Up MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for a **FREE** account
3. Create a new organization (or use default)

### 1.2 Create a Cluster
1. Click **"Build a Database"**
2. Choose **FREE (M0)** tier
3. Select a cloud provider and region (choose closest to you)
4. Name your cluster: `flownetics-cluster`
5. Click **"Create"** (takes 3-5 minutes)

### 1.3 Create Database User
1. Go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter:
   - **Username**: `flownetics-admin` (or your choice)
   - **Password**: Create a strong password (SAVE THIS!)
5. Set privileges to **"Atlas admin"**
6. Click **"Add User"**

### 1.4 Configure Network Access
1. Go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
4. Click **"Confirm"**

### 1.5 Get Connection String
1. Go to **Database** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** and version **"5.5 or later"**
5. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **Replace `<username>`** with your database username
7. **Replace `<password>`** with your database password (URL encode special characters)
8. **Add database name**: Change `?retryWrites=true` to `/flownetics_website?retryWrites=true`
9. **Final format should be:**
   ```
   mongodb+srv://flownetics-admin:YourPassword@cluster0.xxxxx.mongodb.net/flownetics_website?retryWrites=true&w=majority
   ```
10. **SAVE THIS CONNECTION STRING** - You'll need it for Railway!

---

## 📧 Step 2: Set Up Gmail API (For Email Functionality)

### 2.1 Create Google Cloud Project
1. Go to https://console.cloud.google.com/
2. Click **"Select a project"** → **"New Project"**
3. Name it: `flownetics-email`
4. Click **"Create"**

### 2.2 Enable Gmail API
1. In Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for **"Gmail API"**
3. Click on it and click **"Enable"**

### 2.3 Configure OAuth Consent Screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **"External"** → Click **"Create"**
3. Fill in:
   - **App name**: `Flownetics`
   - **User support email**: Your email
   - **Developer contact**: Your email
4. Click **"Save and Continue"** through all steps
5. Add your email as a test user (if needed)

### 2.4 Create OAuth 2.0 Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Application type: **"Web application"**
4. Name: `Flownetics Gmail API`
5. **Authorized redirect URIs**: Add `https://developers.google.com/oauthplayground`
6. Click **"Create"**
7. **SAVE the Client ID and Client Secret**

### 2.5 Get Refresh Token
1. Go to https://developers.google.com/oauthplayground
2. Click the **gear icon (⚙️)** in top right
3. Check **"Use your own OAuth credentials"**
4. Enter your **Client ID** and **Client Secret**
5. In left panel, find **"Gmail API v1"**
6. Check `https://www.googleapis.com/auth/gmail.send`
7. Click **"Authorize APIs"**
8. Sign in with the Gmail account you want to use for sending emails
9. Click **"Allow"**
10. Click **"Exchange authorization code for tokens"**
11. **COPY the "Refresh token"** - You'll need this!

### 2.6 Save Your Gmail Credentials
You now have:
- ✅ **Gmail Client ID**
- ✅ **Gmail Client Secret**
- ✅ **Gmail Refresh Token**
- ✅ **Gmail User** (the email address you authorized)

---

## 🚂 Step 3: Deploy to Railway

### 3.1 Create Railway Account
1. Go to https://railway.app
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (recommended) or email
4. Authorize Railway to access your GitHub account

### 3.2 Create New Project
1. In Railway dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Find and select your repository: `flownetics-landing-page`
4. Railway will start detecting your project automatically

### 3.3 Configure Root Directory
1. Click on your project in Railway
2. Go to **Settings** tab
3. Scroll to **Root Directory**
4. Set it to: `project` (since your code is in the `project` folder)
5. Click **"Update"**

### 3.4 Set Environment Variables
1. In your Railway project, go to **Variables** tab
2. Click **"New Variable"** and add each of these one by one:

#### Backend Variables (Required):

**Variable 1:**
- **Name**: `PORT`
- **Value**: `3001`
- Click **"Add"**

**Variable 2:**
- **Name**: `NODE_ENV`
- **Value**: `production`
- Click **"Add"**

**Variable 3:**
- **Name**: `MONGODB_URI`
- **Value**: Your MongoDB connection string from Step 1.5
  ```
  mongodb+srv://flownetics-admin:YourPassword@cluster0.xxxxx.mongodb.net/flownetics_website?retryWrites=true&w=majority
  ```
- Click **"Add"**

**Variable 4:**
- **Name**: `GMAIL_CLIENT_ID`
- **Value**: Your Gmail Client ID from Step 2.4
- Click **"Add"**

**Variable 5:**
- **Name**: `GMAIL_CLIENT_SECRET`
- **Value**: Your Gmail Client Secret from Step 2.4
- Click **"Add"**

**Variable 6:**
- **Name**: `GMAIL_REFRESH_TOKEN`
- **Value**: Your Gmail Refresh Token from Step 2.5
- Click **"Add"**

**Variable 7:**
- **Name**: `GMAIL_USER`
- **Value**: Your Gmail email address (the one you authorized)
- Click **"Add"**

**Variable 8:**
- **Name**: `GMAIL_REDIRECT_URI`
- **Value**: `https://developers.google.com/oauthplayground`
- Click **"Add"**

#### Frontend Variables (Required):

**Variable 9:**
- **Name**: `VITE_API_URL`
- **Value**: `https://your-app-name.up.railway.app` (We'll update this after getting your Railway URL)
- Click **"Add"**

**Variable 10:**
- **Name**: `VITE_CAL_LINK`
- **Value**: `https://cal.com/me-aniketh/30min`
- Click **"Add"**

### 3.5 Get Your Railway URL
1. Go to **Settings** → **Networking** tab
2. Under **"Custom Domain"** or **"Generate Domain"**
3. Railway will give you a URL like: `your-app-name.up.railway.app`
4. **COPY THIS URL!**

### 3.6 Update VITE_API_URL
1. Go back to **Variables** tab
2. Find `VITE_API_URL` in the list
3. Click the **pencil icon** to edit
4. Update it with your actual Railway URL:
   ```
   https://your-app-name.up.railway.app
   ```
   (Replace `your-app-name.up.railway.app` with your actual URL)
5. Click **"Update"**
6. Railway will automatically redeploy

### 3.7 Monitor Deployment
1. Go to **Deployments** tab
2. Watch the build logs in real-time
3. Wait for:
   - ✅ **"Build Successful"**
   - ✅ **"Deploy Successful"**
4. This usually takes **3-5 minutes**

---

## ✅ Step 4: Verify Deployment

### 4.1 Test Your Website
1. Visit your Railway URL: `https://your-app-name.up.railway.app`
2. Check if homepage loads correctly
3. Test navigation

### 4.2 Test Key Features

**Contact Form:**
1. Go to Contact page
2. Fill out and submit
3. Check if it works

**Blog Pages:**
1. Navigate to Blog section
2. Check if blogs load

**ROI Calculator:**
1. Test the calculator
2. Try downloading a report (should send email)

**Admin Dashboard:**
1. Visit: `https://your-app-name.up.railway.app/gdhjeuebd/snhdhftT`
2. Login with:
   - Username: `flownetics`
   - Password: `Flow@AV_2025`
3. Check if dashboard loads

### 4.3 Check Server Logs
1. In Railway, go to **Deployments** tab
2. Click on the latest deployment
3. View logs and look for:
   - ✅ `"Connected to MongoDB"`
   - ✅ `"Server running on port 3001"`
   - ✅ `"Serving static files from dist folder"`
   - ❌ No error messages

---

## 🔧 Step 5: Troubleshooting

### Issue: Build Fails
**Solution:**
- Check build logs in Railway
- Ensure Node.js version is 18+ (already set in `nixpacks.toml`)
- Verify all dependencies are in `package.json`

### Issue: 404 Errors on Pages
**Solution:**
- Check if `dist/` folder was created during build
- Verify server is serving static files (check logs)
- Ensure `NODE_ENV=production` is set

### Issue: API Connection Errors
**Solution:**
- Verify `VITE_API_URL` matches your Railway domain exactly
- Check CORS settings in server (should allow all in production)
- Check server logs for API errors

### Issue: MongoDB Connection Fails
**Solution:**
- Verify `MONGODB_URI` is correct (check password encoding)
- Ensure MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check database name is `flownetics_website`
- Check MongoDB Atlas logs

### Issue: Email Not Sending
**Solution:**
- Verify all Gmail API credentials are set correctly
- Check Gmail API is enabled in Google Cloud Console
- Verify refresh token is valid
- Check server logs for Gmail API errors
- Ensure OAuth consent screen is configured

### Issue: Static Files Not Loading
**Solution:**
- Ensure build completed successfully (`dist/` folder exists)
- Check server logs for "Serving static files from dist folder"
- Verify `NODE_ENV=production` is set

---

## 📝 Environment Variables Quick Reference

Copy this list when setting up Railway variables:

```
PORT=3001
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/flownetics_website?retryWrites=true&w=majority
GMAIL_CLIENT_ID=your-gmail-client-id
GMAIL_CLIENT_SECRET=your-gmail-client-secret
GMAIL_REFRESH_TOKEN=your-gmail-refresh-token
GMAIL_USER=your-email@gmail.com
GMAIL_REDIRECT_URI=https://developers.google.com/oauthplayground
VITE_API_URL=https://your-app-name.up.railway.app
VITE_CAL_LINK=https://cal.com/me-aniketh/30min
```

---

## 🎉 Success Checklist

Your deployment is successful when:

- [ ] Website loads at Railway URL
- [ ] All pages navigate correctly
- [ ] Contact form submits successfully
- [ ] Blog pages load
- [ ] ROI calculator works
- [ ] Admin dashboard accessible
- [ ] MongoDB connection successful (check logs)
- [ ] Email sending works (test ROI report download)

---

## 🔄 Updating Your Website

After making changes:

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

2. **Railway will automatically detect changes and redeploy**

3. **Monitor deployment** in Railway dashboard

---

## 📞 Important Notes

1. **Root Directory**: Must be set to `project` in Railway settings
2. **Environment Variables**: All 10 variables must be set
3. **MongoDB**: Free tier works perfectly for this project
4. **Gmail API**: Free tier allows 100 emails/day
5. **Railway**: Free tier includes $5 credit/month

---

## 🎊 Congratulations!

Your Flownetics website is now live on Railway! 

**Your website URL:** `https://your-app-name.up.railway.app`

If you encounter any issues, check the troubleshooting section or review the Railway deployment logs.

