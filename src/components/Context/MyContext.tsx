import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context
type AppContextType = {
  date: Date;
  hour: string;
  setDate: (date: Date) => void;
  setHour: (hour: string) => void;
};

interface AppProviderProps {
  children: ReactNode;
}

const initialDate = new Date(); // Default to today's date

const initialContext: AppContextType = {
  date: initialDate,
  hour: "",
  setDate: () => {},
  setHour: () => {},
};

const AppContext = createContext<AppContextType>(initialContext);

// Create a provider for the context
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [date, setDate] = useState<Date>(initialDate);
  const [hour, setHour] = useState<string>("");

  return (
    <AppContext.Provider value={{ date, setDate, hour, setHour }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useAppContext = () => useContext(AppContext);
