import "../css/ListLink.css";
import { Link } from "react-router";

export default function ListLink({ list }) {
  return (
    <div className="ListLink">
      <Link to={`/lists/${list.id}`} />
      <a href={`/lists/${list.id}`}>
        <p>
          {list.emoji} {list.name}
        </p>
      </a>
    </div>
  );
}
