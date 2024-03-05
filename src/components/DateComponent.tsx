import React, { useState } from 'react';
import CalendarSettings from './CalendarSettings';
import HourSettings from './HourSettings';

interface Props {
  // Define your props here
}

const DateComponent = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Set it to Date instead of Date | undefined
  const [selectedHour, setSelectedHour] = useState<string | undefined>(undefined);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date ?? new Date()); // Set default value if date is undefined
  };
  

  const handleHourSelect = (hour: string) => {
    setSelectedHour(hour);
  };

  return (
    <div className={`flex flex-col`}>
      <CalendarSettings onSelectDate={handleDateSelect} />
      <HourSettings selectedDate={selectedDate} selectedHour={selectedHour} onSelectHour={handleHourSelect} />
    </div>
  );
};

export default DateComponent;
