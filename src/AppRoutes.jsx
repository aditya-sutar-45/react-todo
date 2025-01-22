import { Route, Routes } from "react-router";
import TodoList from "./TodoList/TodoList";
import "./css/App.css";
import App from "./App";
import Home from "./Home";
import Lists from "./Lists/Lists";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="lists" element={<Lists />} />
        <Route path="lists/:id" element={<TodoList />} />
      </Route>
    </Routes>
  );
}
