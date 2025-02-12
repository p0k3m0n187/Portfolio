import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function TiltButton() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0, rotate: 0 }}  // Start off-screen, no rotation
            animate={{ x: 0, opacity: 1, rotate: 0 }}   // Reset rotation when not hovered
            transition={{   duration: 1, ease: "easeInOut", delay: 3.5 }} // Smooth initial animation

            whileHover={{
                rotate: -5,  // Tilt effect on hover
                scale: 1.1,  // Slightly enlarge
            }}
            whileTap={{ scale: 0.9 }} // Click effect (optional)
            // transition={{ duration: 1.2, ease: "easeInOut", delay: 3.7 }} // Smooth initial animation

        >
            <Button
                variant="outlined"
                color="secondary"
                sx={{
                    border: "2px solid white",
                    backgroundColor: "#75178B",
                    color: "white",
                    fontWeight: 700,
                    "&:hover": {
                        backgroundColor: "white", // Darker shade on hover
                        color: "#75178B",
                        border: "2px solid #75178B",
                    },
                }}
            >
                Download CV
            </Button>
        </motion.div>
    );
}
