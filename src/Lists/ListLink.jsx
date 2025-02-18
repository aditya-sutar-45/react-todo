import { useNavigate } from "react-router";
import "../css/ListLink.css";

export default function ListLink({ list }) {
  const navigate = useNavigate();
  return (
    <div className="ListLink">
      <a href={`/lists/${list.id}`} onClick={(e) => {
        e.preventDefault();
        navigate(`/lists/${list.id}`)
      }}>
        <p>
          {list.emoji} {list.name}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#EAEAEA"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </a>
    </div>
  );
}
