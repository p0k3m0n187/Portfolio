import { Box } from '@mui/material';
import React from 'react';
import ContContainer from '../atom/contContainer';
import emailIMG from '../../Images/Email.png';
import phoneIMG from '../../Images/phone.png';
import pesbokIMG from '../../Images/Facebook.png';
import lingIMG from '../../Images/LinkedInPhoto.png';

function ContBox() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 7
            }}
        >
            <ContContainer
                img={emailIMG}
                description='registrado187@gmail.com'
                delay={0}
            />
            <ContContainer
                img={phoneIMG}
                description='(+63)908-384-7982'
                delay={0.3}
            />
            <ContContainer
                img={pesbokIMG}
                description='Facebook'
                link='https://www.facebook.com/registrado.registrado.77/'
                delay={0.6}
            />
            <ContContainer
                img={lingIMG}
                description='LinkedIn'
                link='https://www.linkedin.com/in/lawrence-dave-registrado-a497b1316/'
                delay={0.9}
            />
        </Box>
    );
}

export default ContBox;
