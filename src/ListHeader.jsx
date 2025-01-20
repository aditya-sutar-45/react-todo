import "./css/ListHeader.css";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";

export default function ListHeader({ addTodo }) {
  const [formVisible, setFormVisible] = useState(false);

  function toggleForm() {
    setFormVisible((prev) => !prev);
  }

  return (
    <div className="ListHeader">
      <h1>My List #1</h1>
      <button className="toggleButton" onClick={toggleForm}>
        {formVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z" />
          </svg>
        )}
      </button>
      {/* ${formVisible ? "show" : "hide"}  */}
      <div className={`todoForm ${formVisible ? "show" : "hide"}`}>
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
