import React from 'react';
import { LocationCombobox } from './Combobox/LocationCombobox';
import { DurationCombobox } from './Combobox/DurationCombobox';

interface Props {
  // Define your props here
}

const BookingSettings = (props: Props) => {
  return (
    <div>
      <h1>Book a Court</h1>
      <p>Location</p>
      <LocationCombobox />
      <p>Duration</p>
      <DurationCombobox />
    </div>
  );
};

export default BookingSettings;
