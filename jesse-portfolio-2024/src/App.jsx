/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Box, Flex } from "@radix-ui/themes";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";
import AvatarLinks from "./components/AvatarLinks";
import Timeline from "./components/Timeline";
import BlogList from "./components/BlogList";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ProgressBar from "./components/Progressbar";

function App() {
  const refBlog = useRef(null);
  const isBlogInView = useInView(refBlog);
  const refProject = useRef(null);
  const isProjectInView = useInView(refProject);
  return (
    <>
      <Box className="wrapper">
        <Box className="title">
          <Flex direction={"column"} style={{ height: "100%" }}>
            <Hero />
            <ProgressBar />
            <Timeline projectView={isProjectInView} blogView={isBlogInView} />
            <Box style={{ marginTop: "auto" }}>
              <AvatarLinks />
            </Box>
          </Flex>
        </Box>
        <Flex direction={"column"} align={"end"} gap={"3"}>
          <div ref={refProject}>
            <ProjectsList />
          </div>
          <div ref={refBlog}>
            <BlogList />
          </div>
        </Flex>
      </Box>
    </>
  );
}
export default App;
