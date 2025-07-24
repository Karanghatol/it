import React from 'react';
import { Award, Users, BookOpen, Globe, Target, Eye, Heart } from 'lucide-react';
import './About.css'; // custom styles (timeline, icons, etc.)

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We foster creative thinking and encourage breakthrough solutions to complex technological challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and cross-disciplinary partnerships to achieve excellence.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We maintain the highest standards in education, research, and professional development.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We prepare students to make meaningful contributions to the global technology landscape.'
    }
  ];

  const achievements = [
    { year: '1998', event: 'PDEA’s College of Engineering established at Manjari, Hadapsar' },
    { year: '2000', event: 'IT Department inaugurated with initial intake of 60 students' },
    { year: '2005', event: 'First batch of IT graduates passed out successfully' },
    { year: '2010', event: 'Established dedicated computer labs with 100+ workstations' },
    { year: '2015', event: 'Introduced advanced courses in Cloud Computing and Cybersecurity' },
    { year: '2018', event: 'Signed MoUs with leading IT companies for internships and placements' },
    { year: '2023', event: 'Launched Data Science specialization and research projects' },
  ];

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="py-5 text-white bg-hero-gradient text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">About Our Department</h1>
          <p className="lead">
            For nearly four decades, we've been at the forefront of technology education, 
            shaping the minds that will define tomorrow's digital landscape.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-box me-3">
                    <Target size={28} color="#fff" />
                  </div>
                  <h2 className="h3 fw-bold">Our Mission</h2>
                </div>
                <p className="text-muted">
                  To provide world-class education in information technology, fostering innovation, 
                  critical thinking, and ethical leadership.
                </p>
              </div>

              <div>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-box green me-3">
                    <Eye size={28} color="#fff" />
                  </div>
                  <h2 className="h3 fw-bold">Our Vision</h2>
                </div>
                <p className="text-muted">
                  To be a globally recognized leader in technology education and research, 
                  driving innovation that transforms industries and improves lives.
                </p>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students collaborating"
                className="img-fluid rounded-4 shadow"
              />
              <div className="position-absolute bottom-0 end-0 p-4 bg-gradient rounded-4 text-white translate-middle badge-box">
                <div className="fs-4 fw-bold">39 Years</div>
                <small>of Excellence</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Department Info */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">About the Department</h2>
          <p>
            In keeping with PDEA's legacy of offering new areas of specialization in engineering, the Department of Information Technology was established in 2001 with the goal of imparting expertise in cutting-edge technologies in Information Technology and Computer Sciences.
          </p>
          <p>
            The department features a vibrant, youthful, and devoted workforce with specializations in a wide range of topics.
          </p>
          <p>
            TEAM IT members all believe that IT is a tool that, when utilized correctly, can improve the quality of all operations. As a first step, a project to automate all administrative processes has been initiated, and the entire project is being carried out with the assistance of our department staff members.
          </p>
          <p>
            In the near future, the department will offer postgraduate courses (other than MS BY Research) in computer science and information technology.
          </p>
          <p>
            B.E.(Information Technology) courses are available.
          </p>
          <h3 className="mt-4">Mission</h3>
          <p>
            To generate internationally competent, high-quality computer professionals and to instill the spirit of moral values for the sake of our nation's growth.
          </p>
          <h3>Vision</h3>
          <p>
            To become a center of excellence in computer education and research, as well as to provide a platform for industrial consulting.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Core Values</h2>
          <p className="text-muted mb-5">
            These principles guide everything we do, from curriculum design to student support.
          </p>
          <div className="row g-4">
            {values.map((value, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="p-4 bg-white rounded-4 shadow text-center h-100 value-box">
                  <div className="icon-circle mx-auto mb-3">
                    <value.icon size={24} color="#fff" />
                  </div>
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="text-muted small">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Journey</h2>
          <p className="text-muted mb-5">Key milestones that shaped our department</p>
          <div className="timeline">
            {achievements.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content bg-white shadow p-3 rounded-3">
                  <h5 className="text-primary fw-bold">{item.year}</h5>
                  <p className="mb-0 text-muted">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5 text-white bg-hero-gradient">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">By the Numbers</h2>
          <p className="mb-5 text-light">Our impact speaks through these achievements</p>
          <div className="row g-4">
            <div className="col-6 col-lg-3">
              <h3 className="fw-bold">2,500+</h3>
              <p className="text-light">Active Students</p>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="fw-bold">95%</h3>
              <p className="text-light">Job Placement Rate</p>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="fw-bold">150+</h3>
              <p className="text-light">Industry Partners</p>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="fw-bold">25+</h3>
              <p className="text-light">Research Projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
