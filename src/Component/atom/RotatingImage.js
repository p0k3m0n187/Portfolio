import { motion } from "framer-motion";
import { Box } from "@mui/material";
import GearPhoto from "../../Images/Gear.png";

export default function RotatingImage({ top, left, zIndex, width, height }) {
    return (
        <Box sx={{ position: 'relative' }}>
            <motion.img
                src={GearPhoto}
                alt="Rotating"
                style={{
                    position: 'absolute',
                    zIndex: zIndex,
                    width: width,
                    height: height,
                    top: top,
                    left: left,
                    //   borderRadius: "50%", // Optional: makes it circular
                }}
                animate={{ rotate: 360 }} // Rotation animation
                transition={{
                    repeat: Infinity, // Infinite loop
                    duration: 5, // Time for one full rotation
                    ease: "linear", // Smooth, constant speed\
                    type: 'spring',
                    delay: 0.8
                }}
            />
        </Box>
    );
}
