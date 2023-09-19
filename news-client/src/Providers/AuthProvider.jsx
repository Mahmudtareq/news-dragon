/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "./../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("tare");
  const googleProvider = new GoogleAuthProvider();
  const loginUser = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { loginUser, user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
