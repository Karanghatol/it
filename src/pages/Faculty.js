import React from 'react';
import './Faculty.css';  

const faculties = [
  {
    name: 'Prof. Amol Bapurao Gadewar',
    designation: 'Asst. Professor, C.E.O.',
    qualification: 'M. Tech. Computer, B. E. Computer Science & Engg.',
    email: 'abgadewar@yahoo.com',
    experienceTeaching: 20,
    experienceIndustry: 0,
    expertArea: 'Operating System, Information and cyber security',
    researchProjects: 1,
    subjectsTaught: 'Information & Cyber Security, Distributed System, Operating System, WET',
    memberships: 'ISTE',
    journalPublications: { international: 3, national: 2 }
  },
  {
    name: 'Prof. Dr. Deepali Sandeep Hirolikar',
    designation: 'Asst. Professor, HOD, NAAC I/C',
    qualification: 'Ph.D, M. E. I.T., B. E. Computer Science Engg.',
    email: 'hirolikar.ds@gmail.com',
    experienceTeaching: 18,
    experienceIndustry: 0,
    expertArea: 'Object Modeling, Software Testing',
    researchProjects: 0,
    subjectsTaught: 'Fundamental of Data Structure, Data Structure Fil System, Data Structure, system Programing, Software Modelling Designs, Software Engineering',
    memberships: 'ISTE',
    journalPublications: { international: 5, national: 3 }
  },
  {
    name: 'Prof. Shalu S. Saraswat',
    designation: 'Asst. Professor',
    qualification: 'M. Tech. Computer Science, B. E. Computer Science Engineering',
    email: 'shalu.saraswat@gmail.com',
    experienceTeaching: 15,
    experienceIndustry: 2,
    expertArea: 'Computer Science',
    researchProjects: 0,
    subjectsTaught: 'Object oriented Programing, Database Management System, Logic Design Computer Organisation, Processor Architecture, Theory of Computation, Software Testing And Quality Assurance, COMPILER, SOFT SKILL',
    memberships: '',
    journalPublications: { international: 2, national: 2 }
  },
  {
    name: 'Prof. Manisha Amit Gade',
    designation: 'Asst. Professor',
    qualification: 'ME(IT)',
    email: 'manishagade23@gmail.com',
    experienceTeaching: 14,
    experienceIndustry: 1.5,
    expertArea: 'Solaris',
    researchProjects: 0,
    subjectsTaught: 'DSA, ADBMS',
    memberships: '',
    journalPublications: { international: 2, national: 2 }
  },
  {
    name: 'Prof. Raghunath M. Kawale',
    designation: 'Asst. Professor, DSE Admission I/C, FC I/C',
    qualification: 'Ph.D.(Pursuing), M. E. Computer Engineering, B. E. Information Technology',
    email: 'raghunath.kawale@gmail.com',
    experienceTeaching: 15,
    experienceIndustry: 0,
    expertArea: 'Wireless Networking, WSN, MANET',
    researchProjects: 0,
    subjectsTaught: 'Business Analytics Intelligence, Ubiquitous Computing, Internet And Web Programming, CNT, Basics of Computer Networking, FCCN, Computer Organisation Architecture, Human Computer Interaction',
    memberships: 'ISTE',
    journalPublications: { international: 3, national: 2 }
  },
  {
    name: 'Mrs. Shubhangi Sagar Divekar',
    designation: 'Asst. Professor',
    qualification: 'ME Computer Science',
    email: 'Shubhangishitole95@gmail.com',
    experienceTeaching: 4,
    experienceIndustry: 1,
    expertArea: 'Web application Development, OOP, Data Science and Machine Learning',
    researchProjects: 1,
    subjectsTaught: 'Data Structure, Object Oriented, Internet Web Programming, Web Application Development, Machine Learning, Deep Learning, Data Science And Big Data Analytics, Software Engineering, Internet Of things',
    memberships: '',
    journalPublications: { international: 1, national: 0 }
  },
  {
    name: 'Miss. Nutan Navnath Phalke',
    designation: 'Asst. Professor',
    qualification: 'M.E. Computer',
    email: 'nutan.phalke@gmail.com',
    experienceTeaching: 4,
    experienceIndustry: 0.6,
    expertArea: 'Python',
    researchProjects: 0,
    subjectsTaught: 'Deep Learning, Programming and Problem Solving, System Programming, Distributed System',
    memberships: 'ISTE',
    journalPublications: { international: 0, national: 0 }
  },
  {
    name: 'Prof. Priyanka A Kaurav',
    designation: 'Asst. Professor',
    qualification: 'M.tech (IT), B.E (IT)',
    email: 'Kaurav.priyanka31@gmail.com',
    experienceTeaching: 2,
    experienceIndustry: 2,
    expertArea: 'Software Testing, Java, SQL, ADBMS, MongoDB',
    researchProjects: 0,
    subjectsTaught: 'Software Testing, Information Storage Retrieval, Advanced Database Management System, Software Project Management, Object Oriented Programming, Advanced Database Management System',
    memberships: 'NA',
    journalPublications: { international: 1, national: 1 }
  },
  {
    name: 'Prof. Shikha A Jain',
    designation: 'Asst. Professor',
    qualification: 'M.Tech',
    email: 'shikha01jain@gmail.com',
    experienceTeaching: 3,
    experienceIndustry: 1,
    expertArea: 'Logic Design, VLSI, Data Science',
    researchProjects: 0,
    subjectsTaught: 'Microprocessor, Logic Design Computer Organisation, Processor Architecture, Wireless Communications, SPM',
    memberships: '',
    journalPublications: { international: 2, national: 2 }
  },
  {
    name: 'Prof. Ayushi Amit Yadav',
    designation: 'Asst. Professor',
    qualification: 'M.Tech(CS)',
    email: 'ayushiyadav1194@gmail.com',
    experienceTeaching: 1,
    experienceIndustry: 0,
    expertArea: 'Machine Learning',
    researchProjects: 0,
    subjectsTaught: 'Machine Learning, Blockchain Technology, HCI, BCN',
    memberships: '',
    journalPublications: { international: 0, national: 0 }
  }
];

const Faculties = () => {
  return (
    <div className="faculty-page">
    <div className="pt-5 bg-white">
      <section className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">List of Faculties</h2>
          <p className="text-muted">Meet our dedicated and expert faculty members.</p>
        </div>
        <div className="row g-4">
          {faculties.map((faculty, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm h-100 p-3">
                {/* Image placeholder */}
                <div className="faculty-img-placeholder mb-3 text-center" style={{ height: '150px', backgroundColor: '#ddd', borderRadius: '8px', lineHeight: '150px', color: '#666' }}>
                  Image not available
                </div>
                <h5>{faculty.name}</h5>
                <p className="mb-1"><strong>Designation:</strong> {faculty.designation}</p>
                <p className="mb-1"><strong>Qualification:</strong> {faculty.qualification}</p>
                <p className="mb-1"><strong>Email:</strong> <a href={`mailto:${faculty.email}`}>{faculty.email}</a></p>
                <p className="mb-1"><strong>Experience:</strong> Teaching: {faculty.experienceTeaching} years, Industry: {faculty.experienceIndustry} years</p>
                <p className="mb-1"><strong>Expert Area:</strong> {faculty.expertArea}</p>
                <p className="mb-1"><strong>Research Projects Handled:</strong> {faculty.researchProjects > 0 ? faculty.researchProjects : 'Nil'}</p>
                <p className="mb-1"><strong>Subjects Taught:</strong> {faculty.subjectsTaught}</p>
                <p className="mb-1"><strong>Memberships:</strong> {faculty.memberships || 'Nil'}</p>
                <p className="mb-1"><strong>Journal Publications:</strong> International: {faculty.journalPublications.international}, National: {faculty.journalPublications.national}</p>
                {/* Academic Profile download link - assuming you will update URLs */}
                {/* <a href={faculty.academicProfileUrl} target="_blank" rel="noreferrer">Download Academic Profile</a> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ITSA Information Section */}
<section className="container my-5">
  <div className="itsa-card p-4 rounded shadow-sm">
    <h3 className="mb-3 text-primary fw-bold">Information Technology Student Association (2022–2023)</h3>
    <p><strong>Faculty Advisor:</strong> Prof. Shalu Saraswat</p>
    <ul className="itsa-list">
      <li><strong>President:</strong> Sanket Surwase</li>
      <li><strong>Vice President:</strong> Akshay Joshi, Alisha Pawar</li>
      <li><strong>Secretary:</strong> —</li>
      <li><strong>Treasurer:</strong> Manbir Singh, Siddhant Kalamkar</li>
      <li><strong>Event Manager:</strong> Sonawane Saurav, Dilip Jadhav</li>
      <li><strong>Girls Representative:</strong> Kshitija Patil</li>
      <li><strong>Coordinators:</strong> Devashish Revadkar, Siddhant Pawar / Shreyash Patil, Mukund Sutar, Shreya Gaikwad, Dhiraj Kadam, Gujrathi Sakshi, Vishal Chormalle, Suhas Pingat</li>
    </ul>
  </div>
</section>

    </div>
    </div>
  );
};

export default Faculties;
