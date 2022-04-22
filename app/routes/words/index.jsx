import { Link, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const words = await db.word.findMany();

  return { words };
};

export default function WordsIndexRoute() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-center">
      <h2 className="my-10 text-3xl">All Words</h2>
      <dl className="grid grid-rows-auto grid-cols-2 sm:grid-rows-4 sm:grid-cols-4">
        {data.words.map((word) => {
          return (
            <div
              key={word.id}
              className="text-xl m-2 p-10 border-gray-200 border rounded-lg flex flex-col justify-center items-center"
            >
              <dt>
                <Link to={`/words/${word.id}`}>
                  {word.hiragana} ({word.romaji})
                </Link>
              </dt>
              <dd className="mt-5">{word.english}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
