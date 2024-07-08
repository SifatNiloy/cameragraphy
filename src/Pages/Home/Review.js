import React from "react";

const Review = ({ review }) => {
  const generateStars = (star) => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= star) {
        starsArray.push(<span key={i} className="text-yellow-400">&#9733;</span>); // Full star
      } else {
        starsArray.push(<span key={i} className="text-gray-300">&#9733;</span>); // Empty star
      }
    }
    return starsArray;
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const getCardColor = (star) => {
    switch (star) {
      case 5:
        return "bg-green-100";
      case 4:
        return "bg-blue-100";
      case 3:
        return "bg-yellow-100";
      case 2:
        return "bg-orange-100";
      case 1:
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="max-w-md mx-auto mb-4">
      <div className={`rounded-lg overflow-hidden shadow-lg ${getCardColor(review.star)} min-h-full w-80`}>
        <div className="p-4">
          <div className="flex items-center justify-center mb-2">
            {generateStars(review.star)}
          </div>
          <p className="text-lg text-blue-500 text-center">{truncateText(review.review, 120)}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
