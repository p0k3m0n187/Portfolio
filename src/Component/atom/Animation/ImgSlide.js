import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import gradPic from '../../../Images/Grad_pic-removebg-preview.png';
import randPic from '../../../Images/Both.png';
import poPic from '../../../Images/HTML.png';

const images = [gradPic, randPic, poPic];

export default function ImgSlide() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000);

        return () => clearInterval(interval); // Cleanup on unmount or change
    }, [currentIndex]);

    return (
        <Box sx={{ position: 'relative', display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            {/* Image Slider Container */}
            <Box sx={{
                position: "relative",
                width: "300px",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {/* Previous Image (Left Side) */}
                <Box sx={{
                    position: "absolute",
                    right: 250,
                    width: "150px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                }}>
                    <img
                        src={images[(currentIndex - 1 + images.length) % images.length]}
                        alt="Previous"
                        style={{
                            width: "100%",
                            height: "80%",
                            borderRadius: "8px",
                            opacity: 0.5,
                            transform: "scale(0.9)",
                        }}
                    />
                </Box>

                {/* Current Image (Main Display) */}
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        zIndex: 2,
                        transition: "transform 0.5s ease-in-out"
                    }}
                />

                {/* Next Image (Right Side) */}
                <Box sx={{
                    position: "absolute",
                    left: 250,
                    width: "150px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
                }}>
                    <img
                        src={images[(currentIndex + 1) % images.length]}
                        alt="Next"
                        style={{
                            width: "100%",
                            height: "80%",
                            borderRadius: "8px",
                            opacity: 0.5,
                            transform: "scale(0.9)",
                        }}
                    />
                </Box>
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Button variant="outlined" onClick={prevImage}>Previous</Button>
                <Button variant="contained" onClick={nextImage}>Next</Button>
            </Box>
        </Box>
    );
}
