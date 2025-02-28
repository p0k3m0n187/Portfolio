import { Box, Typography } from '@mui/material'
import React from 'react'
import ContBox from '../Component/molecules/contBox';

function Contacts() {
    return (
        <>
            <Box
                sx={{
                    // display: "flex",
                    paddingTop: "64px",
                    justifyContent: "center",
                    // alignItems: "center",  // Centers vertically
                    // textAlign: "center",  // Centers text inside Box
                    height: '100vh',
                    color: 'white',
                    margin: 10
                }}
            >
                <Box sx={{
                    mb: 10
                }}>
                    <Typography
                        variant="h3"
                        fontWeight="900"
                        sx={{
                            background: "linear-gradient(25deg, rgba(62,65,167,1) 26%, rgba(142,29,161,1) 67%)",
                            // background: '#7DF9FF',
                            WebkitBackgroundClip: "text",
                            WebkitTextStroke: "0.5px white", // White stroke
                            color: "transparent",
                        }}
                    >
                        Contact
                    </Typography>
                </Box>
                <Box sx={{
                    mb: 15
                }}>
                    <Typography
                        variant="h5"
                    >
                        Get in touch
                    </Typography>
                </Box>

                <ContBox />

            </Box >
        </>
    )
}

export default Contacts