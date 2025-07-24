// Footer.js (updated)
import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import {
  Monitor, Mail, Phone, MapPin,
  Facebook, Twitter, Linkedin, Instagram, ExternalLink,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Programs', path: '/programs' },
  ];

  const programs = [
    { name: 'Computer Science', path: '/programs#cs' },
    { name: 'Information Technology', path: '/programs#it' },
    { name: 'Data Science', path: '/programs#ds' },
    { name: 'Cybersecurity', path: '/programs#cyber' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container py-5">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-box me-3">
                <Monitor size={32} className="text-white" />
              </div>
              <div>
                <h5 className="fw-bold mb-0">PDEA’s College of Engineering, Manjari BK</h5>
                <small className="text-muted">Department of Information Technology(IT)</small>
              </div>
            </div>
            <p className="text-muted small">
              Pioneering the future of technology education with cutting-edge programs, world-class faculty, and state-of-the-art facilities.
            </p>
            <div className="d-flex gap-2">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="social-icon" aria-label={social.label}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 mb-4">
            <h6 className="fw-semibold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link d-flex align-items-center">
                    <span className="dot me-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="col-lg-2 mb-4">
            <h6 className="fw-semibold text-white mb-3">Programs</h6>
            <ul className="list-unstyled">
              {programs.map((program, idx) => (
                <li key={idx}>
                  <Link to={program.path} className="footer-link d-flex align-items-center">
                    <span className="dot me-2"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
         {/* Contact Info */}
          <div className="col-lg-3 mb-4">
            <h6 className="fw-semibold text-white mb-3">Contact Us</h6>
            <div className="d-flex align-items-start mb-3">
              <div className="icon-box me-2">
                <MapPin size={20} />
              </div>
              <small className="text-muted">
          +     Pune District Education Association's<br />
          +     College of Engineering, Manjari (Bk)<br />
          +     Hadapsar - Wagholi Road,<br />
          +     Taluka: Haveli, Dist: Pune - 412 307
              </small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="icon-box me-2">
                <Phone size={20} />
              </div>
              <small className="text-muted">
          +     020-26996275 (Reception)<br />
          +     8888776206
              </small>
            </div>
            <div className="d-flex align-items-center">
              <div className="icon-box me-2">
                <Mail size={20} />
              </div>
          -    <small className="text-muted">info@itdept.university.edu</small>
          +    <small className="text-muted">info@pdeacoem.org</small>
            </div>
          </div>


          {/* Anti-Ragging Info */}
          <div className="col-lg-2 mb-4">
            <h6 className="fw-semibold text-white mb-3">Anti-Ragging</h6>
            <p className="text-muted small mb-1">
              <strong>24x7 Helpline:</strong> 1800-180-5522<br />
              <a href="mailto:helpline@antiragging.in" className="footer-link">helpline@antiragging.in</a><br />
              <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="footer-link">
                www.antiragging.in
              </a>
            </p>

            <p className="text-muted small mb-1 mt-3">
              <strong>UGC Monitoring Agency:</strong><br />
              Centre for Youth (C4Y)<br />
              <a href="mailto:antiragging@c4yindia.org" className="footer-link">antiragging@c4yindia.org</a><br />
              <a href="https://www.c4yindia.org" target="_blank" rel="noopener noreferrer" className="footer-link">
                www.c4yindia.org
              </a>
            </p>

            <p className="text-muted small mb-1 mt-3">
              Anti-Ragging Committee (ARC) | Anti-Ragging Squad (ARS)<br />
              Ragging is a criminal offence punishable by law<br />
              As per UGC Regulations | <a href="https://www.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="footer-link">www.ugc.ac.in</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black-50 border-top border-secondary">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
          <span>© {currentYear} PDEA's College of Engineering. All rights reserved.</span>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link d-flex align-items-center">
              Accessibility <ExternalLink size={14} className="ms-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
