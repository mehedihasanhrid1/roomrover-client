import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        const loggedUser = { email: user.email };
        axios
          .post("https://roomrover-sever-hz75sv5qr-mehedi-hasans-hrid.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .catch((error) => {
            console.error("Error setting JWT_TOKEN:", error);
          });
      } else {
        axios.post("https://roomrover-sever-hz75sv5qr-mehedi-hasans-hrid.vercel.app/logout", null, {
          withCredentials: true,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    auth,
    user,
    loading,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
