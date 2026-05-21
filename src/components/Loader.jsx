import { memo, useEffect, useState } from 'react';

function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const step = current < 72 ? 7 : current < 92 ? 3 : 1;
        return Math.min(current + step, 100);
      });
    }, 85);

    return () => {
      window.clearInterval(interval);
      document.body.classList.remove('is-loading');
    };
  }, []);

  useEffect(() => {
    if (progress !== 100) return undefined;
    const timeout = window.setTimeout(() => {
      setHidden(true);
      document.body.classList.remove('is-loading');
    }, 320);
    return () => window.clearTimeout(timeout);
  }, [progress]);

  return (
    <div className={`site-loader ${hidden ? 'is-hidden' : ''}`} aria-label="Loading portfolio">
      <div className="loader-scan" />
      <div className="loader-panel">
        <div className="loader-kicker">Initializing clinical AI portfolio</div>
        <div className="loader-title">
          <span>Loading</span>...
        </div>
        <div className="loader-percent">{progress}%</div>
        <div className="loader-bar" aria-hidden="true">
          <div className="loader-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-meta" aria-hidden="true">
          {['FastAPI', 'NLP', 'Clinical AI', 'ML Systems'].map((chip) => (
            <span className="loader-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Loader);
