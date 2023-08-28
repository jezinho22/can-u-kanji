import { useState } from "react";
import "../css/Rating.css";

export default function Rating({ rating, handleRating, kanji }) {
	const [hover, setHover] = useState(0);

	return (
		<div className="star-rating">
			{/* display stars - not yet imported */}
			{[...Array(5)].map((star, index) => {
				index += 1;
				// for each item return a button with multiple functions
				return (
					<button
						type="button"
						key={index}
						// set up css selector for stars lighting up - either as before or higher
						className={index <= (hover || kanji.rating) ? "on" : "off"}
						// set the rating on click
						onClick={() => handleRating(index, kanji._id)}
						// set how stars light up when mouse comes over
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(kanji.rating)}>
						{/* create star icon as button */}
						<span className="star">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
}
