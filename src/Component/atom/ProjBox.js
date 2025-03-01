import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"; // Import motion from framer-motion

function ProjBox({ projName, projDesc, projImg, aniDelay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move up
            whileInView={{ opacity: 1, y: 0 }}  // Animate when it enters the viewport
            transition={{ duration: 0.6, delay: aniDelay, type: "spring" }}  // Spring-based animation for smoothness
            viewport={{ once: false }}  // Allows the animation to trigger every time the element enters view
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                padding: 1,
                width: '100%',
                height: '100%',
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: '5px',
                textAlign: 'center',
                "&:hover": { // Correct syntax for hover state
                    // backgroundColor: "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in-out",
                    transform: "scale(1.05)",
                }
            }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <img
                        src={projImg}
                        alt=''
                        width='320px'
                        height='250px'
                        style={{
                            // objectFit: 'cover',  
                            border: '2px solid white',
                            borderRadius: '5px',
                            marginBottom: 10,
                        }} // cover image in full size

                    />

                </Box>
                <Box
                    sx={{
                        textAlign: 'start',
                        width: '100%',
                        height: '100%',
                    }}>
                    <Typography gutterBottom
                        variant="h1"
                        fontSize={'2.5rem'}
                        sx={{
                            background: "linear-gradient(25deg, rgba(62,65,167,1) 26%, rgba(142,29,161,1) 67%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {projName}
                    </Typography>
                    <Box sx={{ padding: 2, maxHeight: '100px' }}>
                        <Typography sx={{
                            flexWrap: 'wrap',
                            width: '320px'
                        }}>
                            {projDesc}
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 5,
                    }}>
                        <Button
                            sx={{
                                background: "linear-gradient(90deg, #3E41A7 0%, #8E1DA1 100%)",
                                color: "#fff",
                                fontWeight: "bold",
                                padding: "12px 24px",
                                fontSize: "1rem",
                                textTransform: "none",
                                borderRadius: "8px",
                                transition: "all 0.3s ease-in-out",
                                boxShadow: "0px 4px 10px rgba(142, 29, 161, 0.3)",

                                "&:hover": {
                                    background: "linear-gradient(90deg, #8E1DA1 0%, #3E41A7 100%)",
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 6px 14px rgba(142, 29, 161, 0.4)",
                                },

                                "&:active": {
                                    transform: "scale(0.98)",
                                    boxShadow: "0px 3px 8px rgba(142, 29, 161, 0.2)",
                                },
                            }}
                        >
                            View Project
                        </Button>

                    </Box>
                </Box>
            </Box>
        </motion.div>
    )
}

export default ProjBox