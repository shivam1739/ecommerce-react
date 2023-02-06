import { createContext, useEffect, useState } from "react";
export const userContext = createContext();
export default function UserContext({ children }) {
  const initialState = {
    name: "",
    email: "",
    token: "",
    userId: "",
  };
  const [user, setUser] = useState(() => initialState);
  const [headerName, setHeaderName] = useState(() => "Hii User");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      setHeaderName(userName);
    }
  }, []);
  return (
    <userContext.Provider value={{ user, setUser, headerName, setHeaderName }}>
      {children}
    </userContext.Provider>
  );
}
