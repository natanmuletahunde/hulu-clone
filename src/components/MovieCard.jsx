/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-white text-xl mt-2">{movie.title}</h2>
      <p className="text-gray-400">{movie.description}</p>
    </div>
  );
};

export default MovieCard;
