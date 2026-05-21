import { memo } from 'react';
import { projects } from '../../data/portfolio';
import { SectionTitle, Tags } from '../Shared';

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionTitle number="03 - Projects" title="Things I've" accent="Built" />
        <div className="proj-grid">
          {projects.map((project) => (
            <div className={`pcard rv ${project.wide ? 'wide' : ''}`} key={project.name}>
              <div>
                {project.live && <div className="ptag-live">Live Product</div>}
                <div className="pnum">{project.number}</div>
                <div className="pname">{project.name}</div>
                <p className="pdesc">{project.description}</p>
                <Tags tags={project.tags} violetTags={project.violetTags} />
              </div>
              {project.visual && (
                <div className="pvisual">
                  🩺
                  <span>{project.visual}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProjectsSection);
