import React, { useState } from "react";
import CalendarSettings from "../Settings/CalendarSettings";
import HourSettings from "../Settings/HourSettings";
import { useAppContext } from "../Context/MyContext";
import { ModeToggle } from "../Toggle/ToggleTheme";

const DateComponent = () => {
  const { setDate } = useAppContext();

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date ?? new Date());
  };

  return (
    <div
      className={`flex w-fit mx-auto flex-col p-10 custom:p-5 date-component`}
    >
      <div className="flex m-2 justify-between">
        <h1 className="text-2xl font-bold">Pick a date and time</h1>
        <span className="hidden md:block">
          <ModeToggle />
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
        <CalendarSettings onSelectDate={handleDateSelect} />
        <HourSettings />
      </div>
    </div>
  );
};

export default DateComponent;
