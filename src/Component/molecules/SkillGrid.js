import { Box, Grid2 } from '@mui/material'
import React from 'react'
import SkillContainer from '../atom/SkillContainer'
import ImgGit from '../../Images/Github.png'

function SkillGrid() {
    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 xs={10}>
                    <SkillContainer
                        images={ImgGit} />
                </Grid2>
                <Grid2 item xs={10}>
                    <SkillContainer images={ImgGit} />
                </Grid2>
                <Grid2 item xs={10}>
                    <SkillContainer images={ImgGit} />
                </Grid2>
                <Grid2 item xs={10}>
                    <SkillContainer images={ImgGit} />
                </Grid2>

            </Grid2>
        </Box>
    )
}

export default SkillGrid