/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Box, Flex } from "@radix-ui/themes";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";
import AvatarLinks from "./components/AvatarLinks";
import Timeline from "./components/Timeline";
import BlogList from "./components/BlogList";
function App() {
  return (
    <>
      <Box className="wrapper">
        <Box className="title">
          <Hero />
          <Timeline />
          <AvatarLinks />
        </Box>
        <Flex direction={"column"} align={"end"}>
          <Box>
            <ProjectsList />
            <BlogList />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default App;
