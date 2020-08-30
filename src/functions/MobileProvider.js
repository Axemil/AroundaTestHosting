import React, { createContext, useState } from 'react';
export const Context = createContext();

const MobileProvider = ({ children, isMobile }) => {
  return (
    <Context.Provider value={{ isMobile }}>
      {children}
    </Context.Provider>
  )
}
export default MobileProvider;