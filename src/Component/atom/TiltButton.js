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
            // whileHover={{ rotate: -5, scale: 1.1 }}
            whileTap={{ scale: 1.9 }}
        >
            {/* <Button
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
                        transform: "scale(1.1)",
                        whileTap: "scale(1.9)"
                    },
                }}
            > */}
            <Button
                onClick={handleClick}
                sx={{
                    background: "linear-gradient(90deg, #3E41A7 0%, #8E1DA1 100%)",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "12px 24px",
                    fontSize: "1rem",
                    textTransform: "none",
                    borderRadius: "8px",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: "0px 4px 10px rgba(142, 29, 161, 0.3)",
                    border: "2px solid white",

                    "&:hover": {
                        background: "linear-gradient(90deg, #8E1DA1 0%, #3E41A7 100%)",
                        transform: "scale(1.05)",
                        boxShadow: "0px 6px 14px rgba(142, 29, 161, 0.4)",
                    },

                    "&:active": {
                        transform: "scale(0.98)",
                        boxShadow: "0px 3px 8px rgba(142, 29, 161, 0.2)",
                    },
                }}
            >
                Download CV
            </Button>
        </motion.div>
    );
}
