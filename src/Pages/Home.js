import { Box, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import AnimateIntro from "../Component/atom/Animation/animation"
// import ButtonAnimated from "../Component/Animation/buttonanimation";
// import Gitphoto from "../Images/Github.png";
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Contactbutton from "../Component/molecules/contactbutton";
import TiltButton from "../Component/atom/TiltButton";
// import RotatingImage from "../Component/atom/RotatingImage";
import IntroImage from "../Component/molecules/IntroImage";

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
                        {/* <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: 85,
                            }}
                        >
                            <RotatingImage />
                        </Box> */}
                    </Box>
                    {/* Typing Animation */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start" }}>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h5" fontWeight="bold">
                                <TypeAnimation
                                    sequence={[
                                        "Crafting Interactive & Scalable Web Experiences", 50 // Text and delay, 
                                    ]}
                                    speed={30}  // Speed of typing
                                    typingDelay={5}  // Optional delay before starting to type
                                />
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", mt: 1 }}>
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
                        </Box>

                        <Contactbutton />

                        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            {/* <Button
                                variant="outlined"
                                color="secondary"
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "#75178B", // Darker shade on hover
                                        color: "white",
                                        border: "2px solid white",
                                        transform: "scale(1.1)", // Slightly enlarge
                                    },
                                }}
                            >
                                Download CV
                            </Button> */}
                            <TiltButton />
                        </Box>
                    </Box>
                </Box>

                {/* Right Content - Image */}
                <Box>
                    {/* <img
                        // src={ComGif}
                        alt="Gif"
                        style={{
                            width: "250px",
                            height: "250px",
                        }}
                    /> */}

                    <IntroImage />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
