import { memo } from 'react';
import { secondarySkillBlocks, skillBlocks } from '../../data/portfolio';
import { SectionTitle, SkillBlock } from '../Shared';

function SkillsSection() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionTitle number="04 - Skills" title="My" accent="Toolkit" />
        <div className="skills-grid rv" style={{ marginBottom: '1.4rem' }}>
          {skillBlocks.map((block) => (
            <SkillBlock block={block} key={block.title} />
          ))}
        </div>
        <div className="skills-grid-2 rv">
          {secondarySkillBlocks.map((block) => (
            <SkillBlock block={block} key={block.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
