/* global React */
const { useState } = React;

window.MarketingNav = function Nav({ onSignup }) {
  return (
    <nav className="m-nav">
      <div className="m-nav-inner">
        <a className="m-brand" href="#" aria-label="SafetyLink">
          <img src="../../assets/logo-full.png" alt="SafetyLink" height="30"/>
        </a>
        <div className="m-menu">
          <a className="active">Platform</a>
          <a>Industries</a>
          <a>Experts</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>
        <div className="m-cta">
          <button className="sl-btn sl-btn--ghost">Sign in</button>
          <button className="sl-btn sl-btn--accent" onClick={onSignup}>Get a demo</button>
        </div>
      </div>
    </nav>
  );
};
