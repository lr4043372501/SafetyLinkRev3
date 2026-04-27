/* global React */
const StatusBar = ({dark}) => (
  <div className={"statusbar"+(dark?" dark":"")}>
    <span>9:41</span>
    <div className="right">
      <i data-lucide="signal" style={{width:16,height:16}}/>
      <i data-lucide="wifi" style={{width:16,height:16}}/>
      <i data-lucide="battery-full" style={{width:20,height:20}}/>
    </div>
  </div>
);

const TabBar = ({active, onChange}) => (
  <div className="tabbar">
    {[["today","home","Today"],["inspect","clipboard-check","Inspect"],["learn","book-open","Learn"],["me","user","Me"]].map(([k,i,l])=>(
      <button key={k} className={"tab"+(active===k?" active":"")} onClick={()=>onChange(k)}>
        <i data-lucide={i}/>{l}
      </button>
    ))}
  </div>
);

window.MobileLogin = function Login({ onSignIn }) {
  const [lang, setLang] = React.useState("EN");
  const t = lang==="EN" ? {
    h:"Welcome back.", p:"Sign in to start your shift checks.",
    email:"Email", phone:"Phone or worker ID", code:"Site code", cta:"Sign in", help:"Need help signing in?"
  } : {
    h:"Bienvenido.", p:"Inicia sesión para empezar tus chequeos del turno.",
    email:"Correo", phone:"Teléfono o ID", code:"Código del sitio", cta:"Iniciar sesión", help:"¿Necesitas ayuda?"
  };
  return (
    <div className="screen" style={{position:'relative'}}>
      <StatusBar dark/>
      <div className="login">
        <div className="login-bg"/>
        <div className="login-top" style={{position:'relative',zIndex:1}}>
          <div className="login-mark"><img src="../../assets/logo-full-white.png" alt="SafetyLink" height="28"/></div>
          <h2>{t.h}</h2>
          <p>{t.p}</p>
          <div className="field-dark"><label>{t.phone}</label><input placeholder="555-204-1182"/></div>
          <div className="field-dark"><label>{t.code}</label><input placeholder="BELL-04"/></div>
        </div>
        <div style={{position:'relative',zIndex:1}}>
          <button className="btn btn--accent" onClick={onSignIn}>{t.cta}</button>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:18,alignItems:'center'}}>
            <a style={{color:'rgba(255,255,255,.7)',fontSize:13,fontWeight:500}}>{t.help}</a>
            <div className="lang-toggle">
              <button className={lang==="EN"?"active":""} onClick={()=>setLang("EN")}>EN</button>
              <button className={lang==="ES"?"active":""} onClick={()=>setLang("ES")}>ES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.MobileToday = function Today({ onStartInspection, onSignOut }) {
  return (
    <div className="screen">
      <StatusBar/>
      <div className="appbar">
        <h1>Today</h1>
        <button onClick={onSignOut}><i data-lucide="log-out"/></button>
      </div>
      <div className="scroll">
        <div className="today-h">
          <div className="date">Monday, Apr 27</div>
          <h2>Hi, Ramón</h2>
          <div className="sub">Bell Park · Yard 4 · day shift</div>
        </div>
        <div className="section-h">Due today</div>
        <div className="task" onClick={onStartInspection}>
          <div className="task-icon warn"><i data-lucide="clipboard-check"/></div>
          <div><div className="task-t">Weekly walk · Yard 4</div><div className="task-m">14 items · started 09:14</div></div>
          <div className="task-b"><i data-lucide="chevron-right" style={{color:'var(--sl-fg-subtle)'}}/></div>
        </div>
        <div className="task">
          <div className="task-icon"><i data-lucide="forklift"/></div>
          <div><div className="task-t">Forklift pre-use check</div><div className="task-m">12 items</div></div>
          <div className="task-b"><i data-lucide="chevron-right" style={{color:'var(--sl-fg-subtle)'}}/></div>
        </div>
        <div className="task">
          <div className="task-icon info"><i data-lucide="message-square"/></div>
          <div><div className="task-t">Toolbox talk · Lockout/Tagout</div><div className="task-m">5 min · EN/ES</div></div>
          <div className="task-b"><i data-lucide="chevron-right" style={{color:'var(--sl-fg-subtle)'}}/></div>
        </div>
        <div className="section-h">Recent</div>
        <div className="task">
          <div className="task-icon"><i data-lucide="check"/></div>
          <div><div className="task-t">PPE distribution · closed</div><div className="task-m">Yesterday · 0 findings</div></div>
        </div>
        <div className="expert">
          <div className="expert-ico"><i data-lucide="phone-call"/></div>
          <div><h4>Need an expert?</h4><p>Tap to call an OSHA-authorized safety pro.</p></div>
        </div>
        <div style={{height:24}}/>
      </div>
      <TabBar active="today" onChange={()=>{}}/>
    </div>
  );
};

window.MobileChecklist = function Checklist({ onBack, onSubmit }) {
  const [items, setItems] = React.useState([
    {g:"Fall protection", t:"Guardrails at all open edges ≥ 6 ft", m:"1926.501(b)(1)", s:"ok"},
    {g:"Fall protection", t:"PFAS inspected for wear", m:"PFAS · daily", s:"ok"},
    {g:"Fall protection", t:"Skylights covered or guarded", m:"1926.501(b)(4)", s:"bad"},
    {g:"Lockout / tagout", t:"Energy control procedures posted", m:"1910.147", s:"ok"},
    {g:"Lockout / tagout", t:"Periodic inspection log current", m:"1910.147(c)(6)", s:null},
    {g:"Housekeeping", t:"Walking surfaces clear", m:"", s:null},
    {g:"Housekeeping", t:"Spill kits stocked", m:"", s:null},
  ]);
  const cycle = (i) => {
    const order = [null, "ok", "bad"];
    const next = items.map((it, ix)=> ix!==i ? it : {...it, s: order[(order.indexOf(it.s)+1)%order.length]});
    setItems(next);
  };
  const done = items.filter(i=>i.s).length;
  const groups = [...new Set(items.map(i=>i.g))];
  return (
    <div className="screen">
      <StatusBar/>
      <div className="appbar">
        <button onClick={onBack}><i data-lucide="arrow-left"/></button>
        <h1>Weekly walk</h1>
        <button><i data-lucide="more-horizontal"/></button>
      </div>
      <div className="cl-h">
        <div className="crumb">INS-1182 · Bell Park / Yard 4</div>
        <h2>14 items · {done} complete</h2>
        <div className="meta">Started 09:14 · Inspector: R. Chen</div>
        <div className="progress-bar"><div className="progress-bar-fill" style={{width:(done/items.length*100)+"%"}}/></div>
      </div>
      <div className="scroll">
        {groups.map(g => (
          <React.Fragment key={g}>
            <div className="cl-group">{g}</div>
            {items.map((it, i) => it.g!==g ? null : (
              <div className="cl-row" key={i}>
                <div className={"cl-tap "+(it.s||"")} onClick={()=>cycle(i)}>
                  {it.s==="ok" && <i data-lucide="check" style={{width:18,height:18}}/>}
                  {it.s==="bad" && <i data-lucide="x" style={{width:18,height:18}}/>}
                </div>
                <div className="cl-text">
                  <div className="t">{it.t}</div>
                  {it.m && <div className="m">{it.m}</div>}
                </div>
                <div className="acts">
                  <button style={{background:'transparent',border:0,color:'var(--sl-fg-subtle)',padding:6}}><i data-lucide="camera"/></button>
                  <button style={{background:'transparent',border:0,color:'var(--sl-fg-subtle)',padding:6}}><i data-lucide="message-square"/></button>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="bottom-cta">
        <button className="btn btn--secondary" style={{flex:'0 0 auto',width:'auto',padding:'16px 18px'}}><i data-lucide="camera"/></button>
        <button className="btn btn--accent" onClick={onSubmit}>Submit · {done}/{items.length}</button>
      </div>
    </div>
  );
};

window.MobileSubmitted = function Submitted({ onDone }) {
  return (
    <div className="screen" style={{justifyContent:'center',alignItems:'center',background:'#fff'}}>
      <StatusBar/>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:32,textAlign:'center'}}>
        <div style={{width:88,height:88,borderRadius:'50%',background:'var(--sl-success-100)',color:'var(--sl-success-700)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:24}}>
          <i data-lucide="check" style={{width:44,height:44,strokeWidth:2.5}}/>
        </div>
        <h2 style={{fontSize:24,fontWeight:800,letterSpacing:'-0.02em',margin:'0 0 8px'}}>Inspection submitted</h2>
        <p style={{color:'var(--sl-fg-muted)',margin:'0 0 6px',fontSize:15}}>1 finding flagged for review.</p>
        <p style={{color:'var(--sl-fg-subtle)',margin:'0 0 28px',fontSize:13,fontFamily:'var(--sl-font-mono)'}}>INS-1182 · synced 09:42</p>
        <button className="btn btn--accent" onClick={onDone} style={{maxWidth:280}}>Back to today</button>
        <button className="btn btn--ghost" style={{maxWidth:280,marginTop:8}}>Start another inspection</button>
      </div>
    </div>
  );
};
