import { Box } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";
import ComputerImg from '../../Images/computerintro.png';
import RotatingImage from '../atom/RotatingImage';
import DownloadImage from '../../Images/download.png'

function IntroImage() {
    return (
        <Box>
            <motion.div
                initial={{ x: 100, opacity: 0 }}  // Start position (off-screen)
                animate={{ x: 0, opacity: 1 }}  // End position (visible)
                transition={{ duration: 0.5, ease: 'linear', delay: 0.5 }}  // Smooth transition
            >
                <RotatingImage
                    top='35px'
                    left='53px'
                    width='120px'
                    height='auto'
                    zIndex={-1}
                />
                <Box sx={{
                    position: 'relative'
                }}>
                    <img
                        src={DownloadImage}
                        alt='downloadImg'
                        width='50px'
                        height='auto'
                        style={{
                            position: 'absolute',
                            left: '87px',
                            top: '180px',
                            zIndex: 1,
                        }}
                    />
                </Box>

                <img
                    src={ComputerImg}
                    alt=''
                    width='350px'
                    height='auto'
                    style={{ transform: 'scaleX(-1)' }}
                />
                <RotatingImage
                    top='-175px'
                    left='190px'
                    width='90px'
                    height='auto'
                    zIndex={1}
                />
            </motion.div>
        </Box>
    )
}

export default IntroImage