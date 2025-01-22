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
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name..."
          {...register("name", validationOptions.name)}
        />
        {errors.name && <small className="error">{errors.name.message}</small>}
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
        <button type="submit">OK</button>
      </form>
    </div>
  );
}
