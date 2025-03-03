import React from 'react'
import PrjSklCont from '../atom/PrjSklCont'
import { Box } from '@mui/material'
import htmlPic from "../../Images/HTML.png";
import ImgReact from '../../Images/REACT.png';
import cssImg from '../../Images/CSS.png';
import imgJS from '../../Images/JScript.png';
import fbImg from '../../Images/Firebase.png';
import lrvlImg from '../../Images/laravel.png';
import pyhtImg from '../../Images/python.png';
import imgGit from '../../Images/Git_icon.svg.png';
import btstrapImg from '../../Images/bootstrap.png';
import wrdpresImg from '../../Images/wordpress.png';
import rstapi from '../../Images/restapi.png';
import jvaImg from '../../Images/Java-Logo.jpg';
import anguImg from '../../Images/angular.png';
import phpImg from '../../Images/php.png';
import csharpImg from '../../Images/Csharp.png';
import cplusImg from '../../Images/cplus.png';
import kotImg from '../../Images/kotlin.png';

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
                rating={85}
            />
            <PrjSklCont
                img={cssImg}
                name='CSS'
                barColor="blue"
                rating={82}
            />
            <PrjSklCont
                img={ImgReact}
                name='React'
                barColor='#07B8C5FF'
                rating={80}
            />
            <PrjSklCont
                img={imgJS}
                name='JavaScript'
                barColor='yellow'
                rating={85}
            />
            <PrjSklCont
                img={fbImg}
                name='Firebase'
                barColor='#F59A33FF'
                rating={78}
            />
            <PrjSklCont
                img={lrvlImg}
                name='Laravel'
                barColor='red'
                rating={75}
            />
            <PrjSklCont
                img={pyhtImg}
                name='Python'
                barColor='#7B48F3FF'
                rating={70}
            />
            <PrjSklCont
                img={btstrapImg}
                name='Bootstrap'
                barColor='#640591FF'
                rating={78}
            />
            <PrjSklCont
                img={imgGit}
                name='Git'
                barColor='#F86E38FF'
                rating={85}
            />
            <PrjSklCont
                img={wrdpresImg}
                name='Wordpress'
                barColor='#044F81FF'
                rating={75}
            />
            <PrjSklCont
                img={rstapi}
                name="RESTApi's"
                barColor='#55EBF0FF'
                rating={85}
            />
            <PrjSklCont
                img={jvaImg}
                name="Java"
                barColor='#F59A33FF'
                rating={81}
            />
            <PrjSklCont
                img={anguImg}
                name="Angular"
                barColor='red'
                rating={83}
            />
            <PrjSklCont
                img={phpImg}
                name="PHP"
                barColor='#817E7BFF'
                rating={72}
            />
            <PrjSklCont
                img={csharpImg}
                name="C#"
                barColor='#640591FF'
                rating={70}
            />
            <PrjSklCont
                img={cplusImg}
                name="C++"
                barColor="linear-gradient(341deg, rgba(76,102,233,1) 3%, rgba(252,91,70,1) 46%, rgba(159,87,173,1) 75%, rgba(76,102,233,1) 92%)"
                rating={70}
            />
            <PrjSklCont
                img={kotImg}
                name="Kotlin"
                barColor='#F5914FFF'
                rating={70}
            />
        </Box>
    )
}

export default ProjectSkills