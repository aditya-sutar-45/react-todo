import { Route, Routes } from "react-router";
import Home from "./test/Home";
import App from "./App";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="list" element={<App />} />
    </Routes>
  );
}
