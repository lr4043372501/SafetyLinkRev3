/* global React */
window.MarketingFeatures = function Features() {
  const items = [
    {icon:"clipboard-check", t:"Site-specific programs", b:"Walk-throughs, JSAs, and safety plans tailored to your equipment, hazards, and crews. No generic templates."},
    {icon:"users", t:"Bilingual by default", b:"Every checklist, training module, and toolbox talk ships in English and Spanish, reviewed by native bilingual safety pros."},
    {icon:"phone-call", t:"OSHA-authorized experts on call", b:"Real humans you can text or call when an inspector shows up or an incident happens. 7am – 7pm in every U.S. timezone."},
    {icon:"camera", t:"Field-first inspections", b:"Tap, photograph, sign. Works offline on tablets, phones, and ruggedized devices. Designed for hard hats and gloves."},
    {icon:"bar-chart-3", t:"Audit-ready in one click", b:"Every finding, photo, signature, and corrective action lives in a tamper-evident audit log. Export to PDF on demand."},
    {icon:"book-open", t:"Training that sticks", b:"Microlearning, recerts, and proof-of-completion. Workers train on the device they already carry."},
  ];
  return (
    <section className="m-features">
      <div className="m-section-inner">
        <span className="sl-eyebrow">Why SafetyLink</span>
        <h2 className="m-section-h2">Compliance that extends to every worker, every shift, every site.</h2>
        <div className="m-features-grid">
          {items.map(f => (
            <div className="m-feature" key={f.t}>
              <div className="m-feature-icon"><i data-lucide={f.icon}/></div>
              <h3 className="m-feature-t">{f.t}</h3>
              <p className="m-feature-b">{f.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
