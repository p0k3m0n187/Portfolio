import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function TiltButton() {
    const handleClick = () => {
        const link = document.createElement("a");
        link.href = "/REGISTRADO_RESUME.pdf"; // ✅ File must be in the "public" folder
        link.download = "REGISTRADO_RESUME.pdf"; // ✅ Force download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ x: -100, opacity: 0, rotate: 0 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 3.5 }}
            whileHover={{ rotate: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Button
                onClick={handleClick}
                variant="outlined"
                color="secondary"
                sx={{
                    border: "2px solid white",
                    backgroundColor: "#75178B",
                    color: "white",
                    fontWeight: 700,
                    "&:hover": {
                        backgroundColor: "white",
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
