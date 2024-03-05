import React from "react";
import { LocationCombobox } from "./Combobox/LocationCombobox";
import { DurationCombobox } from "./Combobox/DurationCombobox";
import { Button } from "@/components/ui/button";
import { useAppContext } from "./Context/MyContext";

interface Props {
  // Define your props here
}

const BookingSettings = (props: Props) => {
  const { date, hour } = useAppContext();
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
      <div>
        <div>{date.toISOString().split("T")[0]}</div>
        {hour}
      </div>

      <div>
        <p>Send</p>
        <Button variant="outline">Email informations</Button>
        <Button variant="outline">Add to your personal calendar</Button>
      </div>
    </div>
  );
};

export default BookingSettings;
