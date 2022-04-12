-- CreateTable
CREATE TABLE "words" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "romaji" TEXT,
    "hiragana" TEXT,
    "english" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "primary" PRIMARY KEY ("id")
);
