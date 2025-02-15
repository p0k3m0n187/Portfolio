import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navbar({ homeRef, aboutRef, projectsRef, contactsRef }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [selected, setSelected] = React.useState("home");

    // Detect scroll position for navbar styling
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update selected section on scroll using IntersectionObserver
    React.useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelected(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Navigation items
    const selectionNav = [
        { name: "Home", id: "home", ref: homeRef },
        { name: "About", id: "about", ref: aboutRef },
        { name: "Projects", id: "projects", ref: projectsRef },
        { name: "Contact", id: "contact", ref: contactsRef },
    ];

    // Smooth scroll function
    const handleClick = (id, ref) => {
        setSelected(id);
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    background: scrolled ? "rgba(25, 24, 24, 0.5)" : "none",
                    boxShadow: scrolled ? "0 8px 50px 0 rgba(0, 0, 0, 0.5)" : "none",
                    top: 0,
                    left: 0,
                    right: 0,
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                }}
            >
                <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
                    {selectionNav.map((item) => (
                        <Button
                            key={item.id}
                            onClick={() => handleClick(item.id, item.ref)}
                            sx={{
                                fontSize: "1.2rem",
                                color: selected === item.id ? "#D96CF1FF" : "white",
                                textDecoration: selected === item.id ? "underline" : "none",
                                fontWeight: selected === item.id ? "bold" : "normal",
                                transition: "transform 0.3s ease, text-decoration 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
