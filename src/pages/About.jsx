/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our platform! We are dedicated to providing you with the best movie content available.
      </p>
      <p className="mb-4">
        Our team is passionate about films, and we strive to deliver insightful reviews, news, and updates on the latest releases.
      </p>
      <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to connect movie lovers worldwide and promote a deeper appreciation for cinema.
      </p>
      <h2 className="text-3xl font-semibold mb-2">Our Team</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Jane Doe</strong> - Founder and Chief Editor</li>
        <li><strong>John Smith</strong> - Movie Critic</li>
        <li><strong>Emily Johnson</strong> - Community Manager</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
      <p>
        Have questions or suggestions? Feel free to <a href="/contact" className="text-blue-400 underline">contact us</a>!
      </p>
    </div>
  );
};

export default About;