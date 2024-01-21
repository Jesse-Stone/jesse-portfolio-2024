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
import Career from "./components/Career";
import Music from "./components/Music";

function App() {
  const refBlog = useRef(null);
  const refProject = useRef(null);
  const refCareer = useRef(null);
  const refMusic = useRef(null);
  const isBlogInView = useInView(refBlog);
  const isProjectInView = useInView(refProject);
  const isCareerInView = useInView(refCareer);
  const isMusicInView = useInView(refMusic);

  return (
    <>
      <Box className="wrapper">
        <Box className="title">
          <Flex direction={"column"} gap={"2"} style={{ height: "100%" }}>
            <Hero />
            <ProgressBar />
            <Box style={{ marginTop: "5%" }}>
              <Timeline
                projectView={isProjectInView}
                blogView={isBlogInView}
                careerView={isCareerInView}
                musicView={isMusicInView}
              />
            </Box>
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
          <div ref={refCareer}>
            <Career />
          </div>
          <div ref={refMusic}>
            <Music />
          </div>
        </Flex>
      </Box>
    </>
  );
}
export default App;
