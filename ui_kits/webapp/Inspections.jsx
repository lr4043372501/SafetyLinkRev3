/* global React */
window.WebappInspections = function Inspections({ onOpen }) {
  const rows = [
    {id:"INS-1182", site:"Bell Park · Yard 4", type:"Weekly walk", status:"warn", lbl:"In progress", date:"Apr 27", who:"R. Chen"},
    {id:"INS-1181", site:"Cedar DC · Phoenix", type:"Forklift inspection", status:"warn", lbl:"2 findings", date:"Apr 27", who:"L. Park"},
    {id:"INS-1180", site:"Cedar DC · Phoenix", type:"Daily walk", status:"green", lbl:"Closed", date:"Apr 27", who:"L. Park"},
    {id:"INS-1179", site:"Harbor Health · ICU", type:"PPE audit", status:"green", lbl:"Closed", date:"Apr 26", who:"A. Diaz"},
    {id:"INS-1178", site:"Bell Park · Yard 2", type:"Weekly walk", status:"green", lbl:"Closed", date:"Apr 26", who:"R. Chen"},
    {id:"INS-1175", site:"Apex Mfg · Line 3", type:"Lockout / tagout", status:"danger", lbl:"Violation", date:"Apr 25", who:"M. Ortega"},
    {id:"INS-1170", site:"Northwind · I-70", type:"JSA review", status:"info", lbl:"In review", date:"Apr 23", who:"J. Singh"},
  ];
  return (<>
    <div className="page-h">
      <div><h2>Inspections</h2><p>All audits, walks, and JSAs across Cedar Logistics.</p></div>
      <div style={{display:'flex',gap:8}}>
        <button className="sl-btn sl-btn--secondary"><i data-lucide="filter"/>Filters</button>
        <button className="sl-btn sl-btn--accent"><i data-lucide="plus"/>New inspection</button>
      </div>
    </div>
    <div style={{display:'flex',gap:8,marginBottom:14,flexWrap:'wrap'}}>
      <span className="sl-badge sl-badge--ink" style={{padding:'6px 12px'}}>All · 142</span>
      <span className="sl-badge sl-badge--warn" style={{padding:'6px 12px'}}>Open · 14</span>
      <span className="sl-badge sl-badge--danger" style={{padding:'6px 12px'}}>Findings · 3</span>
      <span className="sl-badge sl-badge--green" style={{padding:'6px 12px'}}>Closed · 125</span>
    </div>
    <div className="card">
      <div className="bd bd--p0">
        <table className="t">
          <thead><tr><th>Site / Type</th><th>Status</th><th>Inspector</th><th>Date</th><th></th></tr></thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.id} onClick={()=>onOpen(r)} style={{cursor:'pointer'}}>
                <td><div className="cell-name">{r.site}</div><div className="cell-sub">{r.type} · <span className="mono">{r.id}</span></div></td>
                <td><span className={"sl-badge sl-badge--"+r.status}>{r.lbl}</span></td>
                <td>{r.who}</td>
                <td className="mono">{r.date}</td>
                <td><i data-lucide="chevron-right" style={{color:'var(--sl-fg-subtle)',width:18,height:18}}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>);
};

window.WebappTraining = function Training() {
  const items = [
    {t:"Lockout / tagout", c:"29 CFR 1910.147", w:7, exp:"14 days", k:"warn"},
    {t:"Fall protection", c:"29 CFR 1926.500", w:42, exp:"42 days", k:"info"},
    {t:"Hazard communication", c:"29 CFR 1910.1200", w:18, exp:"81 days", k:"info"},
    {t:"Powered industrial trucks", c:"29 CFR 1910.178", w:11, exp:"6 days", k:"warn"},
    {t:"Confined space entry", c:"29 CFR 1910.146", w:5, exp:"current", k:"green"},
    {t:"Bloodborne pathogens (EN/ES)", c:"29 CFR 1910.1030", w:24, exp:"current", k:"green"},
  ];
  return (<>
    <div className="page-h">
      <div><h2>Training</h2><p>Recerts, microlearning, and proof-of-completion.</p></div>
      <button className="sl-btn sl-btn--accent"><i data-lucide="plus"/>Assign module</button>
    </div>
    <div className="tr-grid">
      {items.map(i=>(
        <div className="tr-card" key={i.t}>
          <div className="tr-icon"><i data-lucide="book-open"/></div>
          <h4>{i.t}</h4>
          <p style={{fontFamily:'var(--sl-font-mono)',fontSize:11}}>{i.c}</p>
          <div className="kv" style={{paddingTop:8}}><span>Workers enrolled</span><span>{i.w}</span></div>
          <div className="kv"><span>Next recert</span><span><span className={"sl-badge sl-badge--"+i.k}>{i.exp}</span></span></div>
        </div>
      ))}
    </div>
  </>);
};

window.WebappSettings = function Settings() {
  return (<>
    <div className="page-h"><div><h2>Settings</h2><p>Cedar Logistics workspace.</p></div></div>
    <div className="card"><div className="bd">
      <div className="set-row">
        <div><h4>Workspace name</h4><p>Visible in audit exports.</p></div>
        <div><input type="text" defaultValue="Cedar Logistics"/></div>
      </div>
      <div className="set-row">
        <div><h4>Default language</h4><p>Used as the fallback when worker preference is unset.</p></div>
        <div><select defaultValue="EN"><option value="EN">English</option><option>Spanish (Español)</option><option>Bilingual (EN + ES)</option></select></div>
      </div>
      <div className="set-row">
        <div><h4>Audit log retention</h4><p>OSHA 300 logs are kept for 5 years regardless.</p></div>
        <div><select defaultValue="7"><option value="3">3 years</option><option value="5">5 years</option><option value="7">7 years</option><option>Indefinite</option></select></div>
      </div>
      <div className="set-row">
        <div><h4>Expert support</h4><p>OSHA-authorized humans on call 7am – 7pm in every U.S. timezone.</p></div>
        <div><span className="sl-badge sl-badge--green"><span className="sl-dot"/>Operator plan · phone + text included</span></div>
      </div>
      <div className="set-row">
        <div><h4>Single sign-on</h4><p>SAML 2.0 via Okta, Azure AD, Google Workspace.</p></div>
        <div><button className="sl-btn sl-btn--secondary"><i data-lucide="shield-check"/>Configure SSO</button></div>
      </div>
    </div></div>
  </>);
};
