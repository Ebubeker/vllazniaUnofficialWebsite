import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navIs, setNav] = useState(true);

  return (
    <NavbarContext.Provider value={{ navIs, setNav }}>
      {children}
    </NavbarContext.Provider>
  );
};
