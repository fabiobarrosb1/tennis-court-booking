import React, { useState } from "react";
import { useAppContext } from "../Context/MyContext";
import { Button } from "@/components/ui/button";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import "@/styles/globals.css";

const hours = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];

const HourSettings = () => {
  const [isAddToCalendar, setIsAddToCalendar] = useState<boolean>(false);
  const { date, hour, setHour, duration, location } = useAppContext();

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

  // Function that takes starting hour and duration and calculates the ending hour
  function calculateEndHour(
    startTime: string,
    durationInMinutes: number
  ): string {
    const [startHours, startMinutes] = startTime.split(":").map(Number);

    // Calculate total minutes
    const totalMinutes = startHours * 60 + startMinutes + durationInMinutes;

    // Calculate end hours and minutes
    const endHours = Math.floor(totalMinutes / 60) % 24; // Ensure end hour is within 0-23 range
    const endMinutes = totalMinutes % 60;

    // Format end hour and minutes
    const formattedEndHours = endHours.toString().padStart(2, "0");
    const formattedEndMinutes = endMinutes.toString().padStart(2, "0");

    return `${formattedEndHours}:${formattedEndMinutes}`;
  }

  const upperCaseFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col h-full gap-4 min-w-40 pt-4">
      {/* Display selectedDate */}
      <p>{formatDate(date)}</p>
      {/* Div with hour buttons */}
      <div className={`flex flex-col gap-4`}>
        {hours.map((hourItem, index) => (
          <>
            <div className="flex flex-row justify-between">
              {
                <Button
                  disabled={!location || !duration}
                  className={`${
                    hour === hourItem ? "hour-selected-button" : "hour-button"
                  } py-6 ${
                    !location || !duration ? "hour-time-disabled" : "hour-time"
                  }`}
                  key={index}
                  variant="outline"
                  onClick={() => {
                    setHour(hourItem);
                    if (hour === hourItem) {
                      setHour("");
                    } else {
                      setHour(hourItem);
                    }
                  }}
                >
                  {hourItem}pm
                </Button>
              }
              {hour === hourItem && (
                <>
                  <button
                    className="bg-cyan-400 px-1 py-1 rounded-md next-button"
                    onClick={() => setIsAddToCalendar(true)}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </>
        ))}

        <AddToCalendarButton
          name={`Tennis Court Reservation: ${upperCaseFirstLetter(location)}`}
          startDate={date.toISOString().split("T")[0]}
          startTime={hour ? hour : "12:00"}
          endTime={
            duration && hour ? calculateEndHour(hour, duration) : "13:00"
          }
          options="'Apple','Google','iCal','MicrosoftTeams'"
          timeZone="America/Los_Angeles"
          label="Add to Calendar"
          hideBackground
          hideCheckmark
          disabled={
            !location || !duration || !hour || !date || !isAddToCalendar
          }
        />
      </div>
    </div>
  );
};

export default HourSettings;
