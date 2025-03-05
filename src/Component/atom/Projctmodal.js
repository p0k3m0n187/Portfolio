import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Grid2, Typography } from '@mui/material';
import ImgSlide from './Animation/ImgSlide';
import bbtnImg from '../../Images/icons8-back-96.png'
import { motion } from "framer-motion";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "90vh",
    transform: "translate(-50%, -50%)",
    width: "55%",
    background: "rgba( 0, 0, 0, 0.8 )",
    backdropFilter: "blur(11px)", // Corrected
    WebkitBackdropFilter: "blur(11px)", // Corrected WebKit prefix
    border: 'none',
    borderRadius: "20px",
    boxShadow: 24,
    padding: 2, // Changed `p` to `padding` for better readability
};


export default function Projctmodal({ open, handleClose, projName, projDesc, techStack, keyFeatures, projectImages }) {

    return (
        <div>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], type: "spring" }}
                        viewport={{ once: false }}
                    >
                        <Box sx={style}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    mb: 1
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    onClick={handleClose}
                                    sx={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "10px 16px",
                                        borderRadius: "12px",
                                        border: "2px solid white",
                                        background: "transparent",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            background: "linear-gradient(45deg, #8E1DA1, #D02AFF)",
                                            borderColor: "transparent",
                                            transform: "scale(1.05)",
                                            border: "2px solid white",
                                        },
                                    }}
                                >
                                    <img width={20} height={20} src={bbtnImg} alt="" />
                                </Button>

                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%", // Ensure full width
                                    gap: 3,
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography align="left"
                                        marginBottom={1}
                                        variant="h1">
                                        {projName}
                                    </Typography>
                                    <Box
                                        marginBottom={5}
                                        sx={{
                                            width: "150px", // Adjust the width as needed
                                            height: "10px", // Thickness of the line
                                            background: "linear-gradient(90deg, #3E41A7 0%, #8E1DA1 100%)",
                                            borderRadius: "5px", // Optional: Rounded edges
                                        }}
                                    />
                                    <Typography
                                        align="left"
                                        color='white'
                                        sx={{
                                            mb: 2,
                                            marginBottom: 10,
                                            p: 1
                                        }}>
                                        {projDesc}
                                    </Typography>

                                    <Typography
                                        variant="h4"
                                        align='left'
                                        marginBottom={3}
                                        fontWeight={900}
                                        color='white'
                                        gutterBottom>
                                        Tech Stack
                                    </Typography>

                                    <Grid2 container spacing={2}>
                                        {techStack?.map((tech, index) => (
                                            <Grid2 item xs={6} sm={4} md={3} key={index}>
                                                <Box sx={{
                                                    border: "2px solid #3E41A7",
                                                    borderRadius: "10px",
                                                    padding: 1,
                                                    textAlign: "center",
                                                    color: 'white'
                                                }}>
                                                    {tech}
                                                </Box>
                                            </Grid2>
                                        ))}
                                    </Grid2>
                                </Box>

                                <Box sx={{ flex: 1, p: 1 }}>
                                    <ImgSlide projectImages={projectImages} />
                                    <Box sx={{
                                        height: '300px',
                                        mt: 2,
                                        background: "linear-gradient(135deg, rgba(31, 31, 31, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        boxShadow: "0 4px 16px rgba(31, 38, 135, 0.3), 0 6px 20px rgba(31, 38, 135, 0.2)", // ✅ Improved shadow
                                        backdropFilter: "blur(17px)",
                                        WebkitBackdropFilter: "blur(17px)",
                                        borderRadius: "10px",
                                        p: 2
                                    }}>

                                        <Typography
                                            color='white'
                                            fontWeight={900}
                                            align='left'
                                            variant="h4"
                                            marginBottom={3}
                                        >
                                            Key Features
                                        </Typography>
                                        {keyFeatures?.map((feature, index) => (
                                            <Typography align='left' key={index}
                                                sx={{
                                                    mb: 1.5,
                                                    color: 'white',
                                                    fontSize: '1.1rem'
                                                }}>
                                                • {feature}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
            </Modal>
        </div >
    );
}