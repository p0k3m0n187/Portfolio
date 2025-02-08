import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GradPic from "../Images/Grad_pic-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                paddingTop: "64px",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                color: "white",
                paddingX: 4, // Responsive horizontal padding
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap", // Prevents content from stretching too much
                    width: "100%",
                    maxWidth: "1200px", // Set max width for better spacing
                    gap: 4, // Adds space between items
                }}
            >
                {/* Left Content - Text & Buttons */}
                <Box sx={{ flex: 1, minWidth: "300px" }}>
                    {/* Title */}
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Box>
                            <Typography variant="h3" fontWeight="700" color="white">
                                Frontend
                            </Typography>
                            <Typography variant="h3" fontWeight="700" color="white">
                                Developer
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: 85,
                            }}
                        >
                            🚀
                        </Box>
                    </Box>

                    {/* Typing Animation */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-start" }}>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h5" fontWeight="bold">
                                <TypeAnimation
                                    sequence={[
                                        "Crafting Interactive & Scalable Web Experiences", 100 // Text and delay, 
                                        , "Come and Explore"
                                    ]}
                                    speed={50}  // Speed of typing
                                    typingDelay={5}  // Optional delay before starting to type
                                />
                            </Typography>
                        </Box>

                        {/* Subtext */}
                        <Typography mt={1}>
                            Specializing in React.js, Material-UI, and full-stack web development.
                        </Typography>
                        <Typography>I build modern, efficient, and user-friendly applications.</Typography>

                        {/* Buttons */}
                        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            <Button variant="contained">Portfolio</Button>
                            <Button variant="outlined" color="secondary">
                                Contact Me
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Right Content - Image */}
                <Box>
                    <img
                        src={GradPic}
                        alt="Graduation ceremony of Lawrence"
                        style={{
                            width: "250px",
                            height: "auto",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
