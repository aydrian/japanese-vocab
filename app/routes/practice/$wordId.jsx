import { Form, json, redirect, useActionData, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { getRandomWordId } from "~/utils/helpers.server";

export const loader = async ({ params }) => {
  const randWord = await db.word.findUnique({
    where: {
      id: params.wordId
    },
    select: {
      id: true,
      hiragana: true,
      romaji: true,
      english: true
    }
  });

  const { english, ...word } = randWord;

  return {
    word: {
      ...word,
      isHiragana: word.romaji === english
    }
  };
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const id = form.get("wordId");
  const action = form.get("_action");
  if (action === "reveal") {
    const word = await db.word.findUnique({
      where: {
        id
      },
      select: {
        english: true
      }
    });

    return json({ word });
  } else if (action === "next") {
    const id = await getRandomWordId();
    return redirect(`/practice/${id}`);
  }
};

export default function PracticeWordRoute() {
  const actionData = useActionData();
  const { word } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Let's learn some Japanese</h1>
      <div>
        <Form method="post">
          <input type="hidden" name="wordId" value={word.id} />
          <h1>{word.hiragana}</h1>
          {!word.isHiragana && <h2>{word.romaji}</h2>}
          {actionData ? (
            <>
              <h3>{actionData.word.english}</h3>
              <button type="submit" name="_action" value="next">
                Next
              </button>
            </>
          ) : (
            <button type="submit" name="_action" value="reveal">
              Reveal
            </button>
          )}
        </Form>
      </div>
    </div>
  );
}
