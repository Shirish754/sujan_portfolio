import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
