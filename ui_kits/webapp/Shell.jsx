/* global React */
const SBLink = ({icon, label, count, active, onClick}) => (
  <button className={"sb-link"+(active?" active":"")} onClick={onClick}>
    <i data-lucide={icon}/>{label}
    {count && <span className="count">{count}</span>}
  </button>
);

window.WebappShell = function Shell({ view, setView, title, children }) {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sb-brand"><img src="../../assets/logo-full.png" alt="SafetyLink" height="22"/></div>
        <SBLink icon="layout-dashboard" label="Dashboard" active={view==='dashboard'} onClick={()=>setView('dashboard')}/>
        <SBLink icon="clipboard-check" label="Inspections" count="14" active={view==='inspections'||view==='detail'} onClick={()=>setView('inspections')}/>
        <SBLink icon="shield-alert" label="Findings" count="3" active={view==='findings'} onClick={()=>setView('findings')}/>
        <div className="sb-section">Programs</div>
        <SBLink icon="book-open" label="Training" active={view==='training'} onClick={()=>setView('training')}/>
        <SBLink icon="file-text" label="Documents" active={view==='docs'} onClick={()=>setView('docs')}/>
        <SBLink icon="users" label="Workers" active={view==='workers'} onClick={()=>setView('workers')}/>
        <div className="sb-section">Account</div>
        <SBLink icon="map-pin" label="Sites" active={view==='sites'} onClick={()=>setView('sites')}/>
        <SBLink icon="settings" label="Settings" active={view==='settings'} onClick={()=>setView('settings')}/>
        <div className="sb-spacer"/>
        <div className="sb-user">
          <div className="sb-avatar">MO</div>
          <div>
            <div className="sb-user-name">Marisol Ortega</div>
            <div className="sb-user-meta">VP Ops · Cedar Logistics</div>
          </div>
        </div>
      </aside>
      <div className="main">
        <div className="topbar">
          <h1>{title}</h1>
          <div className="search">
            <i data-lucide="search"/>
            <input placeholder="Search inspections, sites, OSHA codes…"/>
          </div>
          <div className="tb-right">
            <button className="tb-icon"><i data-lucide="bell"/><span className="pip"/></button>
            <button className="tb-icon"><i data-lucide="phone-call"/></button>
            <button className="sl-btn sl-btn--accent"><i data-lucide="plus"/>New inspection</button>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
