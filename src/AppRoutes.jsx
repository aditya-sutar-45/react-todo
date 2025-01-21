import { Route, Routes } from "react-router";
import TodoList from "./TodoList";
import "./css/App.css";
import App from "./App";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/list" element={<TodoList />} />
      </Route>
    </Routes>
  );
}
