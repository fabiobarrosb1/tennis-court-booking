import React from 'react';
import { Button } from "@/components/ui/button";

interface Props {
  selectedDate: Date | undefined; // Define the selectedDate prop
  selectedHour: string | undefined; // Define the prop type for selectedHour
  onSelectHour: (hour: string) => void; // Define the function type for handling hour selection
}

const hours = [
  "12:00pm","12:30pm","1:00pm","1:30pm", "2:00pm", "2:30pm"
]

const HourSettings = (props: Props) => {
  const { selectedDate } = props;
  
  const formatDate = (date: Date | undefined) => {
    if (date) {
      // Options to specify the desired format
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options); // Set locale to 'en-US'
    }
    return "None"; // Return "None" if selectedDate is undefined
  };

  return (
    <div>
      {/* Display selectedDate */}
      <p>{formatDate(selectedDate)}</p>
      <div className={`flex flex-col`}>
      {hours.map((hour, index) => (
        <Button className={`${props.selectedHour === hour ? "hour-selected-button" : "hour-button"}`} key={index} variant="outline" onClick={() => props.onSelectHour(hour)}>{hour}</Button>
      ))}</div>
    </div>
  );
};

export default HourSettings;
