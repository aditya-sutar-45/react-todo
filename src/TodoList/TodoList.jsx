import { useEffect, useState } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import ListHeader from "./ListHeader";
import "../css/TodoList.css";
import { useParams } from "react-router";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todoList"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const { id } = useParams();
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
        listId: id,
      },
    ]);
  }

  const lists = JSON.parse(localStorage.getItem("lists")) || [];
  const currentList = lists.find((list) => list.id === id);

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

  const getCurrentTodos = todoList.filter((todo) => todo.listId === id);

  return (
    <div className="TodoList">
      <ListHeader addTodo={addTodo} currentList={currentList} />
      <ul>
        {getCurrentTodos.map((todo) => {
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
