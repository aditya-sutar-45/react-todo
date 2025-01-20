import { useEffect, useState } from "react";
import "./css/App.css";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import ListHeader from "./ListHeader";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todoList"));
  if (!data) return [];
  return data;
};

function App() {
  const [todoList, setTodoList] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(data) {
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        title: data.title,
        description: data.description,
        isComplete: false,
      },
    ]);
  }

  function deleteTodo(id) {
    setTodoList((prevList) => prevList.filter((todo) => id !== todo.id));
  }

  function toggleTodo(id) {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <div className="App">
      <ListHeader addTodo={addTodo} />
      <ul>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
