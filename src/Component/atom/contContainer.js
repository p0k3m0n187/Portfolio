import { Box, Typography } from '@mui/material'
import React from 'react';
import { motion } from "framer-motion";

function contContainer({ img, description, delay, link }) {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and move up
            whileInView={{ opacity: 1, y: 0 }}  // Animate when it enters the viewport
            transition={{ duration: 0.6, delay: delay, type: "spring" }}  // Spring-based animation for smoothness
            viewport={{ once: false }}  // Allows the animation to trigger every time the element enters view
        >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Box
                    onClick={handleClick} // Handles click event only if `link` exists
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
                        width: "110px",  // Adjusted for better UI
                        height: "110px",
                        backgroundColor: "#8E1DA1",
                        transition: "0.3s ease",
                        mb: 3,
                        "&:hover": {
                            backgroundColor: "#75178B", // Darker shade on hover
                            transform: "scale(1.1)", // Slightly enlarge
                        },
                    }}
                >
                    <img
                        alt=''
                        width='30px'
                        height='30px'
                        src={img}
                    />
                </Box>
                <Box>
                    <Typography sx={{
                        width: '200px',
                    }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    )
}

export default contContainer