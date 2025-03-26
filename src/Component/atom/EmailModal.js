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


export default function EmailModal({ open, handleClose, projName, projDesc, techStack, keyFeatures, projectImages }) {

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
                        </Box>
                    </motion.div>
            </Modal>
        </div >
    );
}