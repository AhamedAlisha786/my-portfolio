import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-form-container card">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Thank you for reaching out!</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology!</p>
            <div className="social-links">
              <a href="https://github.com/alisha" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💼</span>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/shaik-ahamed-alisha-9a9295252" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">🔗</span>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:alishapentusaheb@gmail.com" className="social-link">
                <span className="social-icon">📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
