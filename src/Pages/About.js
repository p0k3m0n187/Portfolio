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
            }}
        >
            <Box mb={2}>
                <Box sx={{ margin: 10 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            background: "linear-gradient(25deg, rgba(62,65,167,1) 26%, rgba(142,29,161,1) 67%)",
                            // background: '#7DF9FF',
                            WebkitBackgroundClip: "text",
                            WebkitTextStroke: "0.5px white", // White stroke
                            color: "transparent",
                        }}
                    >
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
                        <Typography mb={1} fontSize={'2rem'}>Hello! I'm</Typography>
                        <Typography gutterBottom
                            variant="h1"
                            sx={{
                                background: "linear-gradient(25deg, rgba(62,65,167,1) 26%, rgba(142,29,161,1) 67%)",
                                // background: '#7DF9FF',
                                WebkitBackgroundClip: "text",
                                // WebkitTextStroke: "0.5px white", // White stroke
                                color: "transparent",
                                fontSize: "2.5rem",
                            }}
                        >
                            Lawrence Dave G. Registrado
                        </Typography>
                        <Typography>
                            A passionate Software Developer and Data Analyst with
                            experience in front-end and back-end development, quality assurance testing, and data
                            analysis. I love building efficient and user-friendly applications while ensuring top-notch performance
                            and reliability.
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
                            transition: "all 0.3s ease-in-out",
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
                                transition: "all 0.3s ease-in-out",
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
                <SkillGrid />
            </Box>
        </Box>
    );
}

export default About;
