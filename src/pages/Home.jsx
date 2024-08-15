/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const placeholderMovies = [
  {
    id: 1,
    title: "Avengers",
    image: "/assets/avengers.jpg",
    description: "Avengers follows a team of heroes as they unite to prevent an impending cosmic threat from an infamous villain."
  },
  {
    id: 2,
    title: "Black Panther",
    image: "/assets/blackpanter.jpg",
    description: "In Black Panther, the king of a hidden African nation faces betrayal and must unite his people to defend their powerful heritage."
  },
  {
    id: 3,
    title: "Deadpool",
    image: "/assets/deadpool.jpg",
    description: "Deadpool showcases the comedic and action-packed journey of a mercenary with extraordinary abilities."
  },
  {
    id: 4,
    title: "Different",
    image: "/assets/different.jpg",
    description: "Different tells the story of an ordinary individual who discovers their extraordinary abilities."
  },
  {
    id: 5,
    title: "Divergent",
    image: "/assets/divergent.jpg",
    description: "Set in a dystopian future, Divergent follows a young woman who discovers she is Divergent."
  },
  {
    id: 6,
    title: "Matrix",
    image: "/assets/matrix.jpg",
    description: "In Matrix, a computer hacker awakens to the truth about his reality and his fight against a powerful artificial intelligence."
  },
  {
    id: 7,
    title: "Men in Black",
    image: "/assets/mib.jpg",
    description: "Men in Black features a secret organization that monitors extraterrestrial life on Earth."
  },
  {
    id: 8,
    title: "Blage",
    image: "/assets/blage.jpg",
    description: "Blage dives into the world of a rogue assassin who finds redemption through unexpected alliances."
  },
  {
    id: 9,
    title: "Tity",
    image: "/assets/tity.jpg",
    description: "Tity follows a group of unlikely heroes as they embark on an epic quest to save their world."
  },
  {
    id: 10,
    title: "Shot Size",
    image: "/assets/shotsize.jpg",
    description: "In Shot Size, a brilliant scientist must use their intellect to avert a global catastrophe."
  },
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