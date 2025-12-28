# 🎵 Spotify Integration Setup Guide

## ⚠️ CRITICAL SECURITY STEPS

### 1. Regenerate Your Client Secret NOW!

You accidentally exposed your Client Secret. Follow these steps immediately:

1. Go to: https://developer.spotify.com/dashboard
2. Click on your app
3. Click "Settings"
4. Under "Client Secret", click "View client secret" then "Rotate client secret"
5. Save your NEW Client Secret securely (don't share it!)

### 2. Configure Your Spotify App

1. **Go to Spotify Dashboard**: https://developer.spotify.com/dashboard
2. **Open your app settings**
3. **Add Redirect URIs**:
   - For local development: `http://localhost:4200/callback`
   - For production: `https://vidanilo10.github.io/blog/callback`
4. **Save the settings**

### 3. Update Environment Files (SECURELY)

**For Local Development:**

Edit: `my-blog/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  spotify: {
    clientId: '71b3379b4a87423089781cf332a2bd83', // Your Client ID (safe to use in frontend)
    clientSecret: '', // NEVER put this in frontend code!
    redirectUri: 'http://localhost:4200/callback'
  }
};
```

**For Production:**

Edit: `my-blog/src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  spotify: {
    clientId: '71b3379b4a87423089781cf332a2bd83', // Your Client ID
    clientSecret: '', // NEVER put this in frontend code!
    redirectUri: 'https://vidanilo10.github.io/blog/callback'
  }
};
```

### 4. Add Environment Files to .gitignore

Make sure these files are NOT committed to GitHub:

```bash
cd c:\Users\Victor\projects\blog\my-blog
echo "src/environments/environment.ts" >> .gitignore
echo "src/environments/environment.prod.ts" >> .gitignore
```

### 5. Test Locally

```powershell
cd c:\Users\Victor\projects\blog\my-blog
npm start
```

Then:
1. Open http://localhost:4200/music
2. Click "Connect with Spotify"
3. Authorize the app
4. You should see your playlists!

### 6. Deploy to Production

Before deploying, create environment template files:

**Create:** `my-blog/src/environments/environment.template.ts`
```typescript
export const environment = {
  production: false,
  spotify: {
    clientId: 'YOUR_CLIENT_ID_HERE',
    clientSecret: '',
    redirectUri: 'http://localhost:4200/callback'
  }
};
```

Then commit and push:

```powershell
cd c:\Users\Victor\projects\blog
git add .
git commit -m "Add Spotify integration with secure OAuth flow"
git push
```

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Use Client ID in frontend code (it's public)
- ✅ Use Implicit Grant Flow (no client secret needed)
- ✅ Store access tokens in sessionStorage (not localStorage)
- ✅ Add redirect URIs to your Spotify app settings
- ✅ Use environment variables for configuration

### ❌ DON'T:
- ❌ NEVER commit Client Secret to Git
- ❌ NEVER expose Client Secret in frontend code
- ❌ NEVER share credentials publicly
- ❌ Don't use Authorization Code Flow in frontend (requires server)

---

## 🎯 How It Works

1. **User clicks "Connect with Spotify"**
2. **Redirects to Spotify login** (Implicit Grant Flow)
3. **User authorizes your app**
4. **Spotify redirects back** with access token in URL
5. **App extracts token** and stores in sessionStorage
6. **App loads user's playlists** using the token

---

## 📝 Available Features

Once connected, users can:
- View their personal Spotify playlists
- See playlist details
- Play music directly in the browser
- Disconnect anytime

---

## 🔧 Troubleshooting

### "Invalid Redirect URI"
- Make sure you added the exact redirect URI to Spotify dashboard
- Check spelling and protocol (http vs https)

### "Invalid Client"
- Verify your Client ID is correct
- Check if the app is properly configured in Spotify dashboard

### "Token Expired"
- Tokens expire after 1 hour
- User needs to reconnect
- App will automatically prompt to reconnect

---

## 📚 Next Steps

1. Regenerate your Client Secret
2. Add redirect URIs to Spotify app
3. Update environment files
4. Test locally
5. Deploy to production

---

**Remember:** Never share your Client Secret publicly again! Keep it safe! 🔐
