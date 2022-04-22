import { Link, Outlet } from "remix";

export default function WordsRoute() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-10">Japanese Vocabulary</h1>
      <Outlet />
      <Link to="/words/new" className="bg-blue-200 hover:bg-blue-100 transition-colors text-white py-4 px-10 text-xl rounded-lg my-20 shadow-button select-none">Add a new word</Link>
    </div>
  );
}
