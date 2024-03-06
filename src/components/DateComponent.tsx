import React, { useState } from "react";
import CalendarSettings from "./Settings/CalendarSettings";
import HourSettings from "./Settings/HourSettings";
import { useAppContext } from "./Context/MyContext";
import { ModeToggle } from "./Buttons/ToggleTheme";

const DateComponent = () => {
  const { setDate } = useAppContext();

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date ?? new Date());
  };

  return (
    <div className={`flex flex-col w-full p-10`}>
      <div className="flex m-2 justify-between">
        <h1 className="text-2xl font-bold">Pick a date and time</h1>
        <ModeToggle />
      </div>
      <div className="flex flex-row justify-between w-full">
        <CalendarSettings onSelectDate={handleDateSelect} />
        <HourSettings />
      </div>
    </div>
  );
};

export default DateComponent;
