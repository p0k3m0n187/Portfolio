import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

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
                    width: "100%",
                }}
            >
                <Button
                    onClick={() => setActiveTab("projects")}
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        color: activeTab === "projects" ? "white" : "none",
                        // borderBottom: activeTab === "projects" ? "3px solid yellow" : "none",
                        border: activeTab === "projects" ? "1px solid white" : 'none',
                        transition: "all 0.3s ease-in-out",
                        backgroundColor: activeTab === "projects" ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                    }}
                >
                    Projects
                </Button>

                <Button
                    onClick={() => setActiveTab("skills")}
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        color: activeTab === "skills" ? "white" : "none",
                        // borderBottom: activeTab === "skills" ? "3px solid yellow" : "none",
                        border: activeTab === "skills" ? "1px solid white" : 'none',
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    Skills
                </Button>
            </Box>

            {/* Content Sections */}
            <Box
                sx={{
                    width: "95%",
                    marginTop: 5,
                    padding: 3,
                    border: "2px solid white",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    textAlign: "center",
                }}
            >
                {activeTab === "projects" ? (
                    <Typography variant="h5">Here are my projects...</Typography>
                ) : (
                    <Typography variant="h5">Here are my skills...</Typography>
                )}
            </Box>
        </Box>
    );
}

export default Projects;
