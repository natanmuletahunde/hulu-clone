/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p className="mt-2 text-gray-300">{movie.description}</p>
        <button className="mt-4 p-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MovieCard;