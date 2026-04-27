/* global React */
const { useState: useStateSU } = React;

window.SignupModal = function SignupModal({ onClose }) {
  const [step, setStep] = useStateSU(0);
  const [data, setData] = useStateSU({email:"", company:"", sites:"1-5"});
  return (
    <div className="m-modal-backdrop" onClick={onClose}>
      <div className="m-modal" onClick={e=>e.stopPropagation()}>
        <button className="m-modal-close" onClick={onClose}><i data-lucide="x"/></button>
        {step === 0 && (
          <>
            <span className="sl-eyebrow">Book a demo</span>
            <h3 className="m-modal-h">See SafetyLink on one of your sites in 30 minutes.</h3>
            <p className="m-modal-p">No deck. We&rsquo;ll set up your site, walk an inspection together, and show you what audit-ready looks like.</p>
            <div className="m-form">
              <label>Work email
                <input value={data.email} onChange={e=>setData({...data, email:e.target.value})} placeholder="you@company.com"/>
              </label>
              <label>Company
                <input value={data.company} onChange={e=>setData({...data, company:e.target.value})} placeholder="Cedar Logistics"/>
              </label>
              <label>How many sites?
                <select value={data.sites} onChange={e=>setData({...data, sites:e.target.value})}>
                  <option>1-5</option><option>6-25</option><option>26-100</option><option>100+</option>
                </select>
              </label>
            </div>
            <div className="m-modal-actions">
              <button className="sl-btn sl-btn--ghost" onClick={onClose}>Cancel</button>
              <button className="sl-btn sl-btn--accent" onClick={()=>setStep(1)}>Continue</button>
            </div>
          </>
        )}
        {step === 1 && (
          <div className="m-modal-success">
            <div className="m-success-ico"><i data-lucide="check"/></div>
            <h3 className="m-modal-h">You&rsquo;re booked.</h3>
            <p className="m-modal-p">A SafetyLink safety pro will reach out to <b>{data.email||"your inbox"}</b> within 24 hours to schedule the walk-through.</p>
            <button className="sl-btn sl-btn--secondary" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};
