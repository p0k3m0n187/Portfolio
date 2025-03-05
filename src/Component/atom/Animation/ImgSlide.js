import React, { useState, useEffect, useCallback } from "react";
import { Box, Button } from "@mui/material";
import bbtnImg from '../../../Images/icons8-back-96.png';

export default function ImgSlide({ projectImages }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, [projectImages.length]);

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, [nextImage]); // ✅ Now `nextImage` is stable and won't trigger unnecessary re-renders.

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 1,
                    mb: 1
                }}>

                {/* Image Slider Container */}
                <Box sx={{
                    position: "relative",
                    width: "300px",
                    height: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.1)", // ✅ Subtle frosted effect
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)", // ✅ Soft depth effect
                    backdropFilter: "blur(15px)", // ✅ Glass blur effect
                    WebkitBackdropFilter: "blur(15px)", // ✅ Safari support
                    borderRadius: "12px", // ✅ Smooth rounded edges
                    border: "1px solid rgba(255, 255, 255, 0.2)", // ✅ Thin border for depth

                }}>
                    {/* Previous Image (Left Side) */}
                    < Box sx={{
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
                            src={projectImages[(currentIndex - 1 + projectImages.length) % projectImages.length]}
                            alt="Previous"
                            style={{
                                width: "100%",
                                height: "80%",
                                borderRadius: "8px",
                                opacity: 0.5,
                                transform: "scale(0.9)",
                            }}
                        />
                    </Box >

                    {/* Current Image (Main Display) */}
                    < img
                        src={projectImages[currentIndex]}
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
                            src={projectImages[(currentIndex + 1) % projectImages.length]}
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
                </Box >

                {/* Navigation Buttons */}

            </Box >
            < Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
                {/* <Button variant="outlined" onClick={prevImage}>Previous</Button> */}
                < Button
                    onClick={prevImage}
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 16px",
                        borderRadius: "12px",
                        background: "transparent",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            background: "linear-gradient(45deg, #8E1DA1, #D02AFF)",
                            borderColor: "transparent",
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    <img width={20} height={20} src={bbtnImg} alt="" />
                </Button >
                {/* <Button variant="contained" onClick={nextImage}>Next</Button> */}
                < Button
                    onClick={nextImage}
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 16px",
                        borderRadius: "12px",
                        background: "transparent",
                        transition: "all 0.3s ease-in-out",
                        transform: 'scaleX(-1)',
                        "&:hover": {
                            background: "linear-gradient(45deg, #8E1DA1, #D02AFF)",
                            borderColor: "transparent",
                            transform: "scaleX(-1) scale(1.05)",
                        },
                    }}
                >
                    <img width={20} height={20} src={bbtnImg} alt="" />
                </Button >
            </Box >
        </>
    );
}
