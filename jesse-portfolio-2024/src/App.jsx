/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Box } from "@radix-ui/themes";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";
function App() {
  return (
    <>
      <Box className="wrapper">
        <Box className="title">
          <Hero />
        </Box>
        <Box ml={"auto"}>
          <ProjectsList />
        </Box>
      </Box>
    </>
  );
}
export default App;
