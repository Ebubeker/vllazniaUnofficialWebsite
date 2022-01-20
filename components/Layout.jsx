import React from 'react';
import { Navbar } from '.';
import { NavbarProvider } from '../contexts/NavbarContext';

const Layout = ({children}) => {
    return (
        <>
          <NavbarProvider>
            <Navbar/>
          </NavbarProvider>
          {children}  
        </>
    )
}

export default Layout;
