# 🚀 Render Deployment - Step-by-Step Walkthrough

Let's deploy your app to Render together! This is the easiest and fastest way to get your app online.

---

## 📋 What You'll Need

- ✅ GitHub account (free)
- ✅ About 10-15 minutes
- ✅ Your code ready

---

## STEP 1: Prepare Your Code for GitHub (5 min)

### 1.1: Check Git Status

Open Terminal and run:

```bash
cd "/Users/wasifkarim/Desktop/Job Searching/job-pulse"
git status
```

### 1.2: Add All Files

```bash
git add .
```

### 1.3: Commit Changes

```bash
git commit -m "Ready for Render deployment"
```

### 1.4: Check Your GitHub Remote

```bash
git remote -v
```

**If you see a remote URL, you're good!** If not, we'll add one in the next step.

**✅ Tell me what you see!**

---

## STEP 2: Push to GitHub (3 min)

### 2.1: Check if You Have a GitHub Repo

You already have a remote: `https://github.com/Wasif-Karim03/AlphabetSoup.git`

**Option A: Use Existing Repo**
If you want to use your existing repo, just push:

```bash
git push origin main
```

**Option B: Create New Repo** (Recommended - cleaner name)
1. Go to https://github.com/new
2. Repository name: `un-employed` (or any name you like)
3. **DO NOT** check "Initialize with README"
4. Click "Create repository"
5. Then run:

```bash
git remote set-url origin https://github.com/Wasif-Karim03/un-employed.git
git push -u origin main
```

**If it asks for credentials:**
- Use a Personal Access Token (not password)
- Create one at: https://github.com/settings/tokens
- Select "repo" scope
- Copy the token and use it as password

**✅ Tell me when your code is pushed to GitHub!**

---

## STEP 3: Sign Up for Render (2 min)

### 3.1: Go to Render

1. Open: **https://render.com**
2. Click **"Get Started for Free"** (top right)

### 3.2: Sign Up with GitHub

1. Click **"Sign up with GitHub"**
2. Authorize Render to access your GitHub
3. You'll be redirected to Render dashboard

**✅ Tell me when you're logged into Render!**

---

## STEP 4: Create Web Service (5 min)

### 4.1: Start Creating Service

1. In Render dashboard, click **"New +"** (top right)
2. Click **"Web Service"**

### 4.2: Connect GitHub Repository

1. You'll see "Connect a repository"
2. Click **"Connect account"** if needed
3. Find your repository (`AlphabetSoup` or `un-employed`)
4. Click **"Connect"** next to it

### 4.3: Configure Service

Fill in these settings:

**Name:**
- Enter: `un-employed` (or any name you like)

**Region:**
- Choose closest to you (e.g., "Oregon (US West)")

**Branch:**
- Should be `main` (default)

**Root Directory:**
- Leave empty (default)

**Runtime:**
- Select **"Python 3"**

**Build Command:**
```
pip install -r requirements.txt
```

**Start Command:**
```
python -m app.ui
```

**Plan:**
- Select **"Free"** (the free tier)

### 4.4: Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these one by one:

**Variable 1:**
- **Key:** `PORT`
- **Value:** `5001`
- Click **"Add"**

**Variable 2:**
- **Key:** `FLASK_ENV`
- **Value:** `production`
- Click **"Add"**

**Variable 3:**
- **Key:** `FLASK_SECRET_KEY`
- **Value:** Generate a random string (you can use: `openssl rand -hex 32` in terminal, or just make up a long random string)
- Click **"Add"**

**Example secret key:** `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

### 4.5: Create Service

1. Scroll down
2. Click **"Create Web Service"**
3. Render will start building your app!

**✅ Tell me when you've clicked "Create Web Service"!**

---

## STEP 5: Wait for Deployment (5-10 min)

### 5.1: Watch the Build

You'll see:
1. **"Building"** - Installing dependencies
2. **"Deploying"** - Starting your app
3. **"Live"** - Your app is running!

### 5.2: Check Logs

While building, you can:
- Click on the service name
- Go to **"Logs"** tab
- Watch the build progress

**Common things you'll see:**
- `Installing dependencies...`
- `Collecting flask...`
- `Starting app...`

### 5.3: Check for Errors

If you see errors in logs:
- **Build failed?** - Check `requirements.txt` has all packages
- **App won't start?** - Check logs for error messages
- **Port error?** - Make sure `PORT` environment variable is set

**✅ Tell me what you see in the logs!**

---

## STEP 6: Access Your App! 🎉

### 6.1: Get Your URL

Once it says **"Live"**:
1. Look at the top of the page
2. You'll see: `https://un-employed.onrender.com` (or your service name)
3. **That's your live app URL!**

### 6.2: Test It

1. Click the URL or copy it
2. Open in a new tab
3. **Your app should be live!**

**Note:** First load might take 30-60 seconds (free tier spins down after 15 min inactivity)

**✅ Does your app load? Tell me what you see!**

---

## 🎉 Success Checklist

- ✅ Code pushed to GitHub
- ✅ Render account created
- ✅ Web service created
- ✅ Environment variables set
- ✅ App deployed and live
- ✅ Can access your app via URL

---

## 🆘 Troubleshooting

### Build Fails

**Error: "Module not found"**
- Check `requirements.txt` has all dependencies
- Make sure all packages are listed

**Error: "Python version"**
- Check `runtime.txt` has correct Python version
- Render supports Python 3.7+

### App Won't Start

**Error: "Port already in use"**
- Make sure `PORT` environment variable is set to `5001`
- Check your code uses `os.environ.get('PORT', 5001)`

**Error: "Database error"**
- SQLite files might not persist on free tier
- Consider using PostgreSQL (free on Render)

**502 Bad Gateway**
- App might have crashed
- Check logs for error messages
- Make sure start command is correct: `python -m app.ui`

### App is Slow

**First request takes 30-60 seconds:**
- This is normal! Free tier spins down after 15 min inactivity
- Subsequent requests are fast
- Consider upgrading to paid tier for always-on

---

## 🔧 Optional: Add PostgreSQL Database

If you want a proper database (recommended for production):

### Step 1: Create Database

1. In Render dashboard, click **"New +"**
2. Click **"PostgreSQL"**
3. Name: `un-employed-db`
4. Plan: **Free**
5. Click **"Create Database"**

### Step 2: Get Connection String

1. Click on your database
2. Find **"Internal Database URL"**
3. Copy it

### Step 3: Add to Environment Variables

1. Go back to your web service
2. Go to **"Environment"** tab
3. Add:
   - **Key:** `DATABASE_URL`
   - **Value:** (paste the Internal Database URL)
4. Click **"Save Changes"**

### Step 4: Update Your Code

You'll need to modify your code to use PostgreSQL instead of SQLite. But for now, SQLite works fine for testing!

---

## 📝 Important Notes

### Free Tier Limitations

- ⚠️ **Spins down after 15 min inactivity** - First request takes 30-60 seconds
- ⚠️ **Limited resources** - 512 MB RAM
- ⚠️ **No persistent disk** - Files might be lost on restart (use cloud storage for resumes)

### Best Practices

- ✅ Use environment variables for secrets
- ✅ Don't commit `.env` files
- ✅ Use PostgreSQL for production databases
- ✅ Use cloud storage (S3, Cloudinary) for file uploads

---

## 🎯 Next Steps

1. **Test your app** - Make sure everything works
2. **Get a custom domain** (optional)
3. **Set up SSL/HTTPS** (Render does this automatically!)
4. **Monitor your app** - Check logs regularly

---

## ✅ You're Done!

Your app is now:
- ✅ Live on the internet
- ✅ Accessible from anywhere
- ✅ Free to host
- ✅ Automatically deployed from GitHub

**Share your URL:** `https://un-employed.onrender.com` 🚀

---

**Let me know which step you're on and I'll help you through it!**
