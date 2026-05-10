// Contact.jsx
// Contact page with form validation and backend integration
import React, { useState } from 'react'
import api from '../services/api'
import Card from '../components/ui/Card/Card'
import CardBody from '../components/ui/Card/CardBody'
import CardHeader from '../components/ui/Card/CardHeader'
import Button from '../components/ui/Button'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

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

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      try {
        await api.post('/api/contact', {
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setErrors({})
        setServerError('')
      } catch {
  setServerError('There was an error sending your message. Please try again.')
}
    }
  }

  return (
    <main>
      <section>
        <h2>Contact Me</h2>
        <div className="contact-container">
          <Card className="contact-card">
            <CardHeader title="Send a Message" />
            <CardBody>
              {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been received.</p>}
              {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                <Button type="submit" label="Send Message" className="btn-primary" />
              </form>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardHeader title="Contact Information" />
            <CardBody>
              <p><strong>Email:</strong> druffin@my.fit.edu</p>
              <p><strong>Phone:</strong> 123-456-789</p>
              <p><strong>Location:</strong> Eglin AFB, FL</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/derrick-ruffin-a5791633a?trk=people-guest_people_search-card" target="_blank" rel="noreferrer">View Profile</a></p>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default Contact