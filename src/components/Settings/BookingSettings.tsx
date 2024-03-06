import React from "react";
import { LocationCombobox } from "../Combobox/LocationCombobox";
import { DurationCombobox } from "../Combobox/DurationCombobox";
import { Button } from "@/components/ui/button";
import { useAppContext } from "../Context/MyContext";
import { AddToCalendarButton } from "add-to-calendar-button-react";

interface Props {
  // Define your props here
}

const BookingSettings = (props: Props) => {
  const { date, hour, duration, location } = useAppContext();

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
    <div className="flex flex-col gap-10 p-20">
      <h1 className="text-3xl font-bold">Book a Court</h1>
      <div>
        <p>Location</p>
        <LocationCombobox />
      </div>
      <div>
        <p>Duration</p>
        <DurationCombobox />
      </div>
      <AddToCalendarButton
        name={`Tennis-Court: ${upperCaseFirstLetter(location)}`}
        startDate={date.toISOString().split("T")[0]}
        startTime={hour}
        endTime={calculateEndHour(hour, duration)}
        options="'Apple','Google','iCal','MicrosoftTeams'"
        timeZone="America/Los_Angeles"
        hideIconButton
        hideBackground
        hideCheckmark
      />
    </div>
  );
};

export default BookingSettings;
