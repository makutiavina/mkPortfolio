import { useState } from "react";

const skillGroups = [
  { label: "Core", color: "#3C3489", bg: "#EEEDFE", skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { label: "State & Forms", color: "#0F6E56", bg: "#E1F5EE", skills: ["Redux", "Redux Toolkit", "react-final-form", "Zod", "Async Validation"] },
  { label: "API & Integration", color: "#185FA5", bg: "#E6F1FB", skills: ["REST API", "gRPC", "API Integration", "Data Fetching"] },
  { label: "Testing", color: "#854F0B", bg: "#FAEEDA", skills: ["Jest", "Unit Testing", "Integration Testing", "Component Testing", "Screenshot Testing"] },
  { label: "Architecture & Tooling", color: "#993C1D", bg: "#FAECE7", skills: ["Frontend Architecture", "Next.js", "Webpack", "CI/CD", "Performance Optimization", "Accessibility (a11y)"] },
];

const projects = [
  {
    id: "returns-premod",
    icon: "🔍",
    title: "Returns Risk & Cost Control",
    subtitle: "Automated return verification system for marketplace logistics flows",
    color: "#185FA5", bg: "#E6F1FB",
    metrics: [
      { label: "Invalid payouts prevented", value: "~€5M", unit: "", icon: "🚫" },
      { label: "Merchant claims", value: "−14%", unit: "", icon: "📉" },
      { label: "Total payouts", value: "−12%", unit: "", icon: "💸" },
    ],
    bullets: [
      "Worked on an automated return verification system for marketplace logistics flows",
      "Scaled automated moderation across return flows",
      "Helped prevent ~€5M in invalid return compensation payouts annually",
      "Reduced merchant claims by 14% and total payouts by 12%",
    ],
  },
  {
    id: "delivery",
    icon: "🚚",
    title: "Courier Delivery Configuration",
    subtitle: "Multi-step logistics configuration flow for marketplace sellers",
    color: "#993C1D", bg: "#FAECE7",
    metrics: [
      { label: "Configuration steps", value: "3+", unit: "", icon: "📋" },
      { label: "Scope", value: "Business-critical", unit: "", icon: "⚙️" },
    ],
    bullets: [
      "Developed a multi-step logistics configuration flow for marketplace sellers",
      "Built delivery setup flows with complex cross-step dependencies and dynamic validation",
      "Implemented backend-aware validation and error handling for operational edge cases",
      "Improved usability of a business-critical configuration process affecting delivery costs and shipping reliability",
      "Worked on scalable form architecture for complex seller workflows",
    ],
  },
  {
    id: "birzha",
    icon: "📦",
    title: "Marketplace Exchange",
    subtitle: "New seller program with guaranteed income that increased warehouse adoption",
    color: "#3C3489", bg: "#EEEDFE",
    metrics: [
      { label: "GMV generated", value: "~€4M+", unit: "", icon: "📈" },
      { label: "New sellers onboarded", value: "~150", unit: "", icon: "🤝" },
    ],
    bullets: [
      "Launched a new seller program with guaranteed income that increased warehouse adoption",
      "Generated €4M+ GMV through seller migration to warehouses",
      "Onboarded ~150 sellers and reduced churn from warehouse fulfillment",
      "Built reusable business logic later adopted by other marketplace teams",
      "Automated pricing discounts and ad bid optimization workflows",
    ],
  },
  {
    id: "identifiers",
    icon: "🧾",
    title: "Order Item Identifier Validation",
    subtitle: "Scalable validation system for business-critical order identifiers",
    color: "#854F0B", bg: "#FAEEDA",
    metrics: [
      { label: "Identifier types", value: "4", unit: "", icon: "🔢" },
      { label: "Validation states", value: "3", unit: "", icon: "🔄" },
    ],
    bullets: [
      "Developed a scalable validation system for business-critical order identifiers",
      "Supported 4 identifier types with different validation and formatting rules",
      "Implemented sync + async validation flows with backend verification",
      "Built reactive validation UI with pending / valid / invalid states",
      "Covered complex edge cases including duplicates and partial input",
      "Improved maintainability by separating validation into reusable layers",
    ],
  },
];

const timeline = [
  {
    period: "Mar 2022 — Mar 2026",
    role: "Frontend Engineer",
    company: "Yandex",
    icon: "💼",
    color: "#7F77DD", bg: "#EEEDFE",
    highlights: [
      "Owned and delivered frontend features end-to-end: from requirements gathering and API integration to implementation, testing, rollout, and support",
      "Built scalable data-heavy interfaces for operational workflows involving filtering, moderation, and large dataset management",
      "Developed reusable multi-step form systems with async backend validation and complex business logic",
      "Collaborated with cross-functional teams including backend, product, design, and QA to define requirements and improve workflow reliability",
      "Implemented unit, integration, component, and screenshot tests using Jest",
      "Designed and developed return moderation flows — €5M/year operational savings, 14.2% reduction in merchant claims, 12% reduction in compensation payouts",
      "Architected and developed logistics configuration interfaces with real-time validation and complex business rules",
      "Contributed to scalable frontend architecture and maintainable UI systems for complex business workflows",
    ],
  },
  {
    period: "Nov 2019 — Feb 2022",
    role: "QA Engineer",
    company: "High Technologies Center",
    icon: "🧪",
    color: "#0F6E56", bg: "#E1F5EE",
    highlights: [
      "End-to-end testing of web and mobile apps (frontend, backend, iOS, Android)",
      "Cross-functional delivery of a new banking service",
      "Mentored an intern from onboarding to full-time role",
      "Improved team testing processes and quality standards",
    ],
  },
];

const overviewMetrics = [
  { label: "Years of Experience", value: "4+", icon: "📅" },
  { label: "Annual Cost Savings", value: "€5M", icon: "💰" },
  { label: "Claims Reduced", value: "14.2%", icon: "📉" },
  { label: "Payouts Reduced", value: "12%", icon: "✅" },
];

const styleday = {
  id: "styleday",
  icon: "👗",
  title: "Styleday",
  subtitle: "AI-powered outfit analysis and style recommendation app",
  color: "#533000", bg: "#FFF3E0",
  tags: ["React Native", "Expo", "TypeScript", "Node.js", "OpenAI", "Gemini", "In-App Purchases"],
  bullets: [
    "Personal product built from scratch using React Native and TypeScript",
    "Full product flow: photo upload → AI analysis → personalized style suggestions and styled images",
    "Integrated LLM APIs (OpenAI, Gemini) and image-generation pipelines",
    "Implemented authentication, subscription management, and in-app purchases",
    "Designed AI-assisted user workflows and prompt systems",
  ],
  link: "https://styleday.app",
};

const tabs = ["Overview", "Work Projects", "Personal", "Experience", "Skills"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 760, margin: "0 auto", padding: "1.5rem 1rem", color: "var(--color-text-primary)" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: "2rem", padding: "1.25rem 1.5rem", background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 16 }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#EEEDFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 500, color: "#3C3489", flexShrink: 0 }}>MK</div>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>Maria Kutiavina</h1>
          <p style={{ margin: "2px 0 6px", fontSize: 14, color: "var(--color-text-secondary)" }}>Frontend Engineer · React · TypeScript · 4+ YOE</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a href="mailto:makutiavina@gmail.com" style={{ fontSize: 12, color: "#185FA5", textDecoration: "none", background: "#E6F1FB", padding: "3px 10px", borderRadius: 20 }}>✉ makutiavina@gmail.com</a>
            <a href="https://linkedin.com/in/maria-kutiavina/" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "#3C3489", textDecoration: "none", background: "#EEEDFE", padding: "3px 10px", borderRadius: 20 }}>in LinkedIn</a>
            <span style={{ fontSize: 12, color: "#0F6E56", background: "#E1F5EE", padding: "3px 10px", borderRadius: 20 }}>🌍 Remote / Relocation / Hybrid</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", background: "var(--color-background-secondary)", padding: 4, borderRadius: 12 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ flex: 1, padding: "8px 0", border: "none", borderRadius: 9, background: activeTab === t ? "var(--color-background-primary)" : "transparent", color: activeTab === t ? "var(--color-text-primary)" : "var(--color-text-secondary)", fontWeight: activeTab === t ? 500 : 400, fontSize: 14, cursor: "pointer" }}>{t}</button>
        ))}
      </div>

      {/* OVERVIEW */}
      {activeTab === "Overview" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: "1.5rem" }}>
            {overviewMetrics.map(m => (
              <div key={m.label} style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 22 }}>{m.icon}</div>
                <div style={{ fontSize: 24, fontWeight: 500, margin: "4px 0 2px" }}>{m.value}</div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{m.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
            <h2 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 500 }}>Career profile</h2>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--color-text-secondary)" }}>Frontend engineer with 4+ years building scalable B2B platforms using React and TypeScript. Specialized in complex operational workflows, data-heavy interfaces, async validation systems, and end-to-end feature ownership. Built frontend systems for logistics, returns, delivery settings, and moderation workflows used by tens of thousands of merchants.</p>
          </div>
          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, padding: "1.25rem 1.5rem" }}>
            <h2 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 500 }}>Education</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FAEEDA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
              <div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>B.Sc. in Computer Science</p>
                <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>Udmurt State University</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WORK PROJECTS */}
      {activeTab === "Work Projects" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ margin: "0 0 4px", fontSize: 13, color: "var(--color-text-secondary)", fontStyle: "italic" }}>A selection of the most memorable projects from 4 years at Yandex — not an exhaustive list.</p>
          {projects.map(p => {
            const isOpen = expandedProject === p.id;
            return (
              <div key={p.id} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, overflow: "hidden" }}>
                <button onClick={() => setExpandedProject(isOpen ? null : p.id)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 500, fontSize: 15, color: "var(--color-text-primary)" }}>{p.title}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--color-text-secondary)" }}>{p.subtitle}</p>
                  </div>
                  <span style={{ fontSize: 18, color: "var(--color-text-secondary)", display: "inline-block", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>⌄</span>
                </button>
                {p.metrics.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(p.metrics.length, 4)}, 1fr)`, borderTop: "0.5px solid var(--color-border-tertiary)" }}>
                    {p.metrics.map((m, i) => (
                      <div key={i} style={{ padding: "10px 12px", borderRight: i < p.metrics.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", textAlign: "center" }}>
                        <div style={{ fontSize: 16, fontWeight: 500, color: p.color }}>{m.value}{m.unit}</div>
                        <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                {isOpen && (
                  <div style={{ padding: "1rem 1.25rem", borderTop: "0.5px solid var(--color-border-tertiary)" }}>
                    <ul style={{ margin: "0 0 1rem", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                      {p.bullets.map((b, i) => (
                        <li key={i} style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{b}</li>
                      ))}
                    </ul>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "#185FA5", background: "#E6F1FB", padding: "4px 12px", borderRadius: 20, textDecoration: "none" }}>↗ Visit app</a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* PERSONAL */}
      {activeTab === "Personal" && (
        <div>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "var(--color-text-secondary)", fontStyle: "italic" }}>Built independently, outside of work.</p>
          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: styleday.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{styleday.icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: 500, fontSize: 16 }}>{styleday.title}</p>
                <p style={{ margin: "3px 0 0", fontSize: 13, color: "var(--color-text-secondary)" }}>{styleday.subtitle}</p>
              </div>
              <a href={styleday.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "#185FA5", background: "#E6F1FB", padding: "5px 14px", borderRadius: 20, textDecoration: "none", flexShrink: 0 }}>↗ Visit app</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
              <div style={{ padding: "10px 16px", borderRight: "0.5px solid var(--color-border-tertiary)", textAlign: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: styleday.color }}>iOS</div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>Platform</div>
              </div>
              <div style={{ padding: "10px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: styleday.color }}>0 → 1</div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>Built from scratch</div>
              </div>
            </div>
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <ul style={{ margin: "0 0 1rem", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 7 }}>
                {styleday.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{b}</li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      )}

      {/* EXPERIENCE */}
      {activeTab === "Experience" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {timeline.map((job, i) => (
            <div key={i} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.25rem", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: job.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{job.icon}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 500, fontSize: 15 }}>{job.role}</p>
                  <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--color-text-secondary)" }}>{job.company} · {job.period}</p>
                </div>
              </div>
              <div style={{ padding: "1rem 1.25rem" }}>
                <ul style={{ margin: "0 0 1rem", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 5 }}>
                  {job.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{h}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* SKILLS */}
      {activeTab === "Skills" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {skillGroups.map(g => (
            <div key={g.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, padding: "1rem 1.25rem" }}>
              <p style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 500, color: g.color }}>{g.label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {g.skills.map(s => (
                  <span key={s} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: g.bg, color: g.color }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}