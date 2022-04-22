import { Form, json, redirect, useActionData, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { getRandomWordId } from "~/utils/helpers.server";

export const loader = async ({ params }) => {
  const randWord = await db.word.findUnique({
    where: {
      id: params.wordId,
    },
    select: {
      id: true,
      hiragana: true,
      romaji: true,
      english: true,
    },
  });

  const { english, ...word } = randWord;

  return {
    word: {
      ...word,
      isHiragana: word.romaji === english,
    },
  };
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const id = form.get("wordId");
  const action = form.get("_action");
  if (action === "reveal") {
    const word = await db.word.findUnique({
      where: {
        id,
      },
      select: {
        english: true,
      },
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
    <div className="flex flex-col justify-center items-center my-20">
      <Form method="post">
        <input type="hidden" name="wordId" value={word.id} />
        <div className="">
          <div className="bg-gray-100 border-2 border-gray-200  flex flex-col justify-center items-center p-10 rounded-lg transition-shadow w-72 lg:w-96 duration-300">
            <h3 className="text-6xl font-bold">{word.hiragana}</h3>
            {!word.isHiragana && <p className="">{word.romaji}</p>}
            {actionData ? (
              <>
                <h3 className="mt-10 text-2xl">{actionData.word.english}</h3>
                <button
                  type="submit"
                  name="_action"
                  value="next"
                  className="bg-blue-200 mt-20"
                >
                  Next
                </button>
              </>
            ) : (
              <button
                type="submit"
                name="_action"
                value="reveal"
                className="bg-blue-200 mt-20"
              >
                Reveal
              </button>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
}
