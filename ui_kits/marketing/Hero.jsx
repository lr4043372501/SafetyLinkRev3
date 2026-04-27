/* global React */
window.MarketingHero = function Hero({ onSignup }) {
  return (
    <section className="m-hero">
      <div className="m-hero-bg"/>
      <div className="m-hero-inner">
        <div className="m-hero-copy">
          <span className="sl-eyebrow" style={{color:"var(--sl-green-400)"}}>OSHA compliance, on call</span>
          <h1 className="m-hero-h1">Stop chasing OSHA paperwork.<br/>Start running a safer site.</h1>
          <p className="m-hero-lede">Site-specific safety programs, bilingual training, and OSHA-authorized experts &mdash; in one calm workspace.</p>
          <div className="m-hero-actions">
            <button className="sl-btn sl-btn--accent sl-btn--lg" onClick={onSignup}>Get a demo</button>
            <button className="sl-btn sl-btn--ghost-on-dark sl-btn--lg">See pricing</button>
          </div>
          <div className="m-hero-meta">
            <span><i data-lucide="shield-check"/> SOC 2 Type II</span>
            <span><i data-lucide="hard-hat"/> 12,000+ sites</span>
            <span><i data-lucide="languages"/> EN / ES native</span>
          </div>
        </div>
        <div className="m-hero-card">
          <div className="m-hero-card-head">
            <span className="sl-badge sl-badge--green"><span className="sl-dot"/>Live · Yard 4</span>
            <span className="sl-mono">INS-1182</span>
          </div>
          <div className="m-hero-card-title">Weekly walk · Bell Park</div>
          <div className="m-hero-card-rows">
            {[
              ["check-circle","Fall protection","Compliant","ok"],
              ["check-circle","PPE distribution","Compliant","ok"],
              ["alert-triangle","Lockout / tagout · 2 findings","Open","warn"],
              ["check-circle","Forklift inspection","Compliant","ok"],
            ].map(([icon,t,s,k],i)=>(
              <div className="m-hero-row" key={i}>
                <i data-lucide={icon} className={"m-row-ico m-row-ico--"+k}/>
                <span className="m-row-t">{t}</span>
                <span className={"sl-badge sl-badge--"+(k==='ok'?'green':'warn')}>{s}</span>
              </div>
            ))}
          </div>
          <div className="m-hero-card-foot">
            <span className="sl-mono">12 / 14 complete</span>
            <span className="m-progress"><span className="m-progress-fill" style={{width:"86%"}}/></span>
          </div>
        </div>
      </div>
    </section>
  );
};
