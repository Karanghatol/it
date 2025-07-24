import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowRight, Globe } from 'lucide-react';
import './Programs.css'; // Custom CSS for this component

const Programs = () => {
  const program = {
    id: 'it',
    title: 'Information Technology',
    degree: 'Bachelor of Science',
    duration: '4 Years',
    students: '650+',
    icon: Globe,
    colorClass: 'program-gradient-teal-green',
    description:
      'Focus on practical IT solutions, network administration, and enterprise technology management.',
    highlights: [
      'Network Administration',
      'System Integration',
      'IT Project Management',
      'Cloud Computing Solutions',
    ],
    careers: ['IT Manager', 'Network Administrator', 'Cloud Architect', 'IT Consultant'],
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  const admissionRequirements = [
    'High School Diploma or equivalent',
    'Minimum GPA of 3.0',
    'SAT/ACT scores',
    'Mathematics proficiency',
    'Letter of recommendation',
    'Personal statement',
  ];

  const requiredDocuments = [
    'Allotment Letter of CAP (for CAP candidates)',
    'SSC(STD: XTh) Mark list',
    'HSC/DIPLOMA/B. Sc. Mark list',
    'Transfer / Leaving Certificate of XII std.',
    'Proforma-I (for CAP candidates)',
    'Gap Certificate (if applicable)',
    'Caste Certificate (for Reserved Category CAP candidates)',
    'Caste Validity Certificate (for Reserved Category CAP candidates)',
    'Non-Creamy Layer Certificate valid up to 31st March 2019 (if applicable)',
    'Aadhaar card (UID Number)',
    'Nationality Certificate or Birth Certificate or Passport',
    'Domicile Certificate',
    'Passport size photograph - 03 Nos',
  ];

  const Icon = program.icon;

  return (
    <div className="min-vh-100 pt-5">
      {/* Hero Section */}
      <section className="py-5 bg-gradient-hero text-white text-center">
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Information Technology Program</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            Prepare for a dynamic career in IT with practical skills in network administration,
            cloud computing, and enterprise technology management.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="card h-100 shadow-sm program-card mx-auto" style={{ maxWidth: '900px' }}>
            <div className="position-relative overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="card-img-top img-hover-scale"
              />
              <div
                className="program-icon position-absolute top-0 start-0 m-3 rounded-3 d-flex align-items-center justify-content-center"
                style={{ width: '48px', height: '48px' }}
              >
                <div
                  className={program.colorClass + ' d-flex align-items-center justify-content-center rounded-3 w-100 h-100'}
                >
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <div
                className="program-info position-absolute bottom-0 start-0 text-white p-3 w-100"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <h5 className="card-title mb-1">{program.title}</h5>
                <small>{program.degree}</small>
              </div>
            </div>

            <div className="card-body d-flex flex-column">
              <div className="d-flex mb-3 text-muted small">
                <div className="d-flex align-items-center me-4">
                  <Clock size={16} className="me-1" />
                  <span>{program.duration}</span>
                </div>
                <div className="d-flex align-items-center">
                  <Users size={16} className="me-1" />
                  <span>{program.students} Students</span>
                </div>
              </div>

              <p className="card-text text-muted flex-grow-1">{program.description}</p>

              <div className="mb-3">
                <h6>Key Highlights:</h6>
                <ul className="list-unstyled ms-3">
                  {program.highlights.map((highlight, i) => (
                    <li key={i} className="d-flex align-items-center text-muted mb-1">
                      <span className="highlight-dot me-2"></span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h6>Career Paths:</h6>
                <div>
                  {program.careers.map((career, i) => (
                    <span key={i} className="badge bg-primary me-1 mb-1">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-auto btn btn-link text-primary d-inline-flex align-items-center p-0"
              >
                Learn More <ArrowRight size={16} className="ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Admission Requirements</h2>
              <p className="lead text-secondary mb-4">
                We welcome motivated students passionate about Information Technology.
              </p>

              <ul className="list-unstyled">
                {admissionRequirements.map((req, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-3">
                    <div className="award-icon bg-primary rounded-circle d-flex align-items-center justify-content-center me-3">
                      <Award className="text-white" size={16} />
                    </div>
                    <span className="text-secondary">{req}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn-primary mt-4 d-inline-flex align-items-center">
                Apply Now <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>

            <div className="col-lg-6 position-relative">
              <img
                src={program.image}
                alt="Students in IT program"
                className="rounded-3 shadow-lg img-fluid"
              />
              <div
                className="position-absolute bottom-0 start-0 translate-middle bg-white p-3 rounded-3 shadow"
                style={{ left: '10%', bottom: '-20px', width: '140px' }}
              >
                <div className="h2 text-primary mb-0">650+</div>
                <small className="text-muted">Total Students</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Required Documents for Maharashtra State Candidate</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th style={{ width: '10%' }}>Sr. No.</th>
                  <th>Name of Document</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocuments.map((doc, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{doc}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="fst-italic text-muted">
                    Note: Copies of all documents - 3 sets
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Program Statistics */}
      <section className="py-5 bg-gradient-hero text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Program Success</h2>
          <p className="lead mx-auto mb-5" style={{ maxWidth: '600px' }}>
            Our graduates are making their mark in the technology industry
          </p>

          <div className="row text-white">
            <div className="col-6 col-lg-3 mb-4">
              <div className="display-4 fw-bold">95%</div>
              <div className="text-secondary">Job Placement Rate</div>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <div className="display-4 fw-bold">$75K</div>
              <div className="text-secondary">Average Starting Salary</div>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <div className="display-4 fw-bold">150+</div>
              <div className="text-secondary">Industry Partners</div>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <div className="display-4 fw-bold">85%</div>
              <div className="text-secondary">Graduate Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
