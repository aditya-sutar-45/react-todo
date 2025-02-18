import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>TODO or NOT TODO</h1>
      <p style={{fontStyle: "italic"}}>thus begins thy journey of productivity...</p>
      <Link to="/lists">Go to Lists</Link>
    </>
  );
}
