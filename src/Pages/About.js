import { Box } from '@mui/material'
import React from 'react'

function About() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    paddingTop: "64px",
                    justifyContent: "center",
                    alignItems: "center",  // Centers vertically
                    textAlign: "center",  // Centers text inside Box
                    height: '100vh',
                    color: 'white',
                }}
            >
                <Box>
                    <div>
                        <p>This is the AboutUs</p>
                        <p>To get started, replace the content of App.js with the following code:</p>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default About