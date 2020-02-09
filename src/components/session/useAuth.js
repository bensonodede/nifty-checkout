import { useState, useEffect } from "react";

const useAuth = firebase => {
  // Auth user state
  const [state, setState] = useState(() => {
    // Get current signed in user
    const authUser = firebase.auth.currentUser;

    // Initializing and auth user state
    return { initializing: !authUser, authUser };
  });

  // Set current user to state
  const onChange = authUser => {
    setState({ initializing: false, authUser });
  };

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth.onAuthStateChanged(onChange);

    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};

export default useAuth;
