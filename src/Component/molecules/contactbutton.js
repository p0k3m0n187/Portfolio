import React from 'react'
import ButtonAnimated from '../atom/Animation/buttonanimation';
import { Box } from '@mui/material';
import Gitphoto from "../../Images/Github.png";
import Facephoto from "../../Images/Facebook.png";
import PhotoLinkIn from "../../Images/LinkedInPhoto.png";

function contactbutton() {
    return (
        <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
            <ButtonAnimated
                bttnImage={Gitphoto}
                aniduration={1.2}
                aniease="easeInOut"
                anidelay={3}
                link="https://github.com/p0k3m0n187"
            />

            <ButtonAnimated
                bttnImage={Facephoto}
                aniduration={1.4}
                aniease="easeInOut"
                anidelay={3}
                link="https://www.facebook.com/registrado.registrado.77/"
            />

            <ButtonAnimated
                bttnImage={PhotoLinkIn}
                aniduration={1.6}
                aniease="easeInOut"
                anidelay={3}
                link="https://www.linkedin.com/in/lawrence-dave-registrado-a497b1316/"
            />
        </Box>
    )
}

export default contactbutton