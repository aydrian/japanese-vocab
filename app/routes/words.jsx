import { Link, Outlet } from "remix";

export default function WordsRoute() {
  return (
    <div>
      <h1>Japanese Vocabulary</h1>
      <Outlet />
      <Link to="/words/new">Add a new word</Link>
    </div>
  );
}
