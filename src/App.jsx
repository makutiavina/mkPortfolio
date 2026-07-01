import { useState } from "react";
import avatar from "./assets/avatar.png";
import { C, card, divider } from "./styles";

const skillGroups = [
  { label: "Core",                   ...C.slate, skills: ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
  { label: "State & Forms",          ...C.green, skills: ["Redux", "Redux Toolkit", "react-final-form", "Zod", "Async Validation"] },
  { label: "API & Integration",      ...C.blue,  skills: ["REST API", "gRPC", "API Integration", "Data Fetching"] },
  { label: "Testing",                ...C.amber, skills: ["Jest", "React Testing Library", "Unit Testing", "Integration Testing", "Component Testing", "E2E Testing", "Screenshot Testing"] },
  { label: "Architecture & Tooling", ...C.rose,  skills: ["Frontend Architecture", "Component Systems", "Design Systems", "Webpack", "CI/CD", "Performance Optimization", "Accessibility (WCAG)", "Cross-browser Compatibility", "AI-assisted Development"] },
];

const projects = [
  {
    id: "returns-premod",
    icon: "🔍",
    title: "Returns Risk & Cost Control",
    subtitle: "Automated return verification system for marketplace logistics flows",
    ...C.blue,
    metrics: [
      { label: "Invalid payouts prevented", value: "~€5M" },
      { label: "Merchant claims reduced",   value: "−14%" },
      { label: "Total payouts reduced",     value: "−12%" },
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
    ...C.rose,
    metrics: [
      { label: "Configuration steps", value: "3+"              },
      { label: "Scope",               value: "Business-critical" },
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
    ...C.slate,
    metrics: [
      { label: "GMV generated",        value: "~€4M+" },
      { label: "New sellers onboarded", value: "~150" },
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
    ...C.amber,
    metrics: [
      { label: "Identifier types",   value: "4" },
      { label: "Validation states",  value: "3" },
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
    period: "Dec 2021 — Mar 2026",
    role: "Frontend Engineer",
    company: "Yandex",
    logo: "/ya.png",
    ...C.slate,
    highlights: [
      "End-to-end feature ownership — from spec and API integration to rollout and support",
      "Built data-heavy operational interfaces for moderation, filtering, and large-scale workflows",
      "Developed multi-step forms with async backend validation and complex business rules",
      "Return moderation system — €5M/year in prevented payouts, −14% merchant claims, −12% total payouts",
      "Unit, integration, component, and screenshot testing with Jest",
      "On-call rotation — incident response, release monitoring, and production support",
    ],
  },
  {
    period: "Mar 2021 — Dec 2021",
    role: "Junior Frontend Developer",
    company: "High Technologies Center",
    logo: "/htc.png",
    ...C.green,
    highlights: [
      "Delivered production frontend features and supported product delivery within the engineering team",
      "Improved existing interfaces and collaborated closely with senior engineers on frontend fundamentals",
    ],
  },
];

const personalProjects = [
  {
    id: "broqo",
    icon: "/broqoLogo.png",
    title: "Broqo",
    subtitle: "AI Calorie & Macro Tracker",
    status: "In development",
    ...C.green,
    bullets: [
      "Building an AI-powered iOS product from concept to launch",
    ],
    link: "https://www.broqo.online",
  },
  {
    id: "styleday",
    icon: "/styledayLogo.png",
    title: "Styleday",
    subtitle: "AI-powered outfit analysis and style recommendation app",
    status: "Live",
    ...C.amber,
    bullets: [
      "Built and shipped an AI product independently from concept to production, with focus on UI quality and fast execution",
      "Personal product built from scratch using React Native and TypeScript",
      "Full product flow: photo upload → AI analysis → personalized style suggestions and styled images",
      "Integrated LLM APIs (OpenAI, Gemini) and image-generation pipelines",
      "Implemented authentication, subscription management, and in-app purchases",
      "Designed AI-assisted user workflows and prompt systems",
    ],
    link: "https://styleday.app",
  },
];

const tabs = ["Overview", "Skills", "Experience", "Work Projects", "Personal"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedProject, setExpandedProject] = useState(null);

  return (
      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", width: "100%", maxWidth: 720, margin: "0 auto", padding: "1.5rem 1rem 1.5rem", color: C.dark }}>

        {/* ── Header ── */}
        <div style={{ ...card, padding: "1.5rem 2rem", marginBottom: "0.75rem", textAlign: "center", background: C.dark, border: "none" }}>
          <img src={avatar} alt="Maria Kutiavina" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: "1.5px solid #334155", margin: "0 auto 18px", display: "block" }} />
          <h1 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 600, letterSpacing: -0.5, color: "#F8FAFC" }}>Maria Kutiavina</h1>
          <p style={{ margin: "0 0 20px", fontSize: 14, color: "#94A3B8" }}>Frontend Engineer · React · TypeScript · Next.js · 5 YOE</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:mariiakutiavina@gmail.com" style={{ fontSize: 12, color: "#94A3B8", textDecoration: "none", background: "#1E293B", padding: "5px 14px", borderRadius: 20, border: "1px solid #334155" }}>✉ mariiakutiavina@gmail.com</a>
            <a href="https://linkedin.com/in/maria-kutiavina-fe" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "#94A3B8", textDecoration: "none", background: "#1E293B", padding: "5px 14px", borderRadius: 20, border: "1px solid #334155" }}>LinkedIn</a>
            <span style={{ fontSize: 12, color: "#94A3B8", background: "#1E293B", padding: "5px 14px", borderRadius: 20, border: "1px solid #334155" }}>Remote / Relocation / Hybrid</span>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, marginBottom: "1rem", gap: 0 }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                flex: 1,
                padding: "10px 4px",
                border: "none",
                borderBottom: activeTab === t ? `2px solid ${C.dark}` : "2px solid transparent",
                background: "transparent",
                color: activeTab === t ? C.dark : C.faint,
                fontWeight: 500,
                fontSize: 13,
                cursor: "pointer",
                marginBottom: -1,
                transition: "color 0.15s",
              }}
            >{t}</button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ ...card, padding: "1rem" }}>
              <h2 style={{ margin: "0 0 10px", fontSize: 15, fontWeight: 600, color: C.dark }}>Career profile</h2>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: C.muted }}>Frontend Engineer with 5 years of experience building responsive web applications and complex product interfaces using React, TypeScript, and Next.js. Experienced in end-to-end feature delivery, cross-functional collaboration, and building maintainable, user-focused frontend solutions — from data-heavy operational workflows to AI-powered consumer apps.</p>
            </div>

            <div style={{ ...card, padding: "1rem" }}>
              <h2 style={{ margin: "0 0 10px", fontSize: 15, fontWeight: 600, color: C.dark }}>Education</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
                <div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: C.dark }}>B.Sc. in Computer Science</p>
                  <p style={{ margin: "2px 0 0", fontSize: 13, color: C.muted }}>Udmurt State University</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── WORK PROJECTS ── */}
        {activeTab === "Work Projects" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: "0 0 4px", fontSize: 13, color: C.faint, fontStyle: "italic" }}>A selection of the most impactful projects from 4 years at Yandex.</p>
            {projects.map(p => {
              const isOpen = expandedProject === p.id;
              return (
                <div key={p.id} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setExpandedProject(isOpen ? null : p.id)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 14, textAlign: "left" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 11, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{p.icon}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: C.dark }}>{p.title}</p>
                      <p style={{ margin: "2px 0 0", fontSize: 12, color: C.muted }}>{p.subtitle}</p>
                    </div>
                    <span style={{ fontSize: 14, color: C.faint, display: "inline-block", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>▾</span>
                  </button>

                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(p.metrics.length, 4)}, 1fr)`, ...divider }}>
                    {p.metrics.map((m, i) => (
                      <div key={i} style={{ padding: "10px 12px", borderRight: i < p.metrics.length - 1 ? `1px solid ${C.border}` : "none", textAlign: "center" }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: p.text }}>{m.value}</div>
                        <div style={{ fontSize: 11, color: C.faint, marginTop: 2 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {isOpen && (
                    <div style={{ padding: "1rem 1.25rem", ...divider, textAlign: "left" }}>
                      <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                        {p.bullets.map((b, i) => (
                          <li key={i} style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── PERSONAL ── */}
        {activeTab === "Personal" && (
          <div>
            <p style={{ margin: "0 0 12px", fontSize: 13, color: C.faint, fontStyle: "italic" }}>Built independently, outside of work.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {personalProjects.map(p => (
                <div key={p.id} style={{ ...card, overflow: "hidden" }}>
                  <div style={{ padding: "1.25rem 1.5rem", ...divider, display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 50, height: 50, borderRadius: 13, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                      <img src={p.icon} alt={`${p.title} logo`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: 16, color: C.dark }}>{p.title}</p>
                      <p style={{ margin: "3px 0 0", fontSize: 13, color: C.muted }}>{p.subtitle}</p>
                    </div>
                    <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: C.dark, background: C.bg, padding: "6px 14px", borderRadius: 20, textDecoration: "none", border: `1px solid ${C.border}`, flexShrink: 0, fontWeight: 500 }}>↗ Visit</a>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: `1px solid ${C.border}` }}>
                    <div style={{ padding: "10px 16px", borderRight: `1px solid ${C.border}`, textAlign: "center" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: p.text }}>iOS</div>
                      <div style={{ fontSize: 11, color: C.faint, marginTop: 2 }}>Platform</div>
                    </div>
                    <div style={{ padding: "10px 16px", textAlign: "center" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: p.text }}>{p.status}</div>
                      <div style={{ fontSize: 11, color: C.faint, marginTop: 2 }}>Status</div>
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem", textAlign: "left" }}>
                    <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 7 }}>
                      {p.bullets.map((b, i) => (
                        <li key={i} style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EXPERIENCE ── */}
        {activeTab === "Experience" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {timeline.map((job, i) => (
              <div key={i} style={{ ...card, overflow: "hidden" }}>
                <div style={{ padding: "1rem 1.25rem", ...divider, display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: job.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                    <img src={job.logo} alt={`${job.company} logo`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: C.dark }}>{job.role}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 13, color: C.muted }}>{job.company} · {job.period}</p>
                  </div>
                </div>
                <div style={{ padding: "1rem 1.25rem", textAlign: "left" }}>
                  <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                    {job.highlights.map((h, j) => (
                      <li key={j} style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── SKILLS ── */}
        {activeTab === "Skills" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {skillGroups.map(g => (
              <div key={g.label} style={{ ...card, padding: "1rem 1.25rem" }}>
                <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 600, color: g.text, textTransform: "uppercase", letterSpacing: 0.5 }}>{g.label}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.skills.map(s => (
                    <span key={s} style={{ fontSize: 12, padding: "4px 11px", borderRadius: 20, background: g.bg, color: g.text }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
  );
}
