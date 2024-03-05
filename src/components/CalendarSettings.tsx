import React from "react";
import { Calendar } from "@/components/ui/calendar";

interface Props {
  onSelectDate: (date: Date | undefined) => void; // Callback function type
}

const CalendarSettings = (props: Props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDateSelect = (day: Date | undefined) => {
    console.log("Selected date:", day);
    props.onSelectDate(day);
    setDate(day);
  };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md border"
      />
    </div>
  );
};

export default CalendarSettings;
