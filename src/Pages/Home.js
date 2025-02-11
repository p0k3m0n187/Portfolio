import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ComGif from "../Images/Computer.gif";
import { TypeAnimation } from "react-type-animation";
import AnimateIntro from "../Component/Animation/animation"
import ButtonAnimated from "../Component/Animation/buttonanimation";
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

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
                    <Box sx={{
                        display: "flex",
                        gap: 3
                    }}>
                        <Box>
                            <Typography variant="h3" fontWeight="700" color="white">
                                Frontend
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="1000"
                                sx={{
                                    background: "linear-gradient(25deg, rgba(62,65,167,1) 26%, rgba(142,29,161,1) 67%)",
                                    WebkitBackgroundClip: "text",  // Clips the background to the text
                                    color: "transparent",  // Make text color transparent so that the gradient shows
                                }}
                            >
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start" }}>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h5" fontWeight="bold">
                                <TypeAnimation
                                    sequence={[
                                        "Crafting Interactive & Scalable Web Experiences", 100 // Text and delay, 
                                    ]}
                                    speed={30}  // Speed of typing
                                    typingDelay={5}  // Optional delay before starting to type
                                />
                            </Typography>
                        </Box>

                        {/* Subtext */}
                        <AnimateIntro
                            WordHere="Specializing in React.js, Material-UI, and full-stack web development."
                            aniduration={1.2}
                            aniease="easeInOut"
                            anidelay={1.5}
                        />

                        <AnimateIntro
                            WordHere="build modern, efficient, and user-friendly applications."
                            aniduration={1.2}
                            aniease="easeInOut"
                            anidelay={2.5}
                        />

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {/* <Box
                                sx={{
                                    border: "2px solid white",
                                    borderRadius: "50%",
                                    width: "35px",
                                    height: "35px",
                                    backgroundColor: "#8E1DA1", // Correct background color
                                }}
                            >
                            </Box> */}

                            <ButtonAnimated
                                text="F"
                                aniduration={1.2}
                                aniease="easeInOut"
                                anidelay={3}
                            />

                            <ButtonAnimated
                                text="F"
                                aniduration={1.2}
                                aniease="easeInOut"
                                anidelay={3.5}
                            />

                            <ButtonAnimated
                                text="F"
                                aniduration={1.2}
                                aniease="easeInOut"
                                anidelay={4.2}
                            />
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            <Button variant="outlined" color="secondary">
                                Download CV
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Right Content - Image */}
                <Box>
                    <img
                        src={ComGif}
                        alt="Graduation ceremony of Lawrence"
                        style={{
                            width: "250px",
                            height: "250px",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
