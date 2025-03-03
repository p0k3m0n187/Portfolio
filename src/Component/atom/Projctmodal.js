import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid2, Typography } from '@mui/material';
import ImgSlide from './Animation/ImgSlide';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    bgcolor: 'background.paper',
    border: '2px solid red',
    boxShadow: 24,
};

export default function Projctmodal({ open, handleClose }) {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: "flex", // Enables flexbox
                            justifyContent: "flex-start", // Aligns content to the start horizontally
                        }}
                    >
                        <Button variant='outlined'>
                            Back Button
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%", // Ensure full width
                            gap: 3,
                        }}
                    >
                        <Box sx={{ flex: 1 }}> {/* Takes up 50% of available space */}
                            <Typography gutterBottom>
                                Project Title HERE
                            </Typography>
                            <Typography align="left">
                                WASTENOT is a web and mobile app that helps restaurants reduce food
                                waste by managing inventory and selling surplus food. It tracks ingredient
                                usage and recommends dishes based on available stock, optimizing operations
                                while minimizing waste. By analyzing consumer preferences, sales patterns, and
                                inventory data, WASTENOT provides smart recommendations to enhance sustainability
                                and profitability. The app integrates Spoonacular API for recipe suggestions. Built
                                with React.js for the website, React Native for mobile, and powered by Google Firebase for the backend.
                            </Typography>
                            <Typography>
                                Tech Stack HERE
                            </Typography>
                            <Grid2 container spacing={2}>
                                {Array.from({ length: 11 }).map((_, index) => (
                                    <Grid2 item xs={6} sm={4} md={3} lg={2} key={index}>
                                        <Box
                                            sx={{
                                                border: "2px solid red",
                                                borderRadius: "10px",
                                                padding: 1,
                                                textAlign: "center",
                                            }}
                                        >
                                            React
                                        </Box>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>
                        <Box sx={{ flex: 1 }}> {/* Takes up 50% of available space */}
                            <ImgSlide />
                            <Box>
                                <Typography>
                                    Key Features
                                </Typography>
                                <Typography>
                                    •Tracks restaurant inventory and food preparation.
                                    •Recommends dishes based on available ingredients.
                                    •Evaluates consumer preferences, sales patterns, and inventory data for better ingredient recommendations.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}