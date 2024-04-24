
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateSelection = ({ selectedDate, handleDateChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </LocalizationProvider>
    );
};

export default DateSelection;
