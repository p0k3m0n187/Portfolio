import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ProjCont from "../Component/molecules/ProjCont";
import ProjectSkills from "../Component/molecules/ProjectSkills";

function Projects() {
    const [activeTab, setActiveTab] = useState("projects"); // Tracks active section

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                paddingTop: "64px",
                alignItems: "center",
                minHeight: "100vh",
                color: "white",
                width: "100%",
            }}
        >
            {/* Title */}
            <Box sx={{ margin: 10 }}>
                <Typography
                    variant="h3"
                    fontWeight="1000"
                    sx={{
                        background: "linear-gradient(25deg, rgba(62,65,167,1) 26%, rgba(142,29,161,1) 67%)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    {activeTab === "projects" ? "Projects" : "Skills"}
                </Typography>
            </Box>

            {/* Navigation Buttons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(1px)",
                    WebkitBackdropFilter: "blur(1px)",
                    borderRadius: "5px",
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    height: "70px",
                    width: "80%",
                }}
            >
                <Button
                    onClick={() => setActiveTab("projects")}
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        color: activeTab === "projects" ? "#843fdd" : "white",
                        backgroundColor: activeTab === "projects" ? "white" : 'none',
                        borderBottom: activeTab === "projects" ? "5px solid #843fdd" : 'none',
                        borderTop: activeTab === "projects" ? "1px solid #843fdd" : 'none',
                        borderRight: activeTab === "projects" ? "1px solid #843fdd" : 'none',
                        borderLeft: activeTab === "projects" ? "1px solid #843fdd" : 'none',
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    Projects
                </Button>

                <Button
                    onClick={() => setActiveTab("skills")}
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        textDecoration: activeTab === "skills" ? "underline" : "none",
                        backgroundColor: activeTab === "skills" ? "white" : 'none',
                        color: activeTab === "skills" ? "#843fdd" : "white",
                        borderBottom: activeTab === "skills" ? "5px solid #843fdd" : 'none',
                        borderTop: activeTab === "skills" ? "1px solid #843fdd" : 'none',
                        borderRight: activeTab === "skills" ? "1px solid #843fdd" : 'none',
                        borderLeft: activeTab === "skills" ? "1px solid #843fdd" : 'none',
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    Skills
                </Button>
            </Box>

            {/* Content Sections */}
            <Box
                sx={{
                    width: "100%",
                    flexGrow: 1,
                    minHeight: "500px",
                    marginTop: 5,
                    textAlign: "center",
                    display: "flex", // Enable flexbox
                    justifyContent: "center", // Center horizontally
                    // alignItems: "center", // Center vertically
                    mb: 10,
                }}
            >
                {activeTab === "projects" ? (
                    <ProjCont />
                ) : (
                    // <Typography variant="h5">Here are my skills...</Typography>
                    <ProjectSkills />
                )}
            </Box>
        </Box>
    );
}

export default Projects;
