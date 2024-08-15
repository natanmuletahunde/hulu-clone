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
    image: "/assets/avenger.jpg",
    description: "Avengers follows a team of heroes as they unite to prevent an impending cosmic threat from an infamous villain. Each member brings their unique powers and skills to the fight."
  },
  {
    id: 2,
    title: "Black Panther",
    image: "/assets/blackpanter.jpg",
    description: "In Black Panther, the king of a hidden African nation faces betrayal and must unite his people to defend their powerful heritage and the future of Wakanda."
  },
  {
    id: 3,
    title: "Deadpool",
    image: "/assets/deadpool.jpg",
    description: "Deadpool showcases the comedic and action-packed journey of a mercenary with extraordinary abilities who seeks revenge on those who wronged him while navigating his chaotic personal life."
  },
  {
    id: 4,
    title: "Different",
    image: "/assets/different.jpg",
    description: "Different tells the story of an ordinary individual who discovers their extraordinary abilities, thrust into a world of conflict where they must confront their fears and save the day."
  },
  {
    id: 5,
    title: "Divergent",
    image: "/assets/divergent.jpg",
    description: "Set in a dystopian future, Divergent follows a young woman who discovers she is Divergent and must navigate a society divided into factions, all while uncovering sinister plots."
  },
  {
    id: 6,
    title: "Matrix",
    image: "/assets/matrix.jpg",
    description: "In Matrix, a computer hacker awakens to the truth about his reality and his fight against a powerful artificial intelligence, exploring the boundaries of technology and human choice."
  },
  {
    id: 7,
    title: "Men in Black",
    image: "/assets/mib.jpg",
    description: "Men in Black features a secret organization that monitors extraterrestrial life on Earth. When an intergalactic threat emerges, agents must prove they are the galaxy's first line of defense."
  },
  {
    id: 8,
    title: "Bage",
    image: "/assets/bage.jpg",
    description: "Bage dives into the world of a rogue assassin who finds redemption through unexpected alliances while navigating a treacherous underworld filled with danger."
  },
  {
    id: 9,
    title: "Tity",
    image: "/assets/tity.jpg",
    description: "Tity follows a group of unlikely heroes as they embark on an epic quest to save their world from destruction, facing challenges that test their limits and bond."
  },
  {
    id: 10,
    title: "Shot Size",
    image: "/assets/shotsize.jpg",
    description: "In Shot Size, a brilliant scientist must use their intellect and courage to avert a global catastrophe, unraveling mysteries that could change the very fabric of time."
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