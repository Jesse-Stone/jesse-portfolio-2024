/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
function App() {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <>
      <section style={{ height: "100vh" }}>
        <Text className="test-font-override" style={{ fontSize: "150px" }}>
          The story that shook a nation...
        </Text>
      </section>
      <section style={{ height: "100vh" }}>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Text className="test-font-override" style={{ fontSize: "150px" }}>
            ...the truth behind the Jew Tunnels.
          </Text>
        </motion.div>
      </section>
      <section style={{ height: "100vh" }}>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Text className="test-font-override" style={{ fontSize: "150px" }}>
            ...told here first!
          </Text>
        </motion.div>
      </section>
    </>
  );
}
export default App;
