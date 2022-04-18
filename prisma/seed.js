const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    [...getHiragana(), ...getWords()].map((word) => {
      const data = { ...word };
      return db.word.create({ data });
    })
  );
}

seed();

function getWords() {
  return [
    {
      romaji: "ie",
      hiragana: "いえ",
      english: "house"
    },
    {
      romaji: "sakura",
      hiragana: "さくら",
      english: "cherry blossom"
    },
    {
      romaji: "rakuda",
      hiragana: "らくだ",
      english: "camel"
    },
    {
      romaji: "asagohan",
      hiragana: "あさごはん",
      english: "breakfast"
    }
  ];
}

function getHiragana() {
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
      romaji: "ka",
      hiragana: "か",
      english: "ka"
    },
    {
      romaji: "ki",
      hiragana: "き",
      english: "ki"
    },
    {
      romaji: "ku",
      hiragana: "く",
      english: "ku"
    },
    {
      romaji: "ke",
      hiragana: "け",
      english: "ke"
    },
    {
      romaji: "ko",
      hiragana: "こ",
      english: "ko"
    },
    {
      romaji: "sa",
      hiragana: "さ",
      english: "sa"
    },
    {
      romaji: "shi",
      hiragana: "し",
      english: "shi"
    },
    {
      romaji: "su",
      hiragana: "す",
      english: "su"
    },
    {
      romaji: "se",
      hiragana: "せ",
      english: "se"
    },
    {
      romaji: "so",
      hiragana: "そ",
      english: "so"
    },
    {
      romaji: "ta",
      hiragana: "た",
      english: "ta"
    },
    {
      romaji: "chi",
      hiragana: "ち",
      english: "chi"
    },
    {
      romaji: "tsu",
      hiragana: "つ",
      english: "tsu"
    },
    {
      romaji: "te",
      hiragana: "て",
      english: "te"
    },
    {
      romaji: "to",
      hiragana: "と",
      english: "to"
    },
    {
      romaji: "na",
      hiragana: "な",
      english: "na"
    },
    {
      romaji: "ni",
      hiragana: "に",
      english: "ni"
    },
    {
      romaji: "nu",
      hiragana: "ぬ",
      english: "nu"
    },
    {
      romaji: "ne",
      hiragana: "ね",
      english: "ne"
    },
    {
      romaji: "no",
      hiragana: "の",
      english: "no"
    },
    {
      romaji: "ha",
      hiragana: "は",
      english: "ha"
    },
    {
      romaji: "hi",
      hiragana: "ひ",
      english: "hi"
    },
    {
      romaji: "fu",
      hiragana: "ふ",
      english: "fu"
    },
    {
      romaji: "he",
      hiragana: "へ",
      english: "he"
    },
    {
      romaji: "ho",
      hiragana: "ほ",
      english: "ho"
    },
    {
      romaji: "ma",
      hiragana: "ま",
      english: "ma"
    },
    {
      romaji: "mi",
      hiragana: "み",
      english: "mi"
    },
    {
      romaji: "mu",
      hiragana: "む",
      english: "mu"
    },
    {
      romaji: "me",
      hiragana: "め",
      english: "me"
    },
    {
      romaji: "mo",
      hiragana: "も",
      english: "mo"
    },
    {
      romaji: "ya",
      hiragana: "や",
      english: "ya"
    },
    {
      romaji: "yu",
      hiragana: "ゆ",
      english: "yu"
    },
    {
      romaji: "yo",
      hiragana: "よ",
      english: "yo"
    },
    {
      romaji: "ra",
      hiragana: "ら",
      english: "ra"
    },
    {
      romaji: "ri",
      hiragana: "り",
      english: "ri"
    },
    {
      romaji: "ru",
      hiragana: "る",
      english: "ru"
    },
    {
      romaji: "re",
      hiragana: "れ",
      english: "re"
    },
    {
      romaji: "ro",
      hiragana: "ろ",
      english: "ro"
    },
    {
      romaji: "n",
      hiragana: "ん",
      english: "n"
    },
    {
      romaji: "wa",
      hiragana: "わ",
      english: "wa"
    },
    {
      romaji: "wo",
      hiragana: "を",
      english: "wo"
    },
    {
      romaji: "",
      hiragana: "",
      english: ""
    }
  ];
}
