import React from 'react'
import { motion } from "framer-motion";
import { Box, Typography } from '@mui/material';


function animation({ WordHere, aniduration, aniease, anidelay = 0 }) {
    return (
        <Box>
            <motion.div
                initial={{ x: -100, opacity: 0 }}  // Start position (off-screen)
                animate={{ x: 0, opacity: 1 }}  // End position (visible)
                transition={{ duration: aniduration, ease: aniease, delay: anidelay }}  // Smooth transition
            >
                <Typography>{WordHere}</Typography>
            </motion.div>
        </Box>
    )
}

export default animation