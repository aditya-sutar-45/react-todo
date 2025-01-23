import "../css/NewListForm.css";
import { useForm } from "react-hook-form";
import { emojiList } from "../utils/emojiList";

const validationOptions = {
  name: {
    required: "list must have a name",
    minLength: {
      value: 3,
      message: "name must have atleast 3 characters",
    },
  },
  emoji: {
    required: "select one emoji for the list",
    maxLenght: {
      value: 1,
      message: "u can only select 1 emoji",
    },
  },
};
export default function NewListForm({ addList }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    addList(data);
    reset();
  }

  return (
    <div className="NewListForm">
      <h2>Add a new List: </h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="nameInput">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name..."
            {...register("name", validationOptions.name)}
          />
          {errors.name && (
            <small className="error">{errors.name.message}</small>
          )}
        </div>
        <div className="emojiSelect">
          <select
            name="emojis"
            id="emojis"
            {...register("emoji", validationOptions.emoji)}
          >
            <option value="">Select an Emoji</option>
            {emojiList.map((emoji, i) => (
              <option key={i} value={emoji}>
                {emoji}
              </option>
            ))}
          </select>
          {errors.emoji && (
            <small className="error">{errors.emoji.message}</small>
          )}
        </div>
        <button type="submit">OK</button>
      </form>
    </div>
  );
}
