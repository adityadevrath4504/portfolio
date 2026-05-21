import { memo } from 'react';
import { SectionTitle } from '../Shared';

function EducationSection() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionTitle number="05 - Education" title="Where I" accent="Studied" />
        <div className="edu-card rv">
          <div className="edu-icon">🎓</div>
          <div>
            <div className="edu-deg">B.Tech - Computer Science & Engineering</div>
            <div className="edu-uni">University Institute of Technology (UIT), Shimla</div>
            <div className="edu-meta">2022 - 2026 &nbsp;·&nbsp; Himachal Pradesh, India &nbsp;·&nbsp; Specialisation: AI / ML</div>
          </div>
          <div className="edu-badge">
            <strong>2026</strong>
            Graduating
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(EducationSection);
