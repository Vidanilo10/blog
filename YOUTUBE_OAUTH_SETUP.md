# YouTube OAuth Setup Guide

To show your actual liked videos from YouTube, you need to set up OAuth authentication:

## 📋 **Step 1: Create Google Cloud Project**

1. Go to: https://console.cloud.google.com
2. Click "Select a project" → "New Project"
3. Name: "My Blog" (or any name)
4. Click "Create"

## 🔑 **Step 2: Enable YouTube Data API**

1. In your project, go to: "APIs & Services" → "Library"
2. Search for "YouTube Data API v3"
3. Click on it and click "Enable"

## 🎫 **Step 3: Create OAuth Credentials**

1. Go to: "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure OAuth consent screen:
   - User Type: External
   - App name: "My Blog"
   - User support email: Your email
   - Developer contact: Your email
   - Scopes: Add `../auth/youtube.readonly`
   - Test users: Add your own Gmail address
   - Click "Save and Continue"

4. Create OAuth Client ID:
   - Application type: **Web application**
   - Name: "My Blog"
   - **Authorized redirect URIs** - Add these:
     - `http://localhost:4200/youtube-callback`
     - `https://vidanilo10.github.io/blog/youtube-callback`
   - Click "Create"

5. **Copy your Client ID** (looks like: `123456-abc.apps.googleusercontent.com`)

## 🔧 **Step 4: Update Environment Files**

Replace `YOUR_YOUTUBE_CLIENT_ID` in:

**`my-blog/src/environments/environment.ts`**
```typescript
youtube: {
  apiKey: 'AIzaSyACL4fHnPIRNnuJpZ61YNuXpKDnY-FExw4',
  clientId: 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com',
  redirectUri: 'http://localhost:4200/youtube-callback'
}
```

**`my-blog/src/environments/environment.prod.ts`**
```typescript
youtube: {
  apiKey: 'AIzaSyACL4fHnPIRNnuJpZ61YNuXpKDnY-FExw4',
  clientId: 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com',
  redirectUri: 'https://vidanilo10.github.io/blog/youtube-callback'
}
```

## 🚀 **Step 5: Test**

1. Commit and push changes
2. Wait for deployment
3. Go to: https://vidanilo10.github.io/blog/music
4. Click "Connect YouTube"
5. Authorize the app
6. See your liked videos! 🎉

## 📝 **Important Notes:**

- ✅ OAuth Client ID is safe to use in frontend (unlike Client Secret)
- ✅ Only shows videos you've clicked "Like" on YouTube
- ✅ Uses the same secure OAuth flow as Spotify
- ⚠️ App will be in "Testing" mode - only works for test users you added
- 💡 To make it public, you need to verify your app (optional)

## 🔒 **Security:**

- Never share your Client Secret (we don't use it - Implicit Grant Flow)
- Client ID can be public (it's in your frontend code)
- Redirect URIs must match exactly what's in Google Console

---

**Need Help?** The setup is similar to Spotify OAuth - same flow, just different provider!
