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
      <div>
        <Form method="post">
          <input type="hidden" name="wordId" value={word.id} />
          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h3 className="text-gray-900 text-3xl leading-tight font-medium mb-2">
                {word.hiragana}
              </h3>
              {!word.isHiragana && (
                <p className="text-gray-700 text-base mb-4">{word.romaji}</p>
              )}

              {actionData ? (
                <>
                  <h3>{actionData.word.english}</h3>
                  <button
                    type="submit"
                    name="_action"
                    value="next"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Next
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  name="_action"
                  value="reveal"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
