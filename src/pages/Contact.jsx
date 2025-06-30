import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState(() => ({
    name: localStorage.getItem('contactName') || '',
    email: localStorage.getItem('contactEmail') || '',
    message: localStorage.getItem('contactMessage') || '',
  }));

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem(`contact${name.charAt(0).toUpperCase() + name.slice(1)}`, value);
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setTimeout(() => {
      setStatus('Message sent successfully! Thank you 🍰');
      localStorage.removeItem('contactName');
      localStorage.removeItem('contactEmail');
      localStorage.removeItem('contactMessage');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="contact-page">
      <h1>Get in Touch 🍓</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message ✉️</button>
      </form>
      {status && <p style={{ marginTop: '1rem', color: status.includes('successfully') ? 'green' : 'red' }}>{status}</p>}
    </div>
  );
};

export default Contact;
