import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const screenSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
