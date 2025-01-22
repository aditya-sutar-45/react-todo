import "../css/Todo.css";
import TodoCompleteIcon from "./TodoCompleteIcon";
import TodoDeleteButton from "./TodoDeleteButton";

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="Todo">
      <div className="todoContainer">
        <div
          className="todoInfo"
          style={{
            textDecoration: todo.isComplete ? "line-through" : "none",
            opacity: todo.isComplete ? 0.5 : 1,
          }}
        >
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
        <div>
          <button className="todoIcon" onClick={() => toggleTodo(todo.id)}>
            <TodoCompleteIcon isComplete={todo.isComplete} />
          </button>
          <TodoDeleteButton
            isComplete={todo.isComplete}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
    </li>
  );
}
