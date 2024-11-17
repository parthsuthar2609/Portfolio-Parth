import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      const errorData = await response.json();
      alert(`Failed to submit the form: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please check the server.');
  }
};



  return (

    <section className="bg-black text-white py-12 px-4 font-[Audiowide] animate-fade-in-slow">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-teal-400 text-6xl font-bold mb-8">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-black p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-teal-400 text-4xl mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400 animate-slideLeft"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-teal-400  mb-2 text-4xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400 animate-slideLeft"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-teal-400 text-4xl mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400 animate-slideLeft"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-md text-4xl transition duration-300 animate-slideLeft"
          >
            Send Message
          </button>
        </form>
      </div>

    </section>

  );
};

export default Contact;
