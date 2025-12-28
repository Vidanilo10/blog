export const environment = {
  production: false,
  spotify: {
    clientId: '71b3379b4a87423089781cf332a2bd83',
    clientSecret: '', // NEVER use client secret in frontend!
    redirectUri: 'http://localhost:4200/callback'
  },
  youtube: {
    apiKey: 'AIzaSyACL4fHnPIRNnuJpZ61YNuXpKDnY-FExw4',
    clientId: '529992481616-rhe0dshrn0ilrbggl6se921djppdps89.apps.googleusercontent.com',
    redirectUri: 'http://localhost:4200/youtube-callback'
  }
};
