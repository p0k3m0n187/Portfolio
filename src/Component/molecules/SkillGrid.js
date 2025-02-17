import { Box, Grid2 } from '@mui/material'
import React from 'react'
import SkillContainer from '../atom/SkillContainer'
import WebIcon from '../../Images/webicon.png';
import DataPic from '../../Images/datanalyst.png';
import BackApi from '../../Images/icons8-gears-100.png';
import QualAss from '../../Images/icons8-quality-assurance-64.png'


function SkillGrid() {
    return (
        <Box>
            <Grid2 container spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                <Grid2 xs={6} md={12}>
                    <SkillContainer
                        images={WebIcon}
                        label='Web Development'
                    />
                </Grid2>
                <Grid2 item xs={6} md={12}>
                    <SkillContainer
                        images={DataPic}
                        label='Data Analyst'
                    />
                </Grid2>
                <Grid2 item xs={6} md={12}>
                    <SkillContainer
                        images={BackApi}
                        label='Backend and APIs'
                    />
                </Grid2>
                <Grid2 item xs={6} md={12}>
                    <SkillContainer
                        images={QualAss}
                        label='Quality Assurance'
                    />
                </Grid2>

            </Grid2>
        </Box>
    )
}

export default SkillGrid