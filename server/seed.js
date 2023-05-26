const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const User = require("./models/usermodel");

async function seed() {
    await User.create(
        {
            email: "someone@somewhere",
            mykanji: [
                {
                    character: "話",
                    videoMp4: "https://media.kanjialive.com/kanji_animations/kanji_mp4/sho-ka(ku)_00.mp4",
                    videoWebm: "not much",
                    playVideo:false,
                                        grade: 2,
                    meaning: "speak",
                    kunyomi: "はな",
                    romaji1: "hana, hanasu, hanashi",
                    onyomi: "ワ",
                    romaji2: "wa",
                    hint: "Tongue 舌 uttering words 言.",
                },
                {
                    character: "秋",
                    videoMp4: "https://media.kanjialive.com/kanji_animations/kanji_mp4/sho-ka(ku)_00.mp4",
                    videoWebm: "not much",
                    playVideo:false,
                                        grade: 2,
                    meaning: "autumn",
                    kunyomi: "あき",
                    romaji1: "aki",
                    onyomi: "シュウ",
                    romaji2: "shuu",
                    hint: "In fall, fire 火 can be made where the crops 禾 grew.",
                },
            ],
        },
        {
            email: "someoneelse@differentplace",
            mykanji: [
                {
                    character: "書",
                    videoMp4: "https://media.kanjialive.com/kanji_animations/kanji_mp4/sho-ka(ku)_00.mp4",
                    videoWebm: "not much",
                    playVideo:false,
                    grade: 2,
                    meaning: "write, book",
                    kunyomi: "か",
                    romaji1: "ka, kaku",
                    onyomi: "ショ",
                    romaji2: "sho",
                    hint: "Using a writing brush 聿 <span class='note'>(holding [38] brush 丨 with fingers 二)</span> in a sunlit 日 place.",
                },
                {
                    character: "秋",
                    videoMp4: "https://media.kanjialive.com/kanji_animations/kanji_mp4/sho-ka(ku)_00.mp4",
                    videoWebm: "not much",
                    playVideo:false,
                    grade: 2,
                    meaning: "autumn",
                    kunyomi: "あき",
                    romaji1: "aki",
                    onyomi: "シュウ",
                    romaji2: "shuu",
                    hint: "In fall, fire 火 can be made where the crops 禾 grew.",
                },
            ],
        }
    );
    mongoose.disconnect();
}

seed();
