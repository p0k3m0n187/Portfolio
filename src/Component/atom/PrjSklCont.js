import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function PrjSklCont({ img, name, rating, barColor }) {
    const [progress, setProgress] = useState(0); // Start from 0%
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    useEffect(() => {
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
            if (currentProgress < rating) {
                currentProgress += 1;
                setProgress(currentProgress);
            } else {
                clearInterval(progressInterval);
            }
        }, 2); // Adjust speed

        return () => clearInterval(progressInterval);
    }, [rating, isHovered]); // Reset animation on hover

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mb: 10,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setProgress(0); // Reset progress
                setIsHovered(false);
            }}
        >
            {/* Image Box */}
            <Box>
                <img src={img} alt={name} width="75px" height="auto" />
            </Box>

            {/* Content Box */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                {/* Name & Percentage */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                    }}
                >
                    <Typography variant="body1" fontWeight="bold">
                        {name}
                    </Typography>
                    <Typography variant="body2">{progress}%</Typography>
                </Box>

                {/* Animated Percentage Progress Bar */}
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        height: 20,
                        borderRadius: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        width: "100%",
                        maxWidth: "900px",
                        minWidth: "300px",
                        transition: "all 0.3s ease-in-out",
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: barColor,
                        },
                    }}
                />
            </Box>
        </Box>
    );
}

export default PrjSklCont;
