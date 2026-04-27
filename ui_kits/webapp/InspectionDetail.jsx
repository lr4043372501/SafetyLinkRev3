/* global React */
const { useState: useStateID } = React;

window.WebappInspectionDetail = function InspectionDetail({ insp, onBack }) {
  const init = [
    {g:"Fall protection", items:[
      {t:"Guardrails installed at all open edges ≥ 6 ft", m:"29 CFR 1926.501(b)(1)", c:true},
      {t:"Personal fall arrest systems inspected for wear", m:"PFAS · daily check", c:true},
      {t:"Skylights covered or guarded", m:"1926.501(b)(4)", c:false, finding:true},
    ]},
    {g:"Lockout / tagout", items:[
      {t:"Energy control procedures posted at machine", c:true},
      {t:"Locks individually keyed; no master keys", m:"1910.147(c)(5)(ii)", c:true},
      {t:"Periodic inspection log current", c:false},
    ]},
    {g:"Housekeeping", items:[
      {t:"Walking surfaces clear of debris", c:true},
      {t:"Spill kits stocked and accessible", c:true},
      {t:"Exit routes unobstructed", c:true},
    ]},
  ];
  const [groups, setGroups] = useStateID(init);
  const toggle = (gi, ii) => {
    const next = groups.map((g,gix)=> gix!==gi ? g : {...g, items:g.items.map((it,iix)=> iix!==ii ? it : {...it, c:!it.c})});
    setGroups(next);
  };
  const total = groups.flatMap(g=>g.items).length;
  const done = groups.flatMap(g=>g.items).filter(i=>i.c).length;
  return (<>
    <div style={{marginBottom:14}}>
      <button className="sl-btn sl-btn--ghost" onClick={onBack}><i data-lucide="arrow-left"/>Back to inspections</button>
    </div>
    <div className="page-h">
      <div>
        <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:6}}>
          <span className="sl-badge sl-badge--warn"><span className="sl-dot" style={{background:'var(--sl-warning-500)'}}/>2 findings open</span>
          <span className="mono" style={{fontFamily:'var(--sl-font-mono)',fontSize:12,color:'var(--sl-fg-subtle)'}}>INS-1182</span>
        </div>
        <h2>Bell Park · Yard 4 · weekly walk</h2>
        <p>Inspector: R. Chen · started Apr 27, 09:14 PT · in progress</p>
      </div>
      <div style={{display:'flex',gap:8}}>
        <button className="sl-btn sl-btn--secondary"><i data-lucide="camera"/>Add photo</button>
        <button className="sl-btn sl-btn--secondary"><i data-lucide="user-plus"/>Reassign</button>
        <button className="sl-btn sl-btn--accent"><i data-lucide="check"/>Mark complete</button>
      </div>
    </div>
    <div className="tabs">
      <button className="tab active">Checklist</button>
      <button className="tab">Findings (2)</button>
      <button className="tab">Photos (24)</button>
      <button className="tab">Audit log</button>
    </div>
    <div className="det-grid">
      <div className="card">
        <div className="hd">
          <h3>Checklist</h3>
          <span className="mono" style={{fontFamily:'var(--sl-font-mono)',fontSize:12,color:'var(--sl-fg-subtle)'}}>{done} / {total} complete</span>
        </div>
        <div className="bd bd--p0 checklist">
          {groups.map((g,gi)=>(
            <React.Fragment key={g.g}>
              <div className="cl-group-h">{g.g}</div>
              {g.items.map((it,ii)=>(
                <div className="cl-item" key={ii}>
                  <div className={"cl-check"+(it.c?" checked":"")} onClick={()=>toggle(gi,ii)}>
                    {it.c && <i data-lucide="check" style={{width:14,height:14}}/>}
                  </div>
                  <div>
                    <div className="cl-t">{it.t}</div>
                    {it.m && <div className="cl-m" style={{fontFamily:'var(--sl-font-mono)'}}>{it.m}</div>}
                  </div>
                  <div className="cl-actions">
                    {it.finding && <span className="sl-badge sl-badge--danger">Finding</span>}
                    <button className="sl-btn sl-btn--ghost sl-btn--icon"><i data-lucide="camera"/></button>
                    <button className="sl-btn sl-btn--ghost sl-btn--icon"><i data-lucide="message-square"/></button>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="side">
        <div className="card">
          <h3 style={{margin:'0 0 12px',fontSize:15}}>Details</h3>
          <div className="kv"><span>Site</span><span>Bell Park · Yard 4</span></div>
          <div className="kv"><span>Frequency</span><span>Weekly</span></div>
          <div className="kv"><span>Template</span><span>Logistics yard v3</span></div>
          <div className="kv"><span>Inspector</span><span>R. Chen</span></div>
          <div className="kv"><span>Reviewer</span><span>M. Ortega</span></div>
          <div className="kv"><span>Started</span><span>Apr 27, 09:14 PT</span></div>
        </div>
        <div className="card" style={{background:'var(--sl-info-100)',borderColor:'var(--sl-navy-200)'}}>
          <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
            <i data-lucide="phone-call" style={{color:'var(--sl-info-700)',width:20,height:20,flexShrink:0,marginTop:2}}/>
            <div>
              <h4 style={{margin:'0 0 4px',color:'var(--sl-info-700)'}}>Need expert input?</h4>
              <p style={{margin:'0 0 12px',fontSize:13,color:'var(--sl-info-700)'}}>An OSHA-authorized safety pro is on call.</p>
              <button className="sl-btn sl-btn--primary">Start a call · 7 min wait</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};
