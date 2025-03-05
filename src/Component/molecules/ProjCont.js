import * as React from "react";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ProjBox from "../atom/ProjBox";
import Projctmodal from "../atom/Projctmodal"; // Import the modal
import { projects } from '../atom/project'     // Import project data

function ProjCont() {
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    // Function to open modal with project details
    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box sx={{ width: "100%", mb: 5 }}>
            <Grid2
                container
                spacing={2}
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {projects.map((project, index) => (
                    <Grid2 xs={12} md={4} key={project.id}>
                        <ProjBox
                            projImg={project.image}
                            projName={project.name}
                            projDesc={project.description}
                            techStack={project.techStack} 
                            techImg={project.techImg}
                            keyFeatures={project.keyFeatures}  // ✅ Pass keyFeatures
                            projectImages={project.projectImg}
                            aniDelay={index * 0.3}
                            onClick={() => handleOpen(project)} // Pass project data on click
                        />
                    </Grid2>
                ))}
            </Grid2>

            {/* Render Modal */}
            {selectedProject && (
                <Projctmodal
                    open={open}
                    handleClose={handleClose}
                    project={selectedProject} // Pass selected project as prop
                />
            )}
        </Box>
    );
}

export default ProjCont;
