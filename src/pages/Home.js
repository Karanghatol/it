import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, TrendingUp, Code, Database, Shield, Cpu } from 'lucide-react';
import './Home.css';
import { Users, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '2,500+' },
    { icon: BookOpen, label: 'Courses Offered', value: '45+' },
    { icon: Award, label: 'Industry Awards', value: '25+' },
    { icon: TrendingUp, label: 'Employment Rate', value: '95%' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Master programming languages and development frameworks with hands-on projects.',
      colorClass: 'bg-gradient-software'
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Analyze complex data sets and build predictive models using cutting-edge tools.',
      colorClass: 'bg-gradient-data'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect digital assets and learn ethical hacking techniques from industry experts.',
      colorClass: 'bg-gradient-cyber'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Explore artificial intelligence and build intelligent systems for the future.',
      colorClass: 'bg-gradient-ai'
    },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center position-relative text-center text-white">
        <div className="hero-bg"></div>
        <div className="container position-relative z-2">
          <h1 className="display-3 fw-bold lh-base">
            PDEA’s College{' '}
            <span className="text-gradient">of Engineering</span>
          </h1>
          <p className="lead mx-auto hero-description">
            Join our world-class IT Department where innovation meets education.
            Discover cutting-edge programs designed to prepare you for tomorrow's technology challenges.
          </p>
          <div className="d-flex justify-content-center gap-3 pt-4 flex-wrap">
            <Link to="/programs" className="btn btn-primary btn-lg d-flex align-items-center gap-2 shadow-sm btn-gradient">
              Explore Program <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="scroll-indicator d-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="scroll-container border rounded-pill d-flex justify-content-center">
            <div className="scroll-dot rounded-pill"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center gy-4">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="col-6 col-lg-3">
                <div className="stat-box p-3 rounded shadow-sm d-inline-flex align-items-center justify-content-center mb-3 mx-auto">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="display-6 fw-bold">{value}</h3>
                <p className="text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold">People Placed, Alumni & Companies for Placement</h2>
      <p className="text-muted fs-5 mx-auto" style={{ maxWidth: 600 }}>
        Our students have been placed in top companies worldwide, supported by a strong alumni network.
      </p>
    </div>

    <div className="row gy-4">
      {/* People Placed Card */}
      <div className="col-12 col-md-4">
        <div className="placement-card p-4 rounded shadow-sm bg-white h-100 d-flex flex-column">
          <Users size={48} className="text-primary mb-3 align-self-center" />
          <h3 className="fw-bold text-center">2,500+ Students Placed</h3>
          <p className="text-muted text-center flex-grow-1">
            Over 2,500 students successfully placed across diverse industries in the last 5 years.
          </p>
          <div className="text-center mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg"
              alt="Google"
              className="placement-logo"
              loading="lazy"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="placement-logo"
              loading="lazy"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
              alt="Apple"
              className="placement-logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Alumni Card */}
      <div className="col-12 col-md-4">
        <div className="placement-card p-4 rounded shadow-sm bg-white h-100 d-flex flex-column">
          <Award size={48} className="text-primary mb-3 align-self-center" />
          <h3 className="fw-bold text-center">Strong Alumni Network</h3>
          <p className="text-muted text-center flex-grow-1">
            Our alumni are leaders in their fields, offering mentorship and support to current students.
          </p>
          <div className="alumni-list mt-3">
            <ul>
              <li><strong>Rahul Mehta</strong> - Software Engineer at Google</li>
              <li><strong>Anjali Rao</strong> - Data Scientist at Amazon</li>
              <li><strong>Vikram Singh</strong> - Cybersecurity Expert at Cisco</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Companies Card */}
      <div className="col-12 col-md-4">
        <div className="placement-card p-4 rounded shadow-sm bg-white h-100 d-flex flex-column">
          <TrendingUp size={48} className="text-primary mb-3 align-self-center" />
          <h3 className="fw-bold text-center">Top Companies Hiring</h3>
          <p className="text-muted text-center flex-grow-1">
            We collaborate with industry leaders for excellent placement opportunities.
          </p>
          <div className="text-center mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="placement-logo"
              loading="lazy"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/IBM_logo.svg"
              alt="IBM"
              className="placement-logo"
              loading="lazy"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Accenture.svg"
              alt="Accenture"
              className="placement-logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-5 text-center text-white cta-section">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="mb-4 lead mx-auto" style={{ maxWidth: 600 }}>
            Join thousands of students who have launched successful careers in technology. Your future in IT starts here.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/programs" className="btn btn-light btn-lg d-flex align-items-center gap-2 shadow-sm btn-cta">
              View All Program <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
