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
    <div>
      <h2>All Words</h2>
      <dl>
        {data.words.map((word) => {
          return (
            <div key={word.id}>
              <dt>
                <Link to={`/words/${word.id}`}>
                  {word.hiragana} ({word.romaji})
                </Link>
              </dt>
              <dd>{word.english}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
