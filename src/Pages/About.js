import { Box, Typography } from '@mui/material';
import React from 'react';
import GradPhoto from '../Images/Grad_pic-removebg-preview.png'; // Try absolute path
import SkillGrid from '../Component/molecules/SkillGrid';
// import SkillContainer from '../Component/atom/SkillContainer';

function About() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                paddingTop: "64px",
                alignItems: "center",
                minHeight: "100vh",
                color: "white",
                width: "100%",
                // backgroundColor: "#121212", // Debugging: Add dark background
            }}
        >
            <Box>
                <Box sx={{ margin: 10 }}>
                    <Typography variant='h2'>
                        About Me
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100%",
                        maxWidth: "1200px",
                        gap: 10,
                    }}
                >
                    {/* Left Section */}
                    <Box sx={{ textAlign: 'start', flex: 1, minWidth: "25px" }}>
                        <Typography variant='h4' color='white'>Hello! I'm</Typography>
                        <Typography variant='h3' color='white'>Lawrence Dave G. Registrado</Typography>
                        <Typography variant='h6' color='white'>
                            Aiming to secure a job where I can apply and enhance my knowledge
                            and skills, gain practical experience in real-world projects, and
                            contribute effectively to the success of the team. Eager to learn
                            and adapt in a dynamic IT environment, with a focus on problem-solving
                            and continuous professional growth.
                        </Typography>
                    </Box>

                    {/* Image Section with Animation */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "250px",
                            height: "auto",
                            cursor: "pointer",
                            transition: "all 0.5s ease-in-out",
                            "&:hover img": {
                                transform: "scale(1.2)",
                                clipPath: "circle(75%)",
                            },
                        }}
                    >
                        <img
                            src={GradPhoto}
                            alt="GraduationPhoto"
                            width="100%"
                            height="100%"
                            style={{
                                objectFit: "cover",
                                transition: "all 0.5s ease-in-out",
                                clipPath: "circle(50%)", // Fix: Show image initially
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                textAlign: 'start',
                flexWrap: "wrap",
                width: "100%",
            }}>
                <Typography variant='h5'>
                    Tech Stack
                </Typography>

                {/* <SkillContainer /> */}
                <SkillGrid />
            </Box>
        </Box>
    );
}

export default About;
