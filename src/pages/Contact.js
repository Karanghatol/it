import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    program: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const programs = [
    'Computer Science',
    'Information Technology',
    'Data Science',
    'Cybersecurity',
    'Artificial Intelligence',
    'Mobile Development'
  ];

  const departments = [
    { name: 'General Inquiry', email: 'info@pdeacoem.org' },
    { name: 'Admissions', email: 'admissions@pdeacoem.org' },
    { name: 'Academic Advising', email: 'advising@pdeacoem.org' },
    { name: 'Student Services', email: 'services@pdeacoem.org' },
    { name: 'Career Center', email: 'careers@pdeacoem.org' },
    { name: 'Research', email: 'research@pdeacoem.org' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        program: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-5">
      {/* Hero */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">We’re here to help with admissions, inquiries, and more.</p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <div className="container my-5">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-6">
            <h2>Send us a Message</h2>
            <p className="text-muted mb-4">We’ll respond within 24 hours.</p>

            {submitted ? (
              <div className="alert alert-success">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a program</option>
                    {programs.map((prog, idx) => (
                      <option key={idx} value={prog}>{prog}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Department Contacts */}
          <div className="col-lg-6">
            <h3>Institute Contact Information</h3>
            <div className="mb-4">
              <p className="mb-1 fw-bold">Pune District Education Association's</p>
              <p className="mb-1">College of Engineering, Manjari (Bk)</p>
              <p className="mb-1">Hadapsar - Wagholi Road, Taluka: Haveli</p>
              <p className="mb-1">Dist: Pune - 412 307</p>
              <p className="mb-1">📞 Reception: 020-26996275</p>
              <p className="mb-1">📠 Fax: 020-26996275</p>
              <p className="mb-1">📱 Mobile: 8888776206</p>
              <p className="mb-1">✉️ Email: <a href="mailto:info@pdeacoem.org">info@pdeacoem.org</a></p>
            </div>

            <h5>Other Departments</h5>
            <ul className="list-group mb-4">
              {departments.map((dept, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{dept.name}</strong>
                    <br />
                    <a href={`mailto:${dept.email}`}>{dept.email}</a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-light border rounded p-4">
              <h5 className="text-center mb-3">Find Us</h5>
              <iframe
                title="PDEA COEM Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1219304528837!2d73.97357817469533!3d18.56811876788909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c17e43e0cd3d%3A0x4fd938ce1f51cd61!2sPDEA%20College%20of%20Engineering%2C%20Manjari%20Bk%2C%20Pune!5e0!3m2!1sen!2sin!4v1721811799863!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
