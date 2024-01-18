/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Box } from "@radix-ui/themes";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";
import AvatarLinks from "./components/AvatarLinks";
function App() {
  return (
    <>
      <Box className="wrapper">
        <Box className="title">
          <Hero />
          <AvatarLinks />
        </Box>
        <Box>
          <ProjectsList />
        </Box>
      </Box>
    </>
  );
}
export default App;
