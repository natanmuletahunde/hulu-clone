/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const placeholderMovies = [
  { id: 1, title: "Sample Movie 1", image: "path/to/sample-image1.jpg", description: "Description for Sample Movie 1" },
  { id: 2, title: "Sample Movie 2", image: "path/to/sample-image2.jpg", description: "Description for Sample Movie 2" },
  // Add more placeholder movies if needed
];

const Home = () => {
  return (
    <div className="text-white">
      <Header />
      <NavBar />
      <Banner />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {placeholderMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
