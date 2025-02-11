import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Component/Navbar";
import { styled } from "@mui/material";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import { useRef } from "react";

// Create the theme with custom styles
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          overflowX: "hidden",
          background: "black",
        },
      },
    },
  },
});

// Create the Wrapper component for content layout
const Wrapper = styled("div")({
  width: "55vw",
  margin: "0 auto",
  boxSizing: "border-box",
});

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
      />
      <CssBaseline />

      <Wrapper>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
