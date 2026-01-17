import React from 'react';
import './Shoutouts.css';

const Shoutouts = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Product Manager',
      company: 'Tech Innovations Inc.',
      text: 'Working with this developer was an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The code quality is exceptional, and they consistently deliver on time.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      text: 'Outstanding technical skills combined with excellent communication. This developer not only writes clean, maintainable code but also provides valuable insights that improved our product architecture. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Solutions',
      text: 'A true collaborator who understands the balance between functionality and user experience. Their ability to work seamlessly with design teams and implement pixel-perfect interfaces makes them an invaluable team member.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Project Manager',
      company: 'Enterprise Systems',
      text: 'Professional, reliable, and technically proficient. This developer consistently exceeds expectations and is always willing to go the extra mile. Their problem-solving skills and proactive approach make them a standout professional.',
      rating: 5
    }
  ];

  return (
    <section id="shoutouts" className="shoutouts-section">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">Shoutouts</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          What people are saying
        </p>
        <div className="shoutouts-grid">
          {recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="shoutout-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="quote-icon">"</div>
              <p className="shoutout-text">{rec.text}</p>
              <div className="shoutout-rating">
                {[...Array(rec.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <div className="shoutout-author">
                <div className="author-info">
                  <h4 className="author-name">{rec.name}</h4>
                  <p className="author-role">{rec.role}</p>
                  <p className="author-company">{rec.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shoutouts;
