import React from 'react'
import { motion } from "framer-motion";
import { Box, Typography } from '@mui/material';
function buttonanimation({ text, aniduration, aniease, anidelay = 0 }) {
    return (
        <Box
        // sx={{
        //     border: "2px solid white",
        //     borderRadius: "50%",
        //     width: "35px",
        //     height: "35px",
        //     backgroundColor: "#8E1DA1", // Correct background color
        // }}
        >
            <motion.div
                initial={{ y: 100, opacity: 0 }}  // Start position (off-screen)
                animate={{ y: 0, opacity: 1 }}  // End position (visible)
                transition={{ duration: aniduration, ease: aniease, delay: anidelay }}  // Smooth transition
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "white",
                        border: "2px solid white",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        backgroundColor: "#8E1DA1", // Correct background color
                    }}>
                    <Typography>{text}</Typography>
                </Box>
            </motion.div>
        </Box>
    )
}

export default buttonanimation