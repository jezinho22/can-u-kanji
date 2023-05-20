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

