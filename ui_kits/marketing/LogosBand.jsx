/* global React */
window.MarketingLogosBand = function LogosBand() {
  const logos = ["Northwind Construction","Cedar Logistics","Bell Park Yards","Harbor Health","Apex Manufacturing","Kestrel Foods"];
  return (
    <section className="m-logos">
      <div className="m-logos-inner">
        <span className="sl-eyebrow">Trusted across regulated industries</span>
        <div className="m-logos-row">
          {logos.map(l => <span key={l} className="m-logo">{l}</span>)}
        </div>
      </div>
    </section>
  );
};
