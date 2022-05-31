import { createContext, useEffect, useState } from "react";
import { userStateChecker } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser);
  useEffect(() => {
    userStateChecker(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
