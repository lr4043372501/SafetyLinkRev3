/* global React */
window.MarketingStats = function Stats() {
  const stats = [
    {n:"61%", l:"average reduction in recordable injuries"},
    {n:"$4.41", l:"return on every safety dollar invested"},
    {n:"12,000+", l:"sites running daily on SafetyLink"},
    {n:"7 min", l:"median time to reach an OSHA-authorized expert"},
  ];
  return (
    <section className="m-stats">
      <div className="m-section-inner">
        <div className="m-stats-grid">
          {stats.map(s => (
            <div className="m-stat" key={s.l}>
              <div className="m-stat-n">{s.n}</div>
              <div className="m-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
