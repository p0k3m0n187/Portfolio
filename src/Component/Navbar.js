import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navbar({ homeRef, aboutRef, projectsRef, contactsRef }) {
    const [scrolled, setScrolled] = React.useState(false); // ✅ Track scroll state
    const [selected, setSelected] = React.useState("Home"); // ✅ Track selected item

    // ✅ Detect scroll and update state
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const selectionNav = [
        { name: "Home", ref: homeRef },
        { name: "About", ref: aboutRef },
        { name: "Projects", ref: projectsRef },
        { name: "Contact", ref: contactsRef }
    ];

    const handleClick = (name, ref) => {
        setSelected(name); // ✅ Update selected section
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    background: scrolled ? "rgba( 25, 24, 24, .5 )" : "none",
                    boxShadow: scrolled ? "0 8px 50px 0 rgba(0, 0, 0, 0.5)" : "none",
                    // backdropFilter: "blur(51px)",
                    // WebkitBackdropFilter: "blur(12px)",
                    top: 0,
                    left: 0,
                    right: 0,
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                    border: scrolled ? "none" : "none",
                }}
            >
                <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
                    {selectionNav.map((item) => (
                        <Button
                            key={item.name}
                            onClick={() => handleClick(item.name, item.ref)}
                            sx={{
                                color: selected === item.name ? "green" : 'white',
                                textDecoration: selected === item.name ? "underline" : "none", // ✅ Add underline
                                fontWeight: selected === item.name ? "bold" : "normal", // Optional: Highlight selected
                                transition: "transform 0.3s ease, text-decoration 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    textDecoration: selected === item.name ? "underline" : "none",
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
