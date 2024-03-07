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
  const today = new Date();

  const handleDateSelect = React.useCallback(
    (day: Date | undefined) => {
      console.log("Selected date:", day);
      onSelectDate(day);
      setDate(day);
    },
    [onSelectDate]
  );

  const disabledDays = {
    before: today,
  };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md"
        disabled={(day) => day < new Date()}
      />
    </div>
  );
};

CalendarSettings.displayName = "CalendarSettings";

export default React.memo(CalendarSettings);
