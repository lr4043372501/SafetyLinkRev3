/* global React */
window.WebappDashboard = function Dashboard({ onOpenInspection }) {
  const kpis = [
    {l:"Open findings", n:"3", t:"-2 vs last week", k:"down"},
    {l:"Compliance rate", n:"96.4%", t:"+1.2 pts", k:"up"},
    {l:"Inspections this week", n:"28", t:"+4", k:"up"},
    {l:"Trainings expiring", n:"7", t:"action needed", k:"down"},
  ];
  const inspections = [
    {id:"INS-1182", site:"Bell Park · Yard 4", type:"Weekly walk", status:"green", lbl:"On track", date:"Today, 09:14", who:"R. Chen"},
    {id:"INS-1181", site:"Cedar DC · Phoenix", type:"Forklift inspection", status:"warn", lbl:"2 findings", date:"Today, 08:02", who:"L. Park"},
    {id:"INS-1179", site:"Harbor Health · ICU", type:"PPE audit", status:"green", lbl:"Closed", date:"Yesterday", who:"A. Diaz"},
    {id:"INS-1175", site:"Apex Mfg · Line 3", type:"Lockout / tagout", status:"danger", lbl:"Violation", date:"Yesterday", who:"M. Ortega"},
    {id:"INS-1170", site:"Northwind · I-70", type:"JSA review", status:"info", lbl:"In review", date:"2 days ago", who:"J. Singh"},
  ];
  const feed = [
    {ico:"check-circle", k:"ok", t:"Inspection INS-1179 closed", m:"Harbor Health · 14 items, 0 findings · 32 min ago"},
    {ico:"alert-triangle", k:"warn", t:"7 lockout/tagout trainings expiring", m:"29 CFR 1910.147 · schedule recerts before May 11"},
    {ico:"phone-call", k:"info", t:"Expert call with J. Reyes scheduled", m:"Tomorrow, 10:30 PT · 30 min · re: Apex Line 3"},
    {ico:"upload-cloud", k:"info", t:"24 photos synced from tablet #04", m:"Bell Park · INS-1182"},
  ];
  return (<>
    <div className="page-h">
      <div>
        <h2>Good morning, Marisol</h2>
        <p>Cedar Logistics · 11 sites · Pacific timezone</p>
      </div>
      <div style={{display:'flex',gap:8}}>
        <button className="sl-btn sl-btn--secondary"><i data-lucide="download"/>Export audit log</button>
        <button className="sl-btn sl-btn--primary"><i data-lucide="phone-call"/>Talk to an expert</button>
      </div>
    </div>
    <div className="kpis">
      {kpis.map(k=>(
        <div className="kpi" key={k.l}>
          <div className="kpi-l">{k.l}</div>
          <div className="kpi-n">{k.n}</div>
          <div className={"kpi-trend "+(k.k==='down'?'down':'')}><i data-lucide={k.k==='down'?'trending-down':'trending-up'}/>{k.t}</div>
        </div>
      ))}
    </div>
    <div className="dash-grid">
      <div className="card">
        <div className="hd"><h3>Recent inspections</h3><a className="sl-btn sl-btn--ghost">View all</a></div>
        <div className="bd bd--p0">
          <table className="t">
            <thead><tr><th>Site / Type</th><th>Status</th><th>Inspector</th><th>When</th><th></th></tr></thead>
            <tbody>
              {inspections.map(r=>(
                <tr key={r.id} onClick={()=>onOpenInspection(r)} style={{cursor:'pointer'}}>
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
      <div className="card">
        <div className="hd"><h3>Activity</h3></div>
        <div className="bd bd--p0">
          <div className="feed">
            {feed.map((f,i)=>(
              <div className="feed-item" key={i}>
                <div className={"feed-ico "+f.k}><i data-lucide={f.ico}/></div>
                <div><div className="feed-t">{f.t}</div><div className="feed-m">{f.m}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>);
};
