kanji alive API  
returns:  
for advanced search with params: { grade: "2" },  
 array of kanji objects: "kanji": { "character": "書", "stroke": 10 }, "radical":
{ "character": "⽇", "stroke": 4, "order": 92 }

for details of kanji
use: url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all",  
or 	url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/" + specific kanj,

so a search for some grade 2 kanji with details would involve either query for grade 2, and then call back for each one's details
or search for all kanji, store in state or local storage, and query the whole lot

From Reddit: https://www.reddit.com/r/LearnJapanese/comments/56mjhs/jlpt_levels_for_kanji_learners_course/?onetap_auto=true
*Another thing to note is the N5 kanji. N5 kanji vaguely resembles Grade 1 kanji, but with about 30 extra ones from Grades 2 and 3. Yet there was a certain class of grade 1 kanji that were not on the old test specs: 糸、草、石、王・玉、貝. Do you see the pattern here? Those are all common bushu that MEXT decided that elementary school students need to learn early on so they can learn how to build kanji. JEES evidently decided that they know better than MEXT does on how to test foreigners, so they left those kanji out of the old test specs. I think you'll find that if you look at the current published test specs (公式問題集), that those kanji are still missing from N5, so JEES evidently has not budged much on what kanji they consider to be important for N5. (Note: JEES's methodology for choosing which kanji for which test generally relies upon what JSL textbooks teach. And by "JSL textbooks" we don't mean "genki/minna/tobira", but whatever the todai JSL department head whose friends with the JEES bucho uses for his courses, as well as other JSL departments at top-tier universities. So this trickles down from the authors of those textbooks as deciding teaching those kanji to not be good at that stage for foreigners.)*

