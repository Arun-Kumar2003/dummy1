import React from "react";
import "../assets/styles/workphilosophy.css";

const Work = () => {
  return (
    <section className="section-workethic">
      {/* Header */}
      <div className="section-header">
        <span className="section-label">🧠 Logic & Architecture</span>
        <h2 className="section-title">How I Work</h2>
        <p className="section-subtitle">
          Deep systems thinking, high-performance architecture, and the
          philosophy behind my engineering.
        </p>
      </div>

      {/* Workflow */}
      <div className="workflow-container">
        {/* SVG Curve */}
        <svg
          className="workflow-wave"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M150 150 C300 150 400 450 500 450 C600 450 700 150 850 150 C1000 150 1000 450 1080 450"
            stroke="rgba(13,27,13,0.08)"
            strokeWidth="3"
            strokeDasharray="10 12"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Node 1 */}
        <div className="node" style={{ top: "25%", left: "15%" }}>
          <h3>Discovery</h3>
          <div className="node-hover">
            <div className="icon">🔍</div>
            <p className="cloud">
              Understanding the problem, users, and goals before building
              anything.
            </p>
          </div>
        </div>

        {/* Node 2 */}
        <div className="node" style={{ top: "75%", left: "42%" }}>
          <h3>Build</h3>
          <div className="node-hover">
            <div className="icon">🏗️</div>
            <p className="cloud">
              Turning ideas into scalable, high-performance applications.
            </p>
          </div>
        </div>

        {/* Node 3 */}
        <div className="node" style={{ top: "25%", left: "70%" }}>
          <h3>Launch</h3>
          <div className="node-hover">
            <div className="icon">🚀</div>
            <p className="cloud">
              Smooth deployment with testing and optimization.
            </p>
          </div>
        </div>

        {/* Node 4 */}
        <div className="node" style={{ top: "75%", left: "88%" }}>
          <h3>Scale</h3>
          <div className="node-hover">
            <div className="icon">📈</div>
            <p className="cloud">Improving and scaling based on real usage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
