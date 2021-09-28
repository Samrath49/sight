import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">
                <Typography varient="" align="center">Sight</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App
