
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [template, setTemplate] = useState('Template1');
  const [image, setImage] = useState(null);

  return (
    <AppContext.Provider value={{ template, setTemplate, image, setImage }}>
      {children}
    </AppContext.Provider>
  );
};
