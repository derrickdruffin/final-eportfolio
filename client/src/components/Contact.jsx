import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  function validate() {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.name.trim()) newErrors.name = 'Full name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!formData.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    }
  }

  return (
    <main>
      <section>
        <h2>Contact Me</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3>Send a Message</h3>
            {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been received.</p>}
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInput} />
            {errors.name && <span className="error-msg">{errors.name}</span>}
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInput} />
            {errors.email && <span className="error-msg">{errors.email}</span>}
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleInput} />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Your Message" value={formData.message} onChange={handleInput}></textarea>
            {errors.message && <span className="error-msg">{errors.message}</span>}
            <button type="submit">Send Message</button>
          </form>
          <aside className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> druffin@my.fit.edu</p>
            <p><strong>Phone:</strong> 123-456-789</p>
            <p><strong>Location:</strong> Eglin AFB, FL</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/derrick-ruffin-a5791633a" target="_blank" rel="noreferrer">View Profile</a></p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact