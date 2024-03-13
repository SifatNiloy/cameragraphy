import React, { useEffect, useState } from "react";

const Review = ({ review, refetch }) => {
  const [stars, setStars] = useState("");
  const [cardColor, setCardColor] = useState("");

  useEffect(() => {
    // Use a switch statement for better readability
    switch (review.star) {
      case 5:
        setStars("⭐⭐⭐⭐⭐");
        break;
      case 4:
        setStars("⭐⭐⭐⭐");
        break;
      case 3:
        setStars("⭐⭐⭐");
        break;
      case 2:
        setStars("⭐⭐");
        break;
      case 1:
        setStars("⭐");
        break;
      default:
        setStars("no star");
    }

    // Assign different colors based on review.star
    switch (review.star) {
      case 5:
        setCardColor("bg-green-100");
        break;
      case 4:
        setCardColor("bg-blue-100");
        break;
      case 3:
        setCardColor("bg-yellow-100");
        break;
      case 2:
        setCardColor("bg-orange-100");
        break;
      case 1:
        setCardColor("bg-red-100");
        break;
      default:
        setCardColor("bg-gray-100");
    }
  }, [review.star]);

  return (
    <div className="flex justify-center items-center mb-4">
      <div
        className={`w-80 h-30 mx-4 rounded-lg overflow-hidden shadow-lg ${cardColor}`}
      >
        <div className="p-4">
          <h1 className="text-2xl text-center mb-2">{stars}</h1>
          <p className="text-lg text-blue-500 text-center">{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
