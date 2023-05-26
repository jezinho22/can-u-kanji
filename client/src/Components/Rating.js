import { useState } from 'react'

export default function Rating({rating, handleRating, kanji}) {

    const [hover, setHover] = useState(0)

    return (
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index+=1;
            return (                       
                <button type="button" 
                        key={index} 
                        className={index <= kanji.rating ? "on" : "off"} 
                        onClick={()=> handleRating(index, kanji._id)}
                        onMouseEnter={()=>setHover(index)}
                        onMouseLeave={()=>setHover(kanji.rating)}>
                <span className="star">&#128077;</span>
                </button>        
            );
          })}
        </div>
      );
  
}
