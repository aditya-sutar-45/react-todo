import { v4 as uuid } from "uuid";
import { useState } from "react";
import ListLink from "./ListLink";
import NewListForm from "./NewListForm";

export default function Lists() {
  const [lists, setLists] = useState([
    { id: uuid(), name: "House", emoji: "🏠" },
    { id: uuid(), name: "Productivity", emoji: "⏲️" },
  ]);
  function addList(data) {
    const list = {
      id: uuid(),
      name: data.name,
      emoji: data.emoji,
    };
    setLists([...lists, list]);
  }
  return (
    <>
      <h1>Your Lists</h1>
      <div>
        {lists.map((list) => (
          <ListLink key={list.id} list={list} />
        ))}
      </div>
      <NewListForm addList={addList} />
    </>
  );
}
