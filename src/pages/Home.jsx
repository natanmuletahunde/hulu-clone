/* eslint-disable no-unused-vars */
import React from 'react';
import { movies } from '../assets/dummy-data';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="text-white">
      <Header />
      <NavBar />
      <Banner />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
