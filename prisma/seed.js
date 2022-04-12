const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getWords().map((word) => {
      const data = { ...word };
      return db.word.create({ data });
    })
  );
}

seed();

function getWords() {
  return [
    {
      romaji: "a",
      hiragana: "あ",
      english: "a"
    },
    {
      romaji: "i",
      hiragana: "い",
      english: "i"
    },
    {
      romaji: "u",
      hiragana: "う",
      english: "u"
    },
    {
      romaji: "e",
      hiragana: "え",
      english: "e"
    },
    {
      romaji: "o",
      hiragana: "お",
      english: "o"
    },
    {
      romaji: "ie",
      hiragana: "いえ",
      english: "house"
    }
  ];
}
