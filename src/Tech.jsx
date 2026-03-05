import { useState } from "react";
import Navbar from "./Navbar";

function TabletMockup({ theme }) {
  const [activeIcon, setActiveIcon] = useState(null);

  const floatingIcons = [
    { id: 0, icon: "📅", label: "Calendar", x: 58, y: 18, delay: 0 },
    { id: 1, icon: "📊", label: "Stats", x: 72, y: 32, delay: 0.3 },
    { id: 2, icon: "⭐", label: "Streak", x: 65, y: 52, delay: 0.6 },
    { id: 3, icon: "🎯", label: "Goals", x: 78, y: 65, delay: 0.9 },
    { id: 4, icon: "🧠", label: "AI", x: 55, y: 72, delay: 1.2 },
    { id: 5, icon: "🔒", label: "Privacy", x: 82, y: 45, delay: 1.5 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 700, margin: "0 auto", height: 380 }}>
      <style>{`
        @keyframes float0 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-4px,-8px) scale(1.05)} }
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(4px,-10px) scale(1.05)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-6px,-6px) scale(1.05)} }
        @keyframes float3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(5px,-8px) scale(1.05)} }
        @keyframes float4 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-3px,-10px) scale(1.05)} }
        @keyframes float5 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(6px,-6px) scale(1.05)} }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes runLeft { 0%{transform:translateX(0)} 100%{transform:translateX(-8px)} }
      `}</style>

      {/* TABLET FRAME */}
      <div style={{
        position: "absolute", left: 0, top: 0, right: 0, bottom: 0,
        background: "#0f0a1e",
        border: `2px solid ${theme.border}`,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: `0 0 60px ${theme.primary}30`,
      }}>
        {/* Screen content */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, #0d0720 0%, #1a0f3c 50%, #0d0720 100%)`,
          overflow: "hidden",
        }}>
          {/* Grid dots background */}
          <svg style={{ position: "absolute", inset: 0, opacity: 0.15 }} width="100%" height="100%">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill={theme.primary} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Connection lines from F to icons */}
          <svg style={{ position: "absolute", inset: 0 }} width="100%" height="100%">
            {floatingIcons.map((ic) => (
              <line key={ic.id}
                x1="32%" y1="50%"
                x2={`${ic.x}%`} y2={`${ic.y + 4}%`}
                stroke={activeIcon === ic.id ? theme.primary : `${theme.primary}30`}
                strokeWidth={activeIcon === ic.id ? 1.5 : 0.8}
                strokeDasharray="4 4"
                style={{ transition: "all 0.3s" }}
              />
            ))}
          </svg>

          {/* BIG F LOGO */}
          <div style={{
            position: "absolute", left: "8%", top: "50%", transform: "translateY(-50%)",
            width: 140, height: 140,
          }}>
            {/* Outer ring */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: `1px solid ${theme.primary}30`,
              animation: "pulse 3s infinite",
            }} />
            <div style={{
              position: "absolute", inset: 10, borderRadius: "50%",
              border: `1px solid ${theme.primary}20`,
              animation: "pulse 3s infinite 0.5s",
            }} />
            {/* Glow */}
            <div style={{
              position: "absolute", inset: 20, borderRadius: "50%",
              background: `radial-gradient(circle, ${theme.primary}15, transparent)`,
            }} />
            {/* F letter */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 72, fontWeight: 900, color: "#fff",
              fontFamily: "serif",
              textShadow: `0 0 30px ${theme.primary}80`,
            }}>F</div>
          </div>

          {/* LEFT TEXT */}
          <div style={{ position: "absolute", left: "38%", top: "45%", transform: "translateY(-50%)" }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase", whiteSpace: "nowrap" }}>
              FOCUS ON YOUR GOALS
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
              Track and Improve Your Performance
            </div>
          </div>

          {/* RUNNING FIGURE */}
          <div style={{
            position: "absolute", right: "6%", bottom: "20%",
            fontSize: 32,
            animation: "runLeft 0.5s ease-in-out infinite alternate",
            filter: `drop-shadow(0 0 8px ${theme.primary}60)`,
          }}>🏃</div>

          {/* FLOATING ICONS */}
          {floatingIcons.map((ic) => (
            <div key={ic.id}
              onClick={() => setActiveIcon(activeIcon === ic.id ? null : ic.id)}
              style={{
                position: "absolute",
                left: `${ic.x}%`, top: `${ic.y}%`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                animation: `float${ic.id} ${2.5 + ic.delay}s ease-in-out infinite`,
                zIndex: 10,
              }}
            >
              <div style={{
                width: activeIcon === ic.id ? 52 : 40,
                height: activeIcon === ic.id ? 52 : 40,
                borderRadius: 12,
                background: activeIcon === ic.id
                  ? `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                  : `rgba(255,255,255,0.08)`,
                border: `1px solid ${activeIcon === ic.id ? theme.primary : "rgba(255,255,255,0.15)"}`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 2,
                transition: "all 0.2s",
                boxShadow: activeIcon === ic.id ? `0 0 20px ${theme.primary}60` : "none",
              }}>
                <span style={{ fontSize: activeIcon === ic.id ? 18 : 14 }}>{ic.icon}</span>
                {activeIcon === ic.id && (
                  <span style={{ fontSize: 8, color: "#fff", fontWeight: 700 }}>{ic.label}</span>
                )}
              </div>
            </div>
          ))}

          {/* MINI PHONE bottom left */}
          <div style={{
            position: "absolute", left: "36%", bottom: "8%",
            width: 55, height: 85,
            background: "#1a0f3c",
            border: `1px solid ${theme.border}`,
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
          }}>
            <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, height: 22, display: "flex", alignItems: "center", padding: "0 5px" }}>
              <span style={{ fontSize: 6, color: "#fff", fontWeight: 700 }}>FocusTabs</span>
            </div>
            <div style={{ padding: 4 }}>
              {["Meditate 🧘","AI Slicer 🧠","Launch 🚀"].map((g, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 3, padding: "2px 4px", marginBottom: 2, fontSize: 5, color: "#333", fontWeight: 600 }}>{g}</div>
              ))}
            </div>
          </div>

          {/* Tablet notch */}
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 40, height: 4, borderRadius: 2, background: "#1a1040" }} />
        </div>
      </div>
    </div>
  );
}

const translations = {
  en: {
    hero: {
      tag: "The Architecture",
      headline: "FAANG-level local engineering.",
      sub: "FocusTabs is built for the next decade. A high-performance, offline-first system designed for reliability and speed.",
    },
    stack: {
      title: "Core Technology Stack",
      items: [
        { title: "React Native & Expo SDK 55", body: "Unified codebase for Android and iOS. Near-native performance with hot reload, OTA updates, and full TypeScript type safety across every module." },
        { title: "Zustand State Management", body: "Ultra-lightweight reactive state — under 1KB. No boilerplate, no reducers. The UI stays fluid at 60 FPS even on low-end devices." },
        { title: "SQLite Local Database", body: "All data stored on-device using expo-sqlite. Zero network calls for core functionality. Your goals, streaks, and history never leave your phone." },
      ]
    },
    ai: {
      title: "Gemini AI Integration",
      items: [
        { label: "AI Task Slicer", body: "Sends your goal text to Gemini API and returns exactly 3 tactical sub-steps. Structured output parsing ensures consistent formatting every time." },
        { label: "AI Goal Refiner", body: "Analyzes vague input and rewrites it as a single, actionable power goal. Prompt-engineered for brevity and clarity." },
        { label: "AI Coach", body: "A personalized guide powered by Gemini that retains the full context of your journey. By securely analyzing your local history, it provides coaching tailored to your specific patterns." },
        { label: "BYOK Model", body: "You provide your own Gemini API key. The key is stored locally in SQLite, never transmitted to our servers. No account, no subscription required for AI features." },
        { label: "Smart Context Tagging", body: "Automatically categorizes your goals into themes like Health, Career, or Personal. Uses zero-shot classification to keep your dashboard organized and high-velocity." },
        { label: "AI Task Refinement", body: "Beyond simple slicing, the AI continuously polishes your sub-tasks into high-velocity, low-friction objectives that eliminate decision fatigue." },
      ]
    },
    perf: {
      title: "Performance Targets",
      items: [
        { metric: "< 2s", label: "Cold start time" },
        { metric: "60fps", label: "UI render rate" },
        { metric: "0", label: "Network calls (offline mode)" },
        { metric: "100%", label: "Local data storage" },
      ]
    },
    decisions: {
      title: "Key Design Decisions",
      items: [
        { title: "Why 3 goals only?", body: "Cognitive load research consistently shows that limiting daily priorities to 3 improves completion rates. The constraint is intentional, not a limitation." },
        { title: "Why offline-first?", body: "Most productivity apps require an internet connection to function. FocusTabs works fully without one. This also eliminates a whole class of privacy risks." },
        { title: "Why BYOK instead of a subscription?", body: "Subscriptions create misaligned incentives — the app needs to keep you engaged to justify the fee. BYOK means the app has no reason to harvest your attention." },
        { title: "Why SQLite over cloud sync?", body: "Cloud sync introduces latency, complexity, and data exposure. SQLite is fast, reliable, and battle-tested. The tradeoff is no cross-device sync — a deliberate choice." },
      ]
    },
    easter: {
      title: "Easter Egg",
      body: "A real-time 4D Raymarching shader — 'Reality Breach' — is hidden inside the app. It's a stress test disguised as a secret. Find it if you can.",
    },
    footer: { back: "← Back to Home", rights: "© 2026 FocusTabs." }
  },
  tr: {
    hero: {
      tag: "Mimari Yapı",
      headline: "FAANG seviyesinde yerel mühendislik.",
      sub: "FocusTabs önümüzdeki on yıl için inşa edildi. Güvenilirlik ve hız için tasarlanmış yüksek performanslı, çevrimdışı öncelikli bir sistem.",
    },
    stack: {
      title: "Temel Teknoloji Yığını",
      items: [
        { title: "React Native & Expo SDK 55", body: "Android ve iOS için tek kod tabanı. Hot reload, OTA güncellemeler ve her modülde tam TypeScript tip güvenliği ile yerel performansa yakın deneyim." },
        { title: "Zustand Durum Yönetimi", body: "1KB'ın altında ultra hafif reaktif state yönetimi. Boilerplate yok, reducer yok. Düşük seviyeli cihazlarda bile arayüz 60 FPS akıcılığını korur." },
        { title: "Yerel SQLite Veritabanı", body: "Tüm veriler expo-sqlite ile cihazda saklanır. Temel işlevsellik için sıfır ağ çağrısı. Hedefleriniz, serileriniz ve geçmişiniz telefonunuzu asla terk etmez." },
      ]
    },
    ai: {
      title: "Gemini AI Entegrasyonu",
      items: [
        { label: "AI Görev Parçalayıcı", body: "Hedef metninizi Gemini API'ye gönderir ve tam olarak 3 taktiksel alt adım döndürür. Yapılandırılmış çıktı ayrıştırma her seferinde tutarlı biçimlendirme sağlar." },
        { label: "AI Hedef Geliştirici", body: "Belirsiz girdiyi analiz eder ve tek, eyleme geçirilebilir bir güç hedefine dönüştürür. Kısalık ve netlik için prompt mühendisliği uygulanmıştır." },
        { label: "AI Koç", body: "Yolculuğunuzun tüm bağlamını hatırlayan Gemini destekli kişisel rehber. Yerel geçmişinizi güvenli bir şekilde analiz ederek, size özel gelişim örüntülerinize dayalı rehberlik sunar." },
        { label: "BYOK Modeli", body: "Kendi Gemini API anahtarınızı sağlarsınız. Anahtar yerel olarak SQLite'da saklanır, sunucularımıza iletilmez. AI özellikleri için hesap veya abonelik gerekmez." },
        { label: "Akıllı Bağlam Etiketleme", body: "Hedeflerinizi otomatik olarak Sağlık, Kariyer veya Kişisel gibi temalara ayırır. Panonuzu düzenli ve yüksek tempolu tutmak için zero-shot sınıflandırma kullanır." },
        { label: "AI Görev Rafinesi", body: "Sadece parçalara bölmekle kalmaz; yapay zeka alt görevlerinizi karar yorgunluğunu ortadan kaldıran, yüksek tempolu ve net hedeflere dönüştürür." },
      ]
    },
    perf: {
      title: "Performans Hedefleri",
      items: [
        { metric: "< 2s", label: "Soğuk başlatma süresi" },
        { metric: "60fps", label: "Arayüz render hızı" },
        { metric: "0", label: "Ağ çağrısı (çevrimdışı mod)" },
        { metric: "%100", label: "Yerel veri depolama" },
      ]
    },
    decisions: {
      title: "Temel Tasarım Kararları",
      items: [
        { title: "Neden sadece 3 hedef?", body: "Bilişsel yük araştırmaları, günlük öncelikleri 3 ile sınırlamanın tamamlanma oranlarını artırdığını tutarlı biçimde gösteriyor. Kısıtlama kasıtlı, bir sınırlama değil." },
        { title: "Neden çevrimdışı öncelikli?", body: "Çoğu üretkenlik uygulaması internet bağlantısı gerektirir. FocusTabs bağlantı olmadan tam çalışır. Bu aynı zamanda gizlilik risklerinin tamamını ortadan kaldırır." },
        { title: "Neden abonelik yerine BYOK?", body: "Abonelikler yanlış hizalanmış teşvikler yaratır — uygulamanın ücreti haklı çıkarmak için sizi meşgul tutması gerekir. BYOK, uygulamanın dikkatinizi çalmak için hiçbir nedeni olmadığı anlamına gelir." },
        { title: "Neden bulut senkronizasyonu yerine SQLite?", body: "Bulut senkronizasyonu gecikme, karmaşıklık ve veri maruziyeti getirir. SQLite hızlı, güvenilir ve savaş testinden geçmiştir. Takas cihazlar arası senkronizasyon yok — bilinçli bir seçim." },
      ]
    },
    easter: {
      title: "Easter Egg",
      body: "Uygulamanın içinde gerçek zamanlı bir 4D Raymarching shader gizlidir — 'Reality Breach'. Gizli kılıkta bir stres testidir. Bulabilirsen bul.",
    },
    footer: { back: "← Ana Sayfaya Dön", rights: "© 2026 FocusTabs." }
  }
};

const MIND_MAP_DATA = {
  en: {
    center: "FocusTabs",
    branches: [
      {
        label: "Core Philosophy",
        color: "#7c3aed",
        nodes: ["3 Goals Per Day", "Minimalism", "Intentional Prioritization", "Reduce Burnout"],
      },
      {
        label: "Key Features",
        color: "#6366f1",
        nodes: ["Daily Focus", "Calendar View", "Performance Stats", "Dark & Light Mode", "Midnight Reset"],
      },
      {
        label: "Premium AI (BYOK)",
        color: "#8b5cf6",
        nodes: ["AI Goal Refiner", "AI Task Slicer", "AI Coach", "Weekly Analysis"],
      },
      {
        label: "Privacy & Security",
        color: "#10b981",
        nodes: ["Fully Offline", "No Account", "Zero Data Collection", "Ad-Free", "Local SQLite"],
      },
      {
        label: "Tech Stack",
        color: "#06b6d4",
        nodes: ["React Native & Expo", "TypeScript", "Zustand", "Gemini AI", "Zero Dependency Design"],
      },
      {
        label: "UI",
        color: "#ec4899",
        nodes: ["2026 Aesthetics", "Gradient Cards", "Lucide Icons", "Minimal Themes"],
      },
    ],
  },
  tr: {
    center: "FocusTabs",
    branches: [
      {
        label: "Temel Felsefe",
        color: "#7c3aed",
        nodes: ["Günde Sadece 3 Hedef", "Minimalizm ve Sadelik", "Kasıtlı Önceliklendirme", "Tükenmişliği Azaltma"],
      },
      {
        label: "Ana Özellikler",
        color: "#6366f1",
        nodes: ["Günlük Odaklanma", "Takvim Görünümü", "Performans İstatistikleri", "Karanlık ve Aydınlık Mod", "Gece Yarısı Sıfırlama"],
      },
      {
        label: "Premium AI (BYOK)",
        color: "#8b5cf6",
        nodes: ["AI Hedef İyileştirici", "AI Görev Dilimleyici", "AI Koç (Rehberlik)", "Haftalık Verimlilik Analizi"],
      },
      {
        label: "Gizlilik ve Güvenlik",
        color: "#10b981",
        nodes: ["Tamamen Çevrimdışı", "Hesap Gerektirmez", "Veri Toplama Yok", "Reklamsız Deneyim", "Yerel SQLite Depolama"],
      },
      {
        label: "Teknik Altyapı",
        color: "#06b6d4",
        nodes: ["React Native & Expo", "TypeScript", "Zustand Durum Yönetimi", "Gemini AI Entegrasyonu", "Sıfır Bağımlılık Tasarımı"],
      },
      {
        label: "Kullanıcı Arayüzü",
        color: "#ec4899",
        nodes: ["2025 Estetiği", "Gradyan Kartlar", "Lucide İkonlar", "Minimal Temalar"],
      },
    ],
  },
};

function MindMap({ theme, lang }) {
  const [expanded, setExpanded] = useState(null);
  const data = MIND_MAP_DATA[lang];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      
      {/* CENTER NODE */}
      <div style={{
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
        borderRadius: 20,
        padding: "16px 32px",
        fontSize: 20,
        fontWeight: 900,
        color: "#fff",
        marginBottom: 40,
        boxShadow: `0 0 40px ${theme.primary}60`,
        letterSpacing: -0.5,
      }}>
        {data.center}
      </div>

      {/* BRANCHES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, width: "100%" }}>
        {data.branches.map((branch, i) => (
          <div key={i}
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{
              background: expanded === i ? `${branch.color}18` : "rgba(255,255,255,0.03)",
              border: `1px solid ${expanded === i ? branch.color + "80" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 16,
              padding: "16px 20px",
              cursor: "pointer",
              transition: "all 0.2s",
              borderLeft: `3px solid ${branch.color}`,
            }}
          >
            {/* Branch header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: expanded === i ? 14 : 0 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: branch.color }}>{branch.label}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", transition: "transform 0.2s", display: "inline-block", transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
            </div>

            {/* Nodes — visible when expanded */}
            {expanded === i && (
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {branch.nodes.map((node, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "6px 10px",
                    background: `${branch.color}12`,
                    borderRadius: 8,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.75)",
                    animation: "fadeIn 0.15s ease",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: branch.color, flexShrink: 0 }} />
                    {node}
                  </div>
                ))}
              </div>
            )}

            {/* Node count badge when collapsed */}
            {expanded !== i && (
              <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                {branch.nodes.slice(0, 3).map((node, j) => (
                  <span key={j} style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 6 }}>
                    {node}
                  </span>
                ))}
                {branch.nodes.length > 3 && (
                  <span style={{ fontSize: 10, color: branch.color + "80", padding: "2px 8px" }}>+{branch.nodes.length - 3}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Tech({ onNavigate, lang, setLang, theme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      {/* HERO */}
      <section style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 32px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: `${theme.secondary}05`, filter: "blur(120px)" }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{t.hero.tag}</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, marginBottom: 20, background: `linear-gradient(135deg, #fff 20%, ${theme.accent} 80%)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t.hero.headline}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 19, lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>{t.hero.sub}</p>
        </div>
      </section>

      {/* TABLET HERO */}
      <section style={{ padding: "0 32px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <TabletMockup theme={theme} />
      </section>

      {/* MIND MAP */}
      <section style={{ padding: "40px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 12, letterSpacing: -1 }}>
          {lang === "en" ? "Complete Architecture Map" : "Tam Mimari Harita"}
        </h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 48 }}>
          {lang === "en" ? "Click any node to expand" : "Genişletmek için tıklayın"}
        </p>

        <MindMap theme={theme} lang={lang} />
      </section>

      {/* STACK */}
      <section style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 40, letterSpacing: -1 }}>{t.stack.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {t.stack.items.map((item, i) => (
            <div key={i} style={{ padding: 32, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, borderTop: `3px solid ${theme.primary}` }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${theme.primary}80`}
              onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: theme.accent, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          {["React Native", "Expo SDK 55", "TypeScript", "Zustand", "SQLite", "Gemini AI", "expo-sqlite"].map((tech, i) => (
            <div key={i} style={{ background: `${theme.primary}1a`, border: `1px solid ${theme.primary}40`, borderRadius: 20, padding: "6px 16px", fontSize: 12, color: theme.accent, fontWeight: 600 }}>{tech}</div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE */}
      <section style={{ padding: "60px 32px", background: `linear-gradient(180deg, transparent, ${theme.primary}08, transparent)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 40, letterSpacing: -1 }}>{t.perf.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {t.perf.items.map((item, i) => (
              <div key={i} style={{ padding: 32, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: theme.accent, marginBottom: 8 }}>{item.metric}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section style={{ padding: "60px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 40, letterSpacing: -1 }}>{t.ai.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {t.ai.items.map((item, i) => (
            <div key={i} style={{ padding: 28, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: theme.accent, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>{item.label}</div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section style={{ padding: "60px 32px", background: `linear-gradient(180deg, transparent, ${theme.secondary}08, transparent)` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 40, letterSpacing: -1 }}>{t.decisions.title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {t.decisions.items.map((item, i) => (
              <div key={i} style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 20, borderLeft: `3px solid ${theme.primary}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#fff" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EASTER EGG */}
      <section style={{ padding: "60px 32px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ padding: 32, background: `${theme.primary}0d`, border: `1px solid ${theme.primary}30`, borderRadius: 24 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>👁️</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12, color: theme.accent }}>{t.easter.title}</h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>{t.easter.body}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "60px 32px 40px", textAlign: "center" }}>
        <button onClick={() => onNavigate("home")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.back}</button>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>{t.footer.rights}</div>
      </footer>
    </div>
  );
}

export default Tech;