import React, { useState } from "react";
import CalendarSettings from "./CalendarSettings";
import HourSettings from "./HourSettings";
import { useAppContext } from "./Context/MyContext";

const DateComponent = () => {
  const { setDate } = useAppContext();

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date ?? new Date());
  };

  return (
    <div className={`flex flex-col w-full p-20`}>
      <div className="flex m-2">
        <h1 className="text-2xl font-bold">Pick a date and time</h1>
      </div>
      <div className="flex flex-row justify-between w-full">
        <CalendarSettings onSelectDate={handleDateSelect} />
        <HourSettings />
      </div>
    </div>
  );
};

export default DateComponent;
