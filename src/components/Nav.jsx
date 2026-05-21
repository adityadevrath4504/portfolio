import { memo } from 'react';
import { navItems } from '../data/portfolio';

function Nav({ activeSection }) {
  return (
    <nav>
      <div className="nav-brand">
        AD<span>_</span>
      </div>
      <ul className="nav-menu">
        {navItems.map(([label, href]) => (
          <li key={href}>
            <a className={`${label === 'Contact' ? 'nav-cta ' : ''}${activeSection && href === `#${activeSection}` ? 'is-active' : ''}`} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(Nav);
