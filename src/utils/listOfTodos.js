import { v4 as uuid } from "uuid";
export const listOfTodos = [
  {
    id: uuid(),
    title: "Morning Exercise",
    description:
      "Go for a 30-minute jog in the park to stay active and start the day fresh.",
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Shopping",
    description:
      "Buy fresh vegetables, fruits, milk, and bread for the week ahead.",
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Read a Book",
    description:
      "Finish reading the last two chapters of the current novel to hit the monthly reading goal.",
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Update Resume",
    description:
      "Add recent projects and work experiences to the resume before sending out applications.",
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Clean Workspace",
    description:
      "Organize and declutter the desk area to create a productive environment.",
    isComplete: false,
  },
  {
    id: uuid(),
    title: "Learn a New Recipe",
    description:
      "Try cooking a pasta dish from the new recipe book for dinner.",
    isComplete: false,
  },
];
