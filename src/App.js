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
          backgroundColor: "black",
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

// Styled container for background shapes
// const ShapesContainer = styled("div")({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100vh",
//   zIndex: -1, // Ensure it stays behind the content
//   pointerEvents: "none", // Prevent shapes from blocking clicks
// });

// Example Shape
// const Shape = styled("div")(({ top, left, size, color }) => ({
//   position: "absolute",
//   top: top,
//   left: left,
//   width: size,
//   height: size,
//   backgroundColor: `rgba(${color}, 0.1)`, // Add transparency (30%)
//   borderRadius: "50%", // Makes it a circle
//   // opacity: 1, // Set opacity to 1 to avoid affecting the whole element
//   backdropFilter: "blur(5px)",
//   WebkitBackdropFilter: "blur(5px)",
// }));


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

      {/* Background Shapes
      <ShapesContainer>
        <Shape top="10%" left="20%" size="100px" color="red" />
        <Shape top="50%" left="70%" size="150px" color="blue" />
        <Shape top="80%" left="40%" size="120px" color="green" />
      </ShapesContainer> */}

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
