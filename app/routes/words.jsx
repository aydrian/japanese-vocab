import { Link, Outlet } from "remix";

export default function WordsRoute() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-10">Japanese Vocabulary</h1>
      <Outlet />
      <Link to="/words/new" className="button my-20">
        Add a new word
      </Link>
    </div>
  );
}
