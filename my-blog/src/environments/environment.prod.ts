export const environment = {
  production: true,
  spotify: {
    clientId: '71b3379b4a87423089781cf332a2bd83',
    clientSecret: '', // NEVER use client secret in frontend!
    redirectUri: 'https://vidanilo10.github.io/blog/callback'
  },
  youtube: {
    apiKey: 'AIzaSyACL4fHnPIRNnuJpZ61YNuXpKDnY-FExw4',
    clientId: 'YOUR_YOUTUBE_CLIENT_ID', // Get from Google Cloud Console
    redirectUri: 'https://vidanilo10.github.io/blog/youtube-callback'
  }
};
