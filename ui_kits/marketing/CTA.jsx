/* global React */
window.MarketingCTA = function CTA({ onSignup }) {
  return (
    <section className="m-cta-band">
      <div className="m-cta-inner">
        <h2 className="m-cta-h2">Ready to make your next OSHA visit boring?</h2>
        <p className="m-cta-p">Walk us through one site. We&rsquo;ll show you what compliant looks like in 30 minutes.</p>
        <div className="m-cta-actions">
          <button className="sl-btn sl-btn--accent sl-btn--lg" onClick={onSignup}>Book a demo</button>
          <button className="sl-btn sl-btn--ghost-on-dark sl-btn--lg">Talk to an expert</button>
        </div>
      </div>
    </section>
  );
};

window.MarketingFooter = function Footer() {
  const cols = [
    ["Platform",["Inspections","Training","Programs","Experts","Mobile app"]],
    ["Industries",["Construction","Manufacturing","Logistics","Healthcare","Energy"]],
    ["Resources",["Customer stories","OSHA library","Toolbox talks","Help center","API docs"]],
    ["Company",["About","Careers","Press","Security","Contact"]],
  ];
  return (
    <footer className="m-footer">
      <div className="m-section-inner m-footer-grid">
        <div className="m-footer-brand">
          <div className="m-brand m-brand--light"><img src="../../assets/logo-full-white.png" alt="SafetyLink" height="28"/></div>
          <p>OSHA compliance, on call. Built for the field.</p>
        </div>
        {cols.map(([h,items])=>(
          <div key={h}>
            <div className="m-footer-h">{h}</div>
            <ul>{items.map(x=><li key={x}><a>{x}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="m-footer-base">
        <span>&copy; 2026 SafetyLink, Inc.</span>
        <span>SOC 2 Type II &middot; HIPAA-aligned</span>
        <span>Privacy &middot; Terms &middot; DPA</span>
      </div>
    </footer>
  );
};
