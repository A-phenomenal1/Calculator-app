import React from "react";
import Calculator from "./src/screens/Calculator";
import logger from "./src/config/logger";

logger.start();

export default function App() {
  return <Calculator />;
}
