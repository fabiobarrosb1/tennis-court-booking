import React from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "./Context/MyContext";

const hours = ["12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"];

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
    <div>
      {/* Display selectedDate */}
      <p>{formatDate(date)}</p>
      <div className={`flex flex-col gap-4`}>
        {hours.map((hourItem, index) => (
          <Button
            className={`${
              hour === hourItem ? "hour-selected-button" : "hour-button"
            }`}
            key={index}
            variant="outline"
            onClick={() => {
              setHour(hourItem);
            }}
          >
            {hourItem}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HourSettings;
