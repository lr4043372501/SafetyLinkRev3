/* global React */
window.MarketingPricing = function Pricing({ onSignup }) {
  const tiers = [
    {n:"Site",  p:"$249", per:"/site/month", desc:"For single-site operations getting compliant fast.",
     f:["Site-specific safety program","Unlimited inspections & audits","Bilingual training library","Email support, 1 expert call / month"],
     cta:"Start free trial", featured:false},
    {n:"Operator", p:"$199", per:"/site/month", desc:"For multi-site operators standardizing across crews.",
     f:["Everything in Site","Up to 25 sites","Custom checklists & JSAs","Phone + text expert support","API + SSO"],
     cta:"Get a demo", featured:true},
    {n:"Enterprise", p:"Custom", per:"", desc:"For large enterprises with complex regulatory footprints.",
     f:["Unlimited sites & roles","Dedicated CSP + safety pro","White-glove implementation","Custom integrations & data residency","99.95% uptime SLA"],
     cta:"Talk to sales", featured:false},
  ];
  return (
    <section className="m-pricing">
      <div className="m-section-inner">
        <span className="sl-eyebrow">Pricing</span>
        <h2 className="m-section-h2">Priced per site. No surprise overages.</h2>
        <p className="m-lede">Annual billing. Discounts for non-profits and apprenticeship programs.</p>
        <div className="m-pricing-grid">
          {tiers.map(t=>(
            <div className={"m-tier"+(t.featured?" m-tier--featured":"")} key={t.n}>
              {t.featured && <div className="m-tier-flag">Most popular</div>}
              <div className="m-tier-name">{t.n}</div>
              <div className="m-tier-price"><span className="m-tier-p">{t.p}</span><span className="m-tier-per">{t.per}</span></div>
              <p className="m-tier-desc">{t.desc}</p>
              <ul className="m-tier-feats">
                {t.f.map(x=><li key={x}><i data-lucide="check"/>{x}</li>)}
              </ul>
              <button className={"sl-btn sl-btn--lg "+(t.featured?"sl-btn--accent":"sl-btn--secondary")} onClick={onSignup}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
