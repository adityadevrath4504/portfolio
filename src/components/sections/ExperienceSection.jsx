import { memo } from 'react';
import { SectionTitle, Tags } from '../Shared';

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionTitle number="02 - Experience" title="Where I've" accent="Worked" />
        <div className="exp-block rv">
          <div className="exp-header">
            <div>
              <div className="exp-co">KastHunt</div>
              <div className="exp-role-line">
                <strong>AI/ML Developer</strong>
                <span className="pill pill-rose">Live Product</span>
                <span className="pill pill-teal">Healthcare AI</span>
              </div>
            </div>
            <div className="exp-period">2025 - Present</div>
          </div>
          <div className="exp-body">
            <p className="exp-desc">
              Working on a live ambient AI clinical scribe system for GP clinics in the US and UK. Built a <strong>FastAPI + WebSocket</strong> backend that streams real-time audio to <strong>AssemblyAI's v3 API</strong>, with structured transcript storage indexed by encounter ID. Currently implementing <strong>speaker diarisation</strong> to separate doctor and patient voices in multi-party clinical conversations. Also contributing to product strategy and healthcare AI positioning for GP clinic workflows.
            </p>
            <Tags
              tags={['FastAPI', 'WebSockets', 'AssemblyAI v3', 'Speaker Diarisation', 'Python']}
              violetTags={['NLP', 'Clinical AI', 'Healthcare AI']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ExperienceSection);
