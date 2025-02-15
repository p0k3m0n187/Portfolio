import { Box } from "@mui/material";
import React from "react";

function SkillContainer({ images }) { // ✅ Fix typo: "imgages" → "images"
    return (
        <Box
            sx={{
                background: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(0.5px)",
                WebkitBackdropFilter: "blur(0.5px)", // Webkit support for Safari
                borderRadius: "10px",
                textAlign: "center",
                border: "2px solid white",
                padding: "10px",
                transition: "all 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                    background: "transparent",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(0.5px)",
                    WebkitBackdropFilter: "blur(0.5px)", // Webkit support for Safari
                    transform: "scale(1.1)", // Scale up by 10% when hovered
                    border: "2px solid #75178B",
                },
            }}
        >
            <img
                src={images}
                alt="Skill Icon"
                style={{
                    width: "40px",  // ✅ Adjust image size properly
                    height: "auto",
                    // objectFit: "contain",
                }}
            />
        </Box>
    );
}

export default SkillContainer;
