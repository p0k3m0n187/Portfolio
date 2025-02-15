import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Component/Navbar";
import { styled } from "@mui/material";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import { useRef } from "react";
import BackgrndAni from "./Component/atom/AnimationBckground";

// Create the theme with custom styles
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": { // Ensure all main containers are flex containers
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Ensure it expands beyond viewport if needed
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
  // height: "100vh", // Ensure it expands beyond viewport if
  zIndex: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column", // Ensure it behaves properly with flex-grow
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
          <Home />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
        <section id="contact" ref={contactsRef}>
          <Contacts />
        </section>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
