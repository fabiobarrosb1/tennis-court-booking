import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context
type AppContextType = {
  date: Date;
  hour: string;
  duration?: number; // New variable for duration
  location: string; // New variable for location
  setDate: (date: Date) => void;
  setHour: (hour: string) => void;
  setDuration: (duration: number) => void; // Function to set duration
  setLocation: (location: string) => void; // Function to set location
};

interface AppProviderProps {
  children: ReactNode;
}

const initialDate = new Date(); // Default to today's date

const initialContext: AppContextType = {
  date: initialDate,
  hour: "",
  duration: undefined, // Default duration
  location: "", // Default location
  setDate: () => {},
  setHour: () => {},
  setDuration: () => {},
  setLocation: () => {},
};

const AppContext = createContext<AppContextType>(initialContext);

// Create a provider for the context
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [date, setDate] = useState<Date>(initialDate);
  const [hour, setHour] = useState<string>("");
  const [duration, setDuration] = useState<number>(); // Default duration
  const [location, setLocation] = useState<string>(""); // Default location

  return (
    <AppContext.Provider
      value={{
        date,
        hour,
        duration,
        location,
        setDate,
        setHour,
        setDuration,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useAppContext = () => useContext(AppContext);
