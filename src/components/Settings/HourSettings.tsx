import React from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "../Context/MyContext";

const hours = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];

const HourSettings = () => {
  const { date, hour, setHour } = useAppContext();

  // Format the date to display
  const formatDate = (date: Date | undefined) => {
    if (date) {
      // Options to specify the desired format
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("en-US", options); // Set locale to 'en-US'
    }
    return "None"; // Return "None" if selectedDate is undefined
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Display selectedDate */}
      <p>{formatDate(date)}</p>
      {/* Div with hour buttons */}
      <div className={`flex flex-col gap-4`}>
        {hours.map((hourItem, index) => (
          <Button
            className={`${
              hour === hourItem ? "hour-selected-button" : "hour-button"
            } px-20 py-6`}
            key={index}
            variant="outline"
            onClick={() => {
              setHour(hourItem);
            }}
          >
            {hourItem}pm
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HourSettings;
