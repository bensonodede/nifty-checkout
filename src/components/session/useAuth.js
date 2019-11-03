import { useState, useEffect } from "react";

const useAuth = firebase => {
  // Auth user state
  const [authUser, setAuthUser] = useState(() => {
    const authUser = firebase.auth.currentUser;
    return { initializing: !authUser, authUser };
  });

  // Set current user to state
  const onChange = authUser => {
    setAuthUser({ initializing: false, authUser });
  };

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth.onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return authUser;
};

export default useAuth;
