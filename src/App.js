import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Component/Navbar";
import { styled } from "@mui/material";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import { useRef } from "react";
import BackgrndAni from "./Component/atom/Animation/bganimation/AnimationBckground";
import { motion } from "framer-motion"; // Import motion for animations

// Create the theme with custom styles
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          width: "100%",
          textAlign: "center",
          overflowX: "hidden",
          background: "black",
          position: "relative",
        },
      },
    },
  },
});

// Styled Wrapper for content layout
const Wrapper = styled("div")({
  width: "55vw",
  margin: "0 auto",
  boxSizing: "border-box",
  position: "relative",
  zIndex: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <BackgrndAni />
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
      />
      <CssBaseline />

      {/* Sections with IDs for IntersectionObserver */}
      <Wrapper>
        <section id="home" ref={homeRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}  // Ensures the animation triggers every time it enters view
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Home />
          </motion.div>
        </section>
        <section id="about" ref={aboutRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}  // Ensures the animation triggers every time it enters view
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <About />
          </motion.div>
        </section>
        <section id="projects" ref={projectsRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}  // Ensures the animation triggers every time it enters view
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          >
            <Projects />
          </motion.div>
        </section>
        <section id="contact" ref={contactsRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}  // Ensures the animation triggers every time it enters view
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          >
            <Contacts />
          </motion.div>
        </section>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
