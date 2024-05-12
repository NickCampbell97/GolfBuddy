
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import DateSelection from './DateSelection';
import CourseSelection from './CourseSelection';
import axios from 'axios';
import Header from './Header';
import Button from '@mui/material/Button';

function TripSelection() {

    const [courseValue, setCourseValue] = useState('');
    const [courseOptions, setCourseOptions] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const fetchCourseSuggestions = async (value) => {
        try {
          const response = await axios.get(`http://localhost:5071/GolfCourse/autocomplete?query=${value}`);
          setCourseOptions(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    const handleCourseChange = (event, newValue) => {
        setCourseValue(newValue);
    };
    
      const handleInputChange = (event, newInputValue) => {
        setCourseValue(newInputValue);
        fetchCourseSuggestions(newInputValue);
    };

    return (
        <div style={{ display: 'inline-block', border: '1px solid grey', borderRadius: '5px' }}>
            <Header />
            <Stack spacing={1} direction="row" style={{ padding: '10px' }}>
                <DateSelection selectedDate={selectedDate} handleDateChange={handleDateChange} />
                <CourseSelection courseValue={courseValue} courseOptions={courseOptions} handleCourseChange={handleCourseChange} handleInputChange={handleInputChange} />
            </Stack>
            <Button variant="outlined" style={{ marginBottom: '15px' }}>Search</Button>
        </div>
    );

}

export default TripSelection;