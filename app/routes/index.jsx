import { Link, redirect } from "remix";
import { getRandomWordId } from "~/utils/helpers.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  if (action === "start_practice") {
    const id = await getRandomWordId();
    return redirect(`/practice/${id}`);
  }
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-bold">Let's learn some Japanese</h1>
      <div>
        <form method="post" action="?index">
          <button
            type="submit"
            name="_action"
            value="start_practice"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Start Practice
          </button>
        </form>
      </div>
      <Link to="/words">Manage Dictionary</Link>
    </div>
  );
}
