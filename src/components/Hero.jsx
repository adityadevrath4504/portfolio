import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { dataWords, rotatingLines, tickerItems } from '../data/portfolio';
import { useGalaxy } from '../hooks/useGalaxy';
import { SocialIcons } from './Shared';

const profileImage = new URL('../../WhatsApp Image 2026-01-09 at 11.53.03.jpeg', import.meta.url).href;

function Hero() {
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const heroMouseRef = useRef({ x: '50%', y: '44%', frame: 0 });

  useGalaxy(canvasRef);

  const dataTokens = useMemo(() => {
    const totalData = window.matchMedia?.('(max-width: 700px)').matches ? 7 : 10;
    return Array.from({ length: totalData }, (_, index) => ({
      text: dataWords[index % dataWords.length],
      style: {
        '--x': `${(Math.random() * 92 + 2).toFixed(2)}%`,
        '--y': `${(Math.random() * 86 + 6).toFixed(2)}%`,
        '--dx': `${(Math.random() * 54 - 27).toFixed(1)}px`,
        '--fs': `${(Math.random() * 0.22 + 0.52).toFixed(2)}rem`,
        '--dur': `${(Math.random() * 9 + 18).toFixed(2)}s`,
        '--delay': `${(Math.random() * -22).toFixed(2)}s`,
      },
    }));
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsSwitching(true);
      window.setTimeout(() => {
        setRotatingIndex((current) => (current + 1) % rotatingLines.length);
        setIsSwitching(false);
      }, 380);
    }, 3400);
    return () => window.clearInterval(interval);
  }, []);

  const handleHeroMouseMove = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroMouseRef.current.x = `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(2)}%`;
    heroMouseRef.current.y = `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(2)}%`;

    if (!heroMouseRef.current.frame) {
      heroMouseRef.current.frame = window.requestAnimationFrame(() => {
        heroRef.current?.style.setProperty('--mouse-x', heroMouseRef.current.x);
        heroRef.current?.style.setProperty('--mouse-y', heroMouseRef.current.y);
        heroMouseRef.current.frame = 0;
      });
    }
  };

  return (
    <section id="hero" ref={heroRef} onMouseMove={handleHeroMouseMove}>
      <div className="hero-cosmos" aria-hidden="true" />
      <canvas className="galaxy-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-aura" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true" />
      <div className="hero-data" aria-hidden="true">
        {dataTokens.map((token, index) => (
          <span className="data-token" style={token.style} key={`${token.text}-${index}`}>
            {token.text}
          </span>
        ))}
      </div>
      <div className="hero-streaks" aria-hidden="true" />
      <div className="hero-glass" aria-hidden="true" />
      <div className="grid-bg" />
      <div className="orb1" />
      <div className="orb2" />

      <div className="hero-left">
        <div className="photo-wrap">
          <img src={profileImage} alt="Aditya Devrath" />
        </div>

        <div className="profile-name">Aditya Devrath</div>
        <div className="profile-role-badge">AI/ML_DEVELOPER()</div>

        <div className="profile-info">
          <div className="pinfo-row">
            <span className="pinfo-key">Status</span>
            <span>Final Year · B.Tech CSE</span>
          </div>
          <div className="pinfo-row">
            <span className="pinfo-key">College</span>
            <span>UIT Shimla</span>
          </div>
          <div className="pinfo-row">
            <span className="pinfo-key">Work</span>
            <span>KastHunt · AI/ML Dev</span>
          </div>
          <div className="pinfo-row">
            <span className="pinfo-key">Domain</span>
            <span>Healthcare AI</span>
          </div>
        </div>

        <a href="#" className="btn-resume" download>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16l-4-4h2.5V4h3v8H16l-4 4zm-7 2h14v2H5v-2z" />
          </svg>
          Download Resume
        </a>
        <div className="resume-hint">Replace href="#" with your resume URL</div>
        <SocialIcons />
      </div>

      <div className="hero-right">
        <div className="hero-eyebrow">
          <div className="hero-line" />
          <div className="hero-eyebrow-text">AI/ML Developer &nbsp;·&nbsp; Healthcare AI &nbsp;·&nbsp; B.Tech CSE 2026</div>
        </div>

        <h1 className="hero-name">
          Aditya <span className="grad">Devrath</span>
        </h1>

        <p className="hero-role">
          <b>AI/ML Developer</b>
        </p>

        <p className="hero-bio">
          <span className="hero-rotator" aria-live="polite">
            <span className={`hero-rotating-line ${isSwitching ? 'is-switching' : ''}`}>{rotatingLines[rotatingIndex]}</span>
          </span>
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-teal">
            View Projects →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div className="ticker-item" key={`${item}-${index}`}>
              <span className="tdot" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
