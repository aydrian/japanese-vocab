import { redirect } from "remix";
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
      <h1>Let's learn some Japanese</h1>
      <div>
        <form method="post" action="?index">
          <button type="submit" name="_action" value="start_practice">
            Start Practice
          </button>
        </form>
      </div>
    </div>
  );
}
