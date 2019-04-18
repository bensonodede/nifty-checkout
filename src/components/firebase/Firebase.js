import app from "firebase/app";

import auth from "firebase/auth";

// Firebase config values stored in env variables file
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// Create Firebase class and initialize firebase instance
class Firebase {
  constructor() {
    // Initialize Firebase app
    app.initializeApp(config);

    // Initialize Firebase Auth instance
    this.auth = app.auth();

    // Define social auth providers
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // Firebase Google sign in
  doSignInWithGoogle = () => this.auth.signInWithRedirect(this.googleProvider);

  // Firebase Facebook sign in
  doSignInWithFacebook = () =>
    this.auth.signInWithRedirect(this.facebookProvider);

  // Firebase Twitter sign in
  doSignInWithTwitter = () =>
    this.auth.signInWithRedirect(this.twitterProvider);

  // Firebase auth sign out
  doSignOut = () => this.auth.signOut();
}

export default Firebase;
