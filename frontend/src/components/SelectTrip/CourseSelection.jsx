import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

const CourseSelection = ({ courseValue, courseOptions, handleCourseChange, handleInputChange }) => {

    return (
        <Autocomplete
            freeSolo
            options={courseOptions}
            value={courseValue}
            onChange={handleCourseChange}
            onInputChange={handleInputChange}
            renderInput={(params) => (
            <TextField
            {...params}
            label="Search Golf Courses"
            variant="outlined"
            fullWidth
            style={{ minWidth: '500px' }}
            />
            )}
        />
    );

};

export default CourseSelection;