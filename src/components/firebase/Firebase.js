import app from "firebase/app";
import "firebase/auth";

// Production firebase config
const prodConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_PROD_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_PROD_MESSAGING_SENDER_ID,
};

// Development firebase config
const devConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_DEV_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_DEV_MESSAGING_SENDER_ID,
};

// Create Firebase class and initialize firebase instance
class Firebase {
  constructor() {
    // Check dev environment
    if (process.env.NODE_ENV === "production") {
      // Use PRODUCTION DOMAIN firebase
      app.initializeApp(prodConfig);
    } else {
      // Use DEVELOPMENT DOMAIN firebase
      app.initializeApp(devConfig);
    }

    // Initialize Firebase Auth instance
    this.auth = app.auth();

    // Define social auth providers
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  //Sign in with custom token
  dosignInWithCustomToken = (token) => this.auth.signInWithCustomToken(token);

  // Firebase Google sign in
  doSignInWithGoogle = () => this.auth.signInWithRedirect(this.googleProvider);

  // Firebase Facebook sign in
  doSignInWithFacebook = () =>
    this.auth.signInWithRedirect(this.facebookProvider);

  // Firebase Twitter sign in
  doSignInWithTwitter = () =>
    this.auth.signInWithRedirect(this.twitterProvider);

  // Get redirect sign in result
  doGetRedirectResult = () => this.auth.getRedirectResult();

  // Firebase auth sign out
  doSignOut = () => this.auth.signOut();
}

export default Firebase;
