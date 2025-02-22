import React from 'react'
import PrjSklCont from '../atom/PrjSklCont'
import { Box } from '@mui/material'
import htmlPic from "../../Images/HTML.png";
import ImgReact from '../../Images/REACT.png';
import cssImg from '../../Images/CSS.png';
import imgJS from '../../Images/JScript.png';
import fbImg from '../../Images/Firebase.png';

function ProjectSkills() {
    return (
        <Box sx={{
            width: '100%',
            padding: 2,
        }}>
            <PrjSklCont
                img={htmlPic}
                name='HTML'
                barColor="#F74922FF"
                rating={72}
            />
            <PrjSklCont
                img={cssImg}
                name='CSS'
                barColor="blue"
                rating={72}
            />
            <PrjSklCont
                img={ImgReact}
                name='React'
                barColor='white'
                rating={80}
            />
            <PrjSklCont
                img={imgJS}
                name='JavaScript'
                barColor='yellow'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name='Firebase'
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name='Laravel'
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name='Python'
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name='Bootstrap'
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name='Git'
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name='Wordpress'
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="RESTApi's"
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="Java"
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="Angular"
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="PHP"
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="C#"
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="C++"
                barColor='green'
                rating={80}
            />
            <PrjSklCont
                img={fbImg}
                name="Kotlin"
                barColor='green'
                rating={80}
            />
        </Box>
    )
}

export default ProjectSkills