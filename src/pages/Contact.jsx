/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We  love to hear from you! Please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded bg-gray-700"
            placeholder="Your Name"
          />
        </label>
        <label className="mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded bg-gray-700"
            placeholder="Your Email"
          />
        </label>
        <label className="mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full rounded bg-gray-700"
            placeholder="Your Message"
            rows="5"
          />
        </label>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;