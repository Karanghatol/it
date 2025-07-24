import React from 'react';
import {
  Monitor, Wifi, Shield, Database, Cpu, Globe, Award, Users
} from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const labs = [
    {
      name: 'Advanced Computing Lab',
      capacity: '50 Students',
      equipment: 'High-performance workstations with latest processors',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      features: ['Intel i9 Processors', '32GB RAM', 'NVIDIA RTX Graphics', 'Dual 4K Monitors'],
      icon: Cpu
    },
    {
      name: 'Network Security Lab',
      capacity: '30 Students',
      equipment: 'Specialized security testing equipment and software',
      image: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg',
      features: ['Penetration Testing Tools', 'Network Analyzers', 'Security Appliances', 'Isolated Networks'],
      icon: Shield
    },
    {
      name: 'Data Science Center',
      capacity: '40 Students',
      equipment: 'Big data processing and analytics infrastructure',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg',
      features: ['Hadoop Clusters', 'GPU Computing', 'Machine Learning Servers', 'Data Visualization Tools'],
      icon: Database
    },
    {
      name: 'Innovation Hub',
      capacity: '60 Students',
      equipment: 'Collaborative workspace with modern technology',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      features: ['3D Printers', 'VR/AR Equipment', 'Prototyping Tools', 'Smart Boards'],
      icon: Globe
    }
  ];

  const resources = [
    {
      title: 'Digital Library',
      description: 'Access to over 100,000 technical books, journals, and research papers',
      icon: Database,
      stats: '100K+ Resources'
    },
    {
      title: 'High-Speed Internet',
      description: 'Gigabit fiber optic connection throughout the campus',
      icon: Wifi,
      stats: '1GB/s Speed'
    },
    {
      title: 'Cloud Computing',
      description: 'AWS and Azure cloud computing resources for student projects',
      icon: Globe,
      stats: 'Unlimited Access'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and lab access',
      icon: Users,
      stats: 'Always Available'
    }
  ];

  const achievements = [
    { metric: '15', label: 'Modern Labs', icon: Monitor },
    { metric: '500+', label: 'Workstations', icon: Cpu },
    { metric: '99.9%', label: 'Uptime', icon: Award },
    { metric: '24/7', label: 'Access', icon: Shield }
  ];

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="text-white text-center py-5 bg-primary bg-gradient">
        <div className="container">
          <h1 className="display-4 fw-bold">World-Class Facilities</h1>
          <p className="lead">Experience cutting-edge technology and modern learning environments.</p>
        </div>
      </section>

      {/* Labs Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Specialized Laboratories</h2>
            <p className="text-muted">Hands-on learning with industry-standard tech.</p>
          </div>

          <div className="row g-4">
            {labs.map((lab, index) => (
              <div className="col-lg-6" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="lab-img-container position-relative">
                    <img src={lab.image} className="card-img-top" alt={lab.name} />
                    <div className="lab-icon-container">
                      <lab.icon className="lab-icon" />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{lab.name}</h5>
                    <p className="text-muted mb-2">
                      <Users size={16} className="me-2" />
                      {lab.capacity}
                    </p>
                    <p>{lab.equipment}</p>
                    <h6>Key Features:</h6>
                    <ul className="list-unstyled">
                      {lab.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center">
                          <div className="feature-dot me-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Additional Resources</h2>
            <p className="text-muted">Support systems to enhance your learning experience.</p>
          </div>

          <div className="row g-4">
            {resources.map((resource, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card text-center p-4 h-100 shadow-sm">
                  <div className="resource-icon mx-auto mb-3">
                    <resource.icon size={32} className="text-white" />
                  </div>
                  <h5>{resource.title}</h5>
                  <p className="text-muted">{resource.description}</p>
                  <div className="fw-bold text-primary">{resource.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5 text-white bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Facility Statistics</h2>
            <p className="text-light">Numbers that showcase our excellence.</p>
          </div>

          <div className="row text-center">
            {achievements.map((item, i) => (
              <div className="col-6 col-lg-3 mb-4" key={i}>
                <div className="stat-icon mb-2">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3>{item.metric}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Safety & Accessibility</h2>
            <p className="text-muted">Secure and inclusive environment for all students.</p>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'Security',
                desc: '24/7 monitoring, access control systems, emergency protocols.',
                icon: Shield
              },
              {
                title: 'Accessibility',
                desc: 'ADA compliant with assistive technologies and services.',
                icon: Users
              },
              {
                title: 'Certified',
                desc: 'LEED Gold buildings with sustainable design.',
                icon: Award
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card text-center p-4 h-100 shadow-sm">
                  <div className="resource-icon mx-auto mb-3">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h5>{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
