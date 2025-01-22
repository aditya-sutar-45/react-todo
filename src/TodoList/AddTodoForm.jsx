import { useForm } from "react-hook-form";
import "../css/AddTodoForm.css";

const validationOptions = {
  title: {
    required: "title cannot be empty!",
    minLength: {
      value: 3,
      message: "title must have atleast 3 characters!",
    },
  },
  description: {
    minLength: {
      value: 5,
      message: "description must have atleast 5 characters!",
    },
  },
};

export default function AddTodoForm({ addTodo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    addTodo(data);
    reset();
  }

  return (
    <div className="AddTodoForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <label htmlFor="title">Title: </label> */}
          <input
            type="text"
            id="title"
            name="title"
            placeholder="title..."
            {...register("title", validationOptions.title)}
          />
          {errors.title && (
            <small className="error">{errors.title.message}</small>
          )}
        </div>
        <div>
          {/* <label htmlFor="description">Description: </label> */}
          <input
            type="text"
            id="description"
            name="description"
            placeholder="desc..."
            {...register("description", validationOptions.description)}
          />
          {errors.description && (
            <small className="error">{errors.description.message}</small>
          )}
        </div>
        <button type="submit" className="addTaskButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#FFFFFF"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
