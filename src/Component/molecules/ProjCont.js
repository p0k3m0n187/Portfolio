import * as React from "react";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
// import { motion } from "framer-motion"; // Import motion from framer-motion
import ProjBox from "../atom/ProjBox";
import GradPic from '../../Images/Grad_pic-removebg-preview.png';
import BothPhoto from '../../Images/Both.png';

function ProjCont() {
    return (
        <Box sx={{ width: "100%", mb: 5 }}>
            <Grid2
                container
                spacing={2}
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Each ProjBox is wrapped with motion.div for animation */}
                <Grid2 xs={12} md={4}>
                    <ProjBox
                        projImg={BothPhoto}
                        projName="WasteNot"
                        projDesc="A website and mobile application that helps 
                        reduce restaurant food waste by tracking the restaurant’s 
                        inventory management by recommending measured ingredient 
                        amounts."
                        aniDelay={0}
                    />
                </Grid2>
                <Grid2 xs={12} md={4}>
                    <ProjBox
                        projImg={GradPic}
                        projName="Diaryhea"
                        projDesc="A personal journal platform for employees to 
                        share their daily experiences, fostering well-being, 
                        engagement, and satisfaction."
                        aniDelay={0.3}
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default ProjCont;
