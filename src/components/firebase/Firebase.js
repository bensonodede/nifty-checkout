import app from "firebase/app";
import "firebase/auth";

// Production firebase config
const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID
};

// Development firebase config
const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
};

// Define production domain
let productionHost = "magicfinn.com";

// Create Firebase class and initialize firebase instance
class Firebase {
  constructor() {
    // Check if site is using production domain or development domain
    if (window.location.hostname.toLowerCase().search(productionHost) < 0) {
      // Initialize DEVELOPMENT DOMAIN firebase
      app.initializeApp(devConfig);
    } else {
      // Initialize PRODUCTION DOMAIN firebase
      app.initializeApp(prodConfig);
    }

    // Initialize Firebase Auth instance
    this.auth = app.auth();

    // Define social auth providers
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  //Sign in with custom token
  dosignInWithCustomToken = token => this.auth.signInWithCustomToken(token);

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
