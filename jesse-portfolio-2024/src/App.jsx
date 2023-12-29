import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }}>
        <div style={{ cursor: "default" }}>
          Welcome
          <div style={{ fontSize: "100px", fontWeight: "700" }}>
            Jesse Stone
          </div>
          <div style={{ fontWeight: "100" }}>This is my website.</div>
        </div>
        <div></div>
      </motion.div>
      <motion.button>Click me!</motion.button>
    </>
  );
}

export default App;
