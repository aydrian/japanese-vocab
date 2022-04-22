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
    <div className="">
      <div>
        <Form method="post">
          <input type="hidden" name="wordId" value={word.id} />
          <div className="">
            <div className="">
              <h3 className="">
                {word.hiragana}
              </h3>
              {!word.isHiragana && (
                <p className="">{word.romaji}</p>
              )}

              {actionData ? (
                <>
                  <h3>{actionData.word.english}</h3>
                  <button
                    type="submit"
                    name="_action"
                    value="next"
                    className=""
                  >
                    Next
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  name="_action"
                  value="reveal"
                  className=""
                >
                  Reveal
                </button>
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
