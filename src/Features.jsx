import { useState } from "react";
import Navbar from "./Navbar";

const translations = {
  en: {
    hero: {
      tag: "Deep Dive",
      headline: "Engineered for Focus.",
      sub: "Explore the technical craft and intentional design behind FocusTabs. No distractions, just pure performance.",
    },
    sections: [
      {
        tag: "CORE PHILOSOPHY",
        headline: "Quiet your mind.",
        sub: "Three focused goals. One clear day.",
        label: "Quiet, focused productivity.",
      },
      {
        tag: "AI POWER",
        headline: "Crystal clear focus.",
        sub: "AI slices complex goals into 3 actionable steps.",
        label: "Complex goals, effortlessly simplified.",
      },
      {
        tag: "CONSISTENCY",
        headline: "Visualize your consistency.",
        sub: "Three goals. Every day. Compound growth.",
        label: "Small wins. Long-term leverage.",
      },
      {
        tag: "PRIVACY",
        headline: "Private by default.",
        sub: "Offline. No tracking. No accounts.",
        label: "Focus without compromise.",
      },
      {
        tag: "THEMES",
        headline: "Design your focus.",
        sub: "Minimal themes. Zero clutter. Total control.",
        label: "Your system. Your rules.",
      },
      {
        tag: "STATISTICS",
        headline: "Track your progress.",
        sub: "See your productivity soar with real-time insights.",
        label: "Stay motivated with clear, actionable goals.",
      },
      {
        tag: "CONTEXT MEMORY",
        headline: "Your goals, remembered.",
        sub: "Local context from your past goals and interactions. No AI, no cloud—just your personal history.",
        label: "Your journey, stored locally forever.",
      },
      {
        tag: "SETTINGS",
        headline: "Make it your own.",
        sub: "Customize your experience your way.",
        label: "Tailor every detail to fit your needs.",
      },
    ],
    footer: { back: "← Back to Home", rights: "© 2026 FocusTabs." }
  },
  tr: {
    hero: {
      tag: "Derinlemesine Bakış",
      headline: "Odaklanma için Mühendislik.",
      sub: "FocusTabs'in arkasındaki teknik zanaati ve kasıtlı tasarımı keşfedin. Dikkat dağıtıcı unsurlar yok, sadece saf performans.",
    },
    sections: [
      {
        tag: "TEMEL FELSEFE",
        headline: "Zihninizi susturun.",
        sub: "Üç odaklı hedef. Tek net gün.",
        label: "Sakin, odaklı üretkenlik.",
      },
      {
        tag: "AI GÜCÜ",
        headline: "Kristal berraklığında odak.",
        sub: "AI karmaşık hedefleri 3 eyleme dönüştürür.",
        label: "Karmaşık hedefler, zahmetsizce basitleştirildi.",
      },
      {
        tag: "İSTİKRAR",
        headline: "İstikrarınızı görselleştirin.",
        sub: "Üç hedef. Her gün. Bileşik büyüme.",
        label: "Küçük zaferler. Uzun vadeli kaldıraç.",
      },
      {
        tag: "GİZLİLİK",
        headline: "Varsayılan olarak gizli.",
        sub: "Çevrimdışı. Takip yok. Hesap yok.",
        label: "Taviz vermeden odaklanın.",
      },
      {
        tag: "TEMALAR",
        headline: "Odağınızı tasarlayın.",
        sub: "Minimalist temalar. Sıfır karmaşa. Tam kontrol.",
        label: "Kendi sisteminiz, kendi kurallarınız.",
      },
      {
        tag: "İSTATİSTİKLER",
        headline: "İlerlemenizi takip edin.",
        sub: "Gerçek zamanlı içgörülerle üretkenliğinizin yükselişini izleyin.",
        label: "Net, eyleme geçirilebilir hedeflerle motive kalın.",
      },
      {
        tag: "AI COACH",
        headline: "Kişisel üretkenlik mentörünüz.",
        sub: "İstediğinizde uzman rehberliği alın.",
        label: "İstediğinizde uzman rehberliği.",
      },
      {
        tag: "AYARLAR",
        headline: "Kendinize göre yapın.",
        sub: "Deneyiminizi istediğiniz gibi özelleştirin.",
        label: "Her detayı ihtiyaçlarınıza göre ayarlayın.",
      },
    ],
    footer: { back: "← Ana Sayfaya Dön", rights: "© 2026 FocusTabs." }
  }
};

const PhoneMockup = ({ children, theme }) => (
  <div style={{ position: "relative", width: 220, margin: "0 auto", filter: `drop-shadow(0 0 30px ${theme.primary}40)`, flexShrink: 0 }}>
    <div style={{ background: "#0f0a1e", borderRadius: 32, border: `2px solid ${theme.border}`, padding: "8px 6px", overflow: "hidden" }}>
      <div style={{ background: "#111", borderRadius: 26, overflow: "hidden" }}>
        <div style={{ height: 18, background: "#0f0a1e", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 50, height: 5, borderRadius: 3, background: "#1a1040" }} />
        </div>
        {children}
      </div>
    </div>
  </div>
);

// MOCKUP 1 — Goals screen
const GoalsScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 14, marginBottom: 10 }}>
      <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>FocusTabs</div>
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, marginBottom: 8 }}>Your Mind in 3 Steps</div>
      <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "5px 8px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 10 }}>Daily Progress</span>
        <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>1/3</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.2)", borderRadius: 2, marginTop: 4 }}>
        <div style={{ width: "33%", height: 3, background: "#fff", borderRadius: 2 }} />
      </div>
    </div>
    {[
      { text: "Meditate for 10 minutes 🧘", done: true, tags: ["COMPLETED", "HEALTH"] },
      { text: "Finish AI Slicer Logic 🧠", done: false, tags: ["GOAL"] },
      { text: "Architect FocusTabs Launch 🚀", done: false, tags: [] },
    ].map((item, i) => (
      <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "8px 10px", marginBottom: 6, display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div style={{ width: 16, height: 16, borderRadius: "50%", background: item.done ? "#10b981" : "transparent", border: item.done ? "none" : `2px solid ${theme.primary}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
          {item.done && <span style={{ color: "#fff", fontSize: 8 }}>✓</span>}
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#111" }}>{item.text}</div>
          <div style={{ display: "flex", gap: 4, marginTop: 3 }}>
            {item.tags.map((t, j) => <span key={j} style={{ fontSize: 8, padding: "1px 5px", borderRadius: 6, background: item.done ? "#d1fae5" : "#ede9fe", color: item.done ? "#065f46" : theme.primary, fontWeight: 700 }}>{t}</span>)}
          </div>
        </div>
      </div>
    ))}
    <div style={{ background: `linear-gradient(90deg,${theme.primary},${theme.secondary})`, borderRadius: 10, padding: "8px", textAlign: "center", color: "rgba(255,255,255,0.9)", fontSize: 10, fontWeight: 600 }}>3/3 · Daily limit reached</div>
  </div>
);

// MOCKUP 2 — AI Slicer screen
const SlicerScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 14, marginBottom: 10 }}>
      <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>FocusTabs</div>
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, marginBottom: 6 }}>Your Mind in 3 Steps</div>
      <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "5px 8px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 10 }}>Daily Progress</span>
        <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>2/3</span>
      </div>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10, marginBottom: 6 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 4 }}>Finish AI Slicer Logic 🧠</div>
      <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
        <span style={{ fontSize: 8, padding: "1px 5px", borderRadius: 6, background: "#ede9fe", color: theme.primary, fontWeight: 700 }}>GOAL</span>
        <span style={{ fontSize: 8, padding: "1px 5px", borderRadius: 6, background: "#fef9c3", color: "#92400e", fontWeight: 700 }}>FINANCE</span>
        <span style={{ fontSize: 8, color: "#888" }}>2/3 ↑</span>
      </div>
      {[
        { text: "Implement core slicing algorithm", done: true },
        { text: "Integrate AI decision making", done: true },
        { text: "Test and refine logic", done: false },
      ].map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: step.done ? "#10b981" : "transparent", border: step.done ? "none" : "2px solid #ddd", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {step.done && <span style={{ color: "#fff", fontSize: 8 }}>✓</span>}
          </div>
          <span style={{ fontSize: 9, color: step.done ? "#888" : "#111", textDecoration: step.done ? "line-through" : "none" }}>{step.text}</span>
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: "8px 10px" }}>
      <div style={{ fontSize: 9, color: "#888", marginBottom: 2 }}>⏱ 00:10</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#111" }}>Architect FocusTabs Launch 🚀</div>
    </div>
  </div>
);

// MOCKUP 3 — Calendar screen
const CalendarScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 14, marginBottom: 10 }}>
      <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Takvim</div>
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10 }}>Track your goals</div>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10, marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span style={{ fontSize: 9, color: "#888" }}>{"<"}</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#111" }}>March 2026</span>
        <span style={{ fontSize: 9, color: "#888" }}>{">"}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", marginBottom: 3 }}>
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <div key={d} style={{ textAlign: "center", fontSize: 8, color: "#aaa" }}>{d}</div>)}
      </div>
      {[[null,null,null,null,null,null,1],[2,3,4,5,6,7,8],[9,10,11,12,13,14,15],[16,17,18,19,20,21,22],[23,24,25,26,27,28,29],[30,31,null,null,null,null,null]].map((week, wi) => (
        <div key={wi} style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", marginBottom: 1 }}>
          {week.map((day, di) => (
            <div key={di} style={{ textAlign: "center", fontSize: 9, padding: "2px 0", borderRadius: "50%", background: day === 3 ? theme.primary : "transparent", color: day === 3 ? "#fff" : day ? "#333" : "transparent", fontWeight: day === 3 ? 700 : 400 }}>{day || ""}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
        <div style={{ background: theme.primary, borderRadius: 6, padding: "2px 6px", color: "#fff", fontSize: 9, fontWeight: 700 }}>03</div>
        <span style={{ fontSize: 9, color: "#555" }}>Tuesday, March 3, 2026</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid #f59e0b", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 800, color: "#f59e0b" }}>100%</span>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#f59e0b" }}>100%</div>
          <div style={{ fontSize: 8, color: "#888" }}>3 / 3 goals completed</div>
        </div>
      </div>
    </div>
  </div>
);

// MOCKUP 4 — Privacy screen
const PrivacyScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", fontSize: 16 }}>🛡️</div>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>Privacy Policy</div>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10, marginBottom: 8 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 5 }}>Our Privacy Commitment</div>
      <div style={{ fontSize: 9, color: "#555", lineHeight: 1.5 }}>FocusTabs is engineered with a strict privacy-first approach. Everything stays on your device and is never collected.</div>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 7 }}>Data Collection</div>
      {[
        { label: "Zero Data Collection:", body: "Operates entirely offline." },
        { label: "Local Storage Only:", body: "Data stays on your device." },
        { label: "No Third-Party Analytics:", body: "No tracking tools of any kind." },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 6, marginBottom: 6, alignItems: "flex-start" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", border: "2px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
            <span style={{ fontSize: 6, color: "#10b981" }}>✓</span>
          </div>
          <div style={{ fontSize: 8, color: "#333", lineHeight: 1.4 }}>
            <span style={{ fontWeight: 700 }}>{item.label}</span> {item.body}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// MOCKUP 5 — Themes screen
const ThemesScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 12, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 9 }}>{"< Settings"}</span>
      <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>Theme Ayarlari</span>
      <span style={{ width: 20 }} />
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10 }}>
      <div style={{ textAlign: "center", fontSize: 22, marginBottom: 4 }}>🎨</div>
      <div style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "#111", marginBottom: 2 }}>Theme Customization</div>
      <div style={{ textAlign: "center", fontSize: 9, color: "#888", marginBottom: 10 }}>Customize the appearance of your app</div>
      <div style={{ fontSize: 9, fontWeight: 700, color: "#111", marginBottom: 6 }}>Themes</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {[
          { name: "Cyberpunk", colors: ["#7c3aed","#4f46e5","#8b5cf6"], selected: true },
          { name: "Neon", colors: ["#ec4899","#8b5cf6","#10b981"], selected: false },
          { name: "Matrix", colors: ["#10b981","#059669","#34d399"], selected: false },
          { name: "Focus", colors: ["#6d28d9","#5b21b6","#7c3aed"], selected: false },
        ].map((t, i) => (
          <div key={i} style={{ background: t.selected ? "#f5f3ff" : "#fafafa", border: `2px solid ${t.selected ? t.colors[0] : "#e5e7eb"}`, borderRadius: 8, padding: 8, textAlign: "center" }}>
            {t.selected && <div style={{ textAlign: "right", fontSize: 8, color: t.colors[0], marginBottom: 2 }}>✓</div>}
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg,${t.colors[0]},${t.colors[1]})`, margin: "0 auto 4px" }} />
            <div style={{ fontSize: 9, fontWeight: 600, color: "#111", marginBottom: 3 }}>{t.name}</div>
            <div style={{ display: "flex", gap: 2, justifyContent: "center" }}>
              {t.colors.map((c, j) => <div key={j} style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// MOCKUP 6 — Statistics screen
const StatsScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 14, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>Statistics</div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 9 }}>Your Performance Analysis</div>
      </div>
      <span style={{ fontSize: 14 }}>🔄</span>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>General Performance</div>
      {[
        { icon: "📅", label: "Weekly", value: "100%", color: theme.primary },
        { icon: "📊", label: "Monthly", value: "100%", color: theme.primary },
        { icon: "📈", label: "Streak", value: "1d", color: "#f59e0b" },
      ].map((row, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>{row.icon}</div>
            <span style={{ fontSize: 10, color: "#555" }}>{row.label}</span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: row.color }}>{row.value}</span>
        </div>
      ))}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
        <div style={{ background: "#f9fafb", borderRadius: 8, padding: 8 }}>
          <div style={{ fontSize: 8, color: "#888" }}>Best day</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>Tuesday</div>
        </div>
        <div style={{ background: "#f9fafb", borderRadius: 8, padding: 8 }}>
          <div style={{ fontSize: 8, color: "#888" }}>Total completed</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>3 tasks</div>
        </div>
      </div>
      <div style={{ marginTop: 8, padding: "6px 10px", background: "#d1fae5", borderRadius: 8, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10 }}>🏆</span>
        <span style={{ fontSize: 9, color: "#065f46", fontWeight: 600 }}>Performance level: Excellent</span>
      </div>
    </div>
  </div>
);

// MOCKUP 7 — AI Coach screen
const CoachScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340, display: "flex", flexDirection: "column" }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 12, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🤖</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 11 }}>AI Coach</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 8 }}>Your Mind in 3 Steps</div>
        </div>
      </div>
      <span style={{ fontSize: 14 }}>👤</span>
    </div>
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ alignSelf: "flex-end", background: theme.primary, borderRadius: "12px 12px 2px 12px", padding: "6px 10px", maxWidth: "75%" }}>
        <span style={{ fontSize: 9, color: "#fff" }}>How to focus better today?</span>
      </div>
      <div style={{ background: "#fff", borderRadius: "12px 12px 12px 2px", padding: "8px 10px", maxWidth: "90%" }}>
        <div style={{ fontSize: 8, color: "#333", lineHeight: 1.5 }}>
          <div style={{ marginBottom: 3 }}>To laser-focus better today:</div>
          <div style={{ marginBottom: 2 }}><strong>1. Prioritize</strong> your 3 most important goals</div>
          <div style={{ marginBottom: 2 }}><strong>2. Work in sprints</strong> — 25 min on, 5 off</div>
          <div><strong>3. Eliminate distractions</strong> — silence notifications</div>
        </div>
      </div>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
      <span style={{ fontSize: 9, color: "#aaa" }}>Chat with your assistant...</span>
      <span style={{ fontSize: 12, color: theme.primary }}>➤</span>
    </div>
  </div>
);

// MOCKUP 8 — Settings screen
const SettingsScreen = ({ theme }) => (
  <div style={{ background: "#f5f3ff", padding: 12, minHeight: 340 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 14, padding: 14, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>Settings</div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 9 }}>Customize your experience</div>
      </div>
      <span style={{ fontSize: 14 }}>🔄</span>
    </div>
    <div style={{ background: "#fff", borderRadius: 10, padding: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Preferences</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
        {[{icon:"☀️",label:"Light",active:true},{icon:"🌙",label:"Dark",active:false},{icon:"📱",label:"System",active:false}].map((m,i) => (
          <div key={i} style={{ flex: 1, background: m.active ? theme.primary : "#f3f4f6", borderRadius: 8, padding: "6px 4px", textAlign: "center" }}>
            <div style={{ fontSize: 12 }}>{m.icon}</div>
            <div style={{ fontSize: 8, color: m.active ? "#fff" : "#888", fontWeight: m.active ? 700 : 400 }}>{m.label}</div>
          </div>
        ))}
      </div>
      {[
        { icon: "🔊", label: "Sound Effects", sub: "Play sound when completing goals", toggle: true },
        { icon: "🤖", label: "AI Features", sub: "Power up your goals with Gemini AI" },
        { icon: "🎨", label: "Theme", sub: "Customize your experience" },
        { icon: "🌐", label: "Language", sub: "Choose your preferred language" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0", borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{item.icon}</div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#111" }}>{item.label}</div>
              <div style={{ fontSize: 8, color: "#888" }}>{item.sub}</div>
            </div>
          </div>
          {item.toggle
            ? <div style={{ width: 28, height: 16, borderRadius: 8, background: theme.primary, position: "relative" }}><div style={{ position: "absolute", right: 2, top: 2, width: 12, height: 12, borderRadius: "50%", background: "#fff" }} /></div>
            : <span style={{ fontSize: 10, color: "#ccc" }}>›</span>
          }
        </div>
      ))}
    </div>
  </div>
);

const screenComponents = [GoalsScreen, SlicerScreen, CalendarScreen, PrivacyScreen, ThemesScreen, StatsScreen, CoachScreen, SettingsScreen];

export default function Features({ onNavigate, lang, setLang, theme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      {/* HERO */}
      <section style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 20%, ${theme.glow} 0%, transparent 60%)`, opacity: 0.4 }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{t.hero.tag}</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, marginBottom: 20, background: `linear-gradient(135deg,#fff 20%,${theme.accent} 80%)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t.hero.headline}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.6 }}>{t.hero.sub}</p>
        </div>
      </section>

      {/* ALL FEATURE SECTIONS */}
      {t.sections.map((section, i) => {
        const ScreenComponent = screenComponents[i];
        const isEven = i % 2 === 0;
        return (
          <section key={i} style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center", flexDirection: isEven ? "row" : "row-reverse" }}>
            <PhoneMockup theme={theme}>
              <ScreenComponent theme={theme} />
            </PhoneMockup>
            <div style={{ flex: "1 1 320px", maxWidth: 460 }}>
              <div style={{ color: theme.accent, fontWeight: 700, fontSize: 11, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>{section.tag}</div>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 16 }}>{section.headline}</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>{section.sub}</p>
              <div style={{ padding: "14px 18px", background: `${theme.primary}15`, borderLeft: `3px solid ${theme.primary}`, borderRadius: "0 10px 10px 0", color: "rgba(255,255,255,0.65)", fontSize: 14, fontStyle: "italic" }}>
                {section.label}
              </div>
            </div>
          </section>
        );
      })}

      {/* FOOTER */}
      <footer style={{ padding: "60px 32px 40px", textAlign: "center", borderTop: `1px solid ${theme.border}` }}>
        <button onClick={() => onNavigate("home")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.back}</button>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>{t.footer.rights}</div>
      </footer>
    </div>
  );
}