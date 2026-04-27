/* global React */
window.MarketingStory = function Story() {
  return (
    <section className="m-story">
      <div className="m-section-inner m-story-grid">
        <div className="m-story-art" style={{backgroundImage:"url(../../assets/placeholder-worksite-1.svg)"}}/>
        <div>
          <span className="sl-eyebrow">Customer story</span>
          <h2 className="m-section-h2">Cedar Logistics cut recordables by 58% in one fiscal year.</h2>
          <p className="m-lede">When Cedar rolled SafetyLink across 11 distribution yards, supervisors stopped duplicating paperwork between dispatch and safety. Inspections finished in the field. Findings closed before the next shift.</p>
          <blockquote className="m-quote">
            &ldquo;The first week, we found three issues that would have been audit findings. By month two, our forklift near-miss rate was down by half.&rdquo;
            <footer><b>Marisol Ortega</b> &middot; VP Operations, Cedar Logistics</footer>
          </blockquote>
          <button className="sl-btn sl-btn--secondary">Read the case study</button>
        </div>
      </div>
    </section>
  );
};
