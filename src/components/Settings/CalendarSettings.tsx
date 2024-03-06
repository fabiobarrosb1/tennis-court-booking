import React from "react";
import { Calendar } from "@/components/ui/calendar";

type Props = {
  onSelectDate: (day: Date | undefined) => void;
  initialDate?: Date;
};

const CalendarSettings: React.FC<Props> = ({ onSelectDate, initialDate }) => {
  const [date, setDate] = React.useState<Date | undefined>(
    initialDate || new Date()
  );

  const handleDateSelect = React.useCallback(
    (day: Date | undefined) => {
      console.log("Selected date:", day);
      onSelectDate(day);
      setDate(day);
    },
    [onSelectDate]
  );

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md"
        showOutsideDays={false}
      />
    </div>
  );
};

CalendarSettings.displayName = "CalendarSettings";

export default React.memo(CalendarSettings);
