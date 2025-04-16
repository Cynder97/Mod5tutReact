import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [firstAnimal, second, third] = ["Wolf", "Bear", "Seal"];

createRoot(document.getElementById("root")).render(<App />);
