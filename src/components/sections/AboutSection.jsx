import { memo } from 'react';
import { SectionTitle } from '../Shared';

function AboutSection() {
  const highlights = ['Healthcare AI', 'ML Engineering', 'Clinical NLP', 'MLOps', 'Real-time AI'];
  const infoRows = [
    ['📍', 'Location', 'Shimla, Himachal Pradesh, India'],
    ['🎓', 'Education', 'B.Tech CSE - UIT Shimla, 2026'],
    ['💼', 'Current Role', 'AI/ML Developer - KastHunt'],
    ['🌍', 'Target Markets', 'US & UK GP Clinics'],
    ['🔬', 'Focus Area', 'Healthcare AI & Clinical ML'],
  ];

  return (
    <section id="about">
      <div className="wrap">
        <SectionTitle number="01 - About" title="Who I" accent="Am" />
        <div className="about-cols">
          <div className="rv">
            <p className="about-p">
              I'm <strong>Aditya Devrath</strong> - a final-year B.Tech Computer Science student at{' '}
              <strong>University Institute of Technology (UIT), Shimla</strong>, graduating in 2026.
            </p>
            <p className="about-p">
              Currently working as an <strong>AI/ML Developer</strong> on a live product at KastHunt - an ambient AI clinical scribe that captures real-time doctor-patient conversations and converts them into structured clinical notes, designed for GP clinics across the{' '}
              <strong>US and UK</strong>.
            </p>
            <p className="about-p">
              My focus is at the intersection of machine learning engineering and clinical technology - building tools that reduce physician burnout and improve how healthcare is delivered, one clinic at a time.
            </p>
            <div className="chip-row">
              {highlights.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="info-list rv">
            {infoRows.map(([icon, label, value]) => (
              <div className="info-row" key={label}>
                <div className="info-icon">{icon}</div>
                <div>
                  <span className="info-label">{label}</span>
                  <span className="info-val">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
