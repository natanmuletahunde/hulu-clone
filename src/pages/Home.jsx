/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const placeholderMovies = [
  { id: 1, title: "Sample Movie 1", image: "/assets/sample-image1.jpg", description: "Description for Sample Movie 1" },
  { id: 2, title: "Sample Movie 2", image: "/assets/sample-image2.jpg", description: "Description for Sample Movie 2" },
  { id: 3, title: "Sample Movie 3", image: "/assets/sample-image3.jpg", description: "Description for Sample Movie 3" },
  { id: 4, title: "Sample Movie 4", image: "/assets/sample-image4.jpg", description: "Description for Sample Movie 4" },
  { id: 5, title: "Sample Movie 5", image: "/assets/sample-image5.jpg", description: "Description for Sample Movie 5" },
  { id: 6, title: "Sample Movie 6", image: "/assets/sample-image6.jpg", description: "Description for Sample Movie 6" },
  { id: 7, title: "Sample Movie 7", image: "/assets/sample-image7.jpg", description: "Description for Sample Movie 7" },
  { id: 8, title: "Sample Movie 8", image: "/assets/sample-image8.jpg", description: "Description for Sample Movie 8" },
  { id: 9, title: "Sample Movie 9", image: "/assets/sample-image9.jpg", description: "Description for Sample Movie 9" },
  { id: 10, title: "Sample Movie 10", image: "/assets/sample-image10.jpg", description: "Description for Sample Movie 10" },
  { id: 11, title: "Sample Movie 11", image: "/assets/sample-image10.jpg", description: "Description for Sample Movie 11" },
  { id: 12, title: "Sample Movie 12", image: "/assets/sample-image10.jpg", description: "Description for Sample Movie 12" },


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
