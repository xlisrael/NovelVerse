import { useState } from "react";
import PropTypes from "prop-types";

const StarRating = ({ novelId, currentRating }) => {
  const [rating, setRating] = useState(currentRating);

  const handleRating = (newRating) => {
    setRating(newRating);
    console.log(`Rated novel ${novelId} with ${newRating} stars`);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  novelId: PropTypes.number.isRequired,
  currentRating: PropTypes.number.isRequired,
};

export default StarRating;
