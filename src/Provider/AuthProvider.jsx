import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //* Create User(Register/SignUp)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* SignIn/LogIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //* LogOut
  const logOut = () => {
    return signOut(auth);
  };

  //* Update current user into the setUser
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
