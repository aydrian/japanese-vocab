import { db } from "~/utils/db.server";

export const getRandomWordId = async () => {
  const wordCount = await db.word.count();
  const skip = Math.floor(Math.random() * wordCount);
  const [randWord] = await db.word.findMany({
    take: 1,
    skip: skip,
    orderBy: { createdAt: "desc" },
    select: {
      id: true
    }
  });

  return randWord.id;
};
