import React from 'react'
import { motion } from "framer-motion";
import { Box, } from '@mui/material';
function buttonanimation({ text, aniduration, aniease, anidelay = 0, bttnImage, link }) {
    const handleClick = () => {
        // Open the link in a new tab
        window.open(link, '_blank');
    };

    return (
        <Box
        >
            <motion.div
                initial={{ y: 100, opacity: 0 }}  // Start position (off-screen)
                animate={{ y: 0, opacity: 1 }}  // End position (visible)
                transition={{ duration: aniduration, ease: aniease, delay: anidelay }}  // Smooth transition
            >
                <Box
                    onClick={handleClick}
                    sx={{
                        cursor: 'pointer',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "white",
                        border: "2px solid white",
                        borderRadius: "50%",
                        width: "40px",  // Adjusted for better UI
                        height: "40px",
                        backgroundColor: "#8E1DA1",
                        transition: "0.3s ease",
                        "&:hover": {
                            backgroundColor: "#75178B", // Darker shade on hover
                            transform: "scale(1.1)", // Slightly enlarge
                        },
                    }}
                >
                    <img
                        src={bttnImage}
                        alt=""
                        style={{
                            width: "25px",
                            height: "25px",
                        }}
                    />
                </Box>
            </motion.div>
        </Box>
    )
}

export default buttonanimation