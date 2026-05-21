import { memo } from 'react';

function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid rv">
          <div>
            <div className="sec-num">06 - Contact</div>
            <h2 className="ch">
              Let's Build
              <br />
              <span className="grd">Something Real.</span>
            </h2>
            <p className="csub">Open to healthcare AI collaborations, ML engineering roles, and opportunities where AI creates real clinical impact. Reach out on any platform below.</p>
          </div>
          <div className="clinks">
            <a
              href="https://www.linkedin.com/in/aditya-devrath-9a8a6b275?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="clink"
            >
              <div className="clink-icon">💼</div>
              <div>
                <span className="clink-label">LinkedIn</span>
                <span className="clink-val">Aditya Devrath</span>
              </div>
            </a>
            <a href="mailto:adityadevrath5@gmail.com" className="clink">
              <div className="clink-icon">✉️</div>
              <div>
                <span className="clink-label">Email</span>
                <span className="clink-val">adityadevrath5@gmail.com</span>
              </div>
            </a>
            <a href="https://github.com/adityadevrath4504" target="_blank" rel="noreferrer" className="clink">
              <div className="clink-icon">⌘</div>
              <div>
                <span className="clink-label">GitHub</span>
                <span className="clink-val">github.com/adityadevrath4504</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactSection);
