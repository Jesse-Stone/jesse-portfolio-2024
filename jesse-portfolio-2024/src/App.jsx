/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Flex, Text, Button } from "@radix-ui/themes";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Flex direction="column" align={"center"} gap="2">
        <Text size={"9"}>Hello!</Text>
        <motion.div
          className="test-font-override"
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        >
          <Button>Let's go</Button>
        </motion.div>
      </Flex>
    </>
  );
}
export default App;
