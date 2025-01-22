import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import ListLink from "./ListLink";
import NewListForm from "./NewListForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("lists"));
  if (!data) return [];
  return data;
};

export default function Lists() {
  const [lists, setLists] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

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
