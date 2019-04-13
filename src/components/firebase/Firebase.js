import app from "firebase/app";
import "firebase/auth";

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
    app.initializeApp(config);

    // Initialize Firebase Auth instance
    this.auth = app.auth();
  }

  // Firebase phone number sign in
  doSignInWithPhoneNumber = (phoneNumber, appVerifier) =>
    this.auth.signInWithPhoneNumber(phoneNumber, appVerifier);

  // Firebase auth sign out
  doSignOut = () => this.auth.signOut();
}

export default Firebase;
