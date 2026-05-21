import { memo } from 'react';

function Footer() {
  return (
    <footer>
      <p>
        © 2026 <span>Aditya Devrath</span>. Built for clinical impact.
      </p>
      <div className="flinks">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default memo(Footer);
