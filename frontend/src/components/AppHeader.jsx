
import { React } from "react";
import { AppBar, ToolBar, Typography } from '@mui/material';

export default function AppHeader() {
    return (
        <AppBar position="static">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Golf Buddy
            </Typography>
        </AppBar>
    );
};