import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, name, price, img, description } = product;
  const navigate = useNavigate();

  const navigateToPurchase = () => {
    navigate(`/product/${_id}`);
  };

  // Function to truncate the description
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Set the maximum length for the truncated description
  const maxDescriptionLength = 100;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-8">
      <div className="relative overflow-hidden">
        <img className="w-full h-50 object-cover" src={img} alt={name} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-500 text-sm mb-4">
          {truncateDescription(description, maxDescriptionLength)}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-blue-500 font-bold">Price: {price}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
            onClick={navigateToPurchase}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
