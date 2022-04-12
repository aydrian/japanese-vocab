import { redirect } from "remix";
import { db } from "~/utils/db.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  const romaji = form.get("romaji");
  const hiragana = form.get("hiragana");
  const english = form.get("english");

  await db.word.create({ data: { romaji, hiragana, english } });

  return redirect(`/words`);
};

export default function WordsNewRoute() {
  return (
    <div>
      <h2>Add a new word</h2>
      <form method="post">
        <label>
          romaji:
          <input type="text" name="romaji" />
        </label>
        <label>
          hiragana:
          <input type="text" name="hiragana" />
        </label>
        <label>
          english:
          <input type="text" name="english" />
        </label>
        <button type="submit" name="_action" value="add">
          Add
        </button>
      </form>
    </div>
  );
}
