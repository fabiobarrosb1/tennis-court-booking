import React from "react";
import { LocationCombobox } from "../Combobox/LocationCombobox";
import { DurationCombobox } from "../Combobox/DurationCombobox";
import { ModeToggle } from "../Toggle/ToggleTheme";

const BookingSettings = () => {
  return (
    <div className="flex flex-col gap-10 p-10 w-fit mx-auto booking-settings">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Book a Court</h1>
        <span className="block md:hidden">
          <ModeToggle />
        </span>
      </div>
      <div className="flex flex-row gap-8 md:flex-col custom:flex-col custom:w-400">
        <div>
          <p>Location</p>
          <LocationCombobox />
        </div>
        <div>
          <p>Duration</p>
          <DurationCombobox />
        </div>
      </div>
    </div>
  );
};

export default BookingSettings;
