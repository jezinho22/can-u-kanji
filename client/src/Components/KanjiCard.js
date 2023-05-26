import Rating from "./Rating";

export default function KanjiCard({kanji, handleStrokeVideo, deleteKanji, updateRating, index }) {

  return (
    <div className="KanjiCard" key={index}>
 
            <Rating handleRating={updateRating} rating={kanji.rating} kanji={kanji}/>
            {kanji.playVideo ? 
            (<video width="250" height="300" autoplay>
                            <source src={kanji.video}/>
                        </video> )
            : (<h3 >{kanji.character}</h3>)}
            
            <button onClick={()=>handleStrokeVideo(kanji._id)}>See Stroke Order</button>
            <p>Meaning- {kanji.meaning}</p>
            <p>Kunyomi- {kanji.kunyomi}</p>
            <p>Romaji- {kanji.romaji1}</p>
            <p>Onyomi- {kanji.onyomi}</p>
            <p>Romaji- {kanji.romaji2}</p>
            <button onClick={()=>deleteKanji(kanji._id)}>
                Remove
            </button>
        </div>
  )
}
