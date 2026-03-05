import { useState } from "react";
import Navbar from "./Navbar";

const translations = {
  en: {
    hero: {
      tag: "Deep Dive",
      headline: "Engineered for Focus.",
      sub: "Explore the technical craft and intentional design behind FocusTabs. No distractions, just pure performance.",
    },
    slicer: {
      title: "AI Task Slicer",
      subtitle: "Complexity is the enemy of action.",
      body: "Our custom Gemini-integrated engine doesn't just list tasks. It analyzes the linguistic structure of your goals to identify the three most critical tactical steps. It's not a to-do list; it's a strike plan.",
      detail1: "Context-aware decomposition",
      detail2: "Verbal-to-Action mapping",
      detail3: "Zero-latency local processing",
    },
    privacy: {
      title: "Hardened Privacy",
      subtitle: "Your data never leaves the glass.",
      body: "FocusTabs is built on an offline-first SQLite architecture. We don't have servers to store your data, which means there's nothing to hack, leak, or sell. You are the only owner of your mind's map.",
      feature1: "AES-256 Local Encryption",
      feature2: "No Cloud Handshakes",
      feature3: "Open Source Core",
    },
    performance: {
      title: "2026 Performance",
      subtitle: "60 FPS. 0ms Latency. Pure Native.",
      body: "Built with React Native and Expo SDK 55, FocusTabs utilizes a custom Zustand store for instant-reactive state management. The UI is designed to feel 'weightless' — moving at the speed of thought.",
    },
    footer: { back: "← Back to Home", rights: "© 2026 FocusTabs." }
  },
  tr: {
    hero: {
      tag: "Derinlemesine Bakış",
      headline: "Odaklanma için Mühendislik.",
      sub: "FocusTabs'in arkasındaki teknik zanaati ve kasıtlı tasarımı keşfedin. Dikkat dağıtıcı unsurlar yok, sadece saf performans.",
    },
    slicer: {
      title: "AI Görev Parçalayıcı",
      subtitle: "Karmaşıklık eylemin düşmanıdır.",
      body: "Özel Gemini entegreli motorumuz sadece görevleri listelemez. En kritik üç taktik adımı belirlemek için hedeflerinizin dilsel yapısını analiz eder. Bu bir yapılacaklar listesi değil; bir saldırı planıdır.",
      detail1: "Bağlam duyarlı ayrıştırma",
      detail2: "Sözden-Eyleme haritalama",
      detail3: "Sıfır gecikmeli yerel işleme",
    },
    privacy: {
      title: "Sertleştirilmiş Gizlilik",
      subtitle: "Verileriniz camdan asla çıkmaz.",
      body: "FocusTabs, çevrimdışı öncelikli bir SQLite mimarisi üzerine kurulmuştur. Verilerinizi depolayacak sunucularımız yok, bu da hacklenecek, sızdırılacak veya satılacak bir şey olmadığı anlamına gelir. Zihninizin haritasının tek sahibi sizsiniz.",
      feature1: "AES-256 Yerel Şifreleme",
      feature2: "Bulut El Sıkışması Yok",
      feature3: "Açık Kaynak Çekirdek",
    },
    performance: {
      title: "2026 Performansı",
      subtitle: "60 FPS. 0ms Gecikme. Saf Yerel.",
      body: "React Native ve Expo SDK 55 ile oluşturulan FocusTabs, anında tepki veren durum yönetimi için özel bir Zustand deposu kullanır. Arayüz, 'ağırlıksız' hissettirmek için tasarlanmıştır — düşünce hızında hareket eder.",
    },
    footer: { back: "← Ana Sayfaya Dön", rights: "© 2026 FocusTabs." }
  }
};

export default function Features({ onNavigate, lang, setLang, theme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      {/* HERO */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 20%, ${theme.glow} 0%, transparent 60%)`, opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "10%", left: "20%", width: 300, height: 300, borderRadius: "50%", background: `${theme.secondary}08`, filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "20%", width: 250, height: 250, borderRadius: "50%", background: `${theme.primary}08`, filter: "blur(100px)" }} />

        <div style={{ position: "relative", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{t.hero.tag}</div>
          <div style={{ filter: "drop-shadow(0 4px 15px rgba(0,0,0,1))" }}>
            <h1 style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              fontWeight: 900, 
              marginBottom: 20, 
              color: theme.accent,
              display: "inline-block",
              background: `linear-gradient(135deg,#fff 20%,${theme.accent} 80%)`, 
              WebkitBackgroundClip: "text", 
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "100%",
            }}>
              {t.hero.headline}
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.6 }}>{t.hero.sub}</p>
        </div>
      </section>

      {/* DETAILED FEATURES */}
      <section style={{ padding: "40px 32px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          
          {/* AI SLICER DETAIL */}
          <div style={{ padding: 32, background: "rgba(255,255,255,0.02)", border: `1px solid ${theme.border}`, borderRadius: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 20 }}>🧠</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{t.slicer.title}</h2>
            <p style={{ color: theme.accent, fontWeight: 600, marginBottom: 16 }}>{t.slicer.subtitle}</p>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24 }}>{t.slicer.body}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[t.slicer.detail1, t.slicer.detail2, t.slicer.detail3].map((d, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: theme.primary }}>→</span> {d}
                </li>
              ))}
            </ul>
          </div>

          {/* PRIVACY DETAIL */}
          <div style={{ padding: 32, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 24 }}>
            <div style={{ fontSize: 32, marginBottom: 20 }}>🛡️</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{t.privacy.title}</h2>
            <p style={{ color: "#10b981", fontWeight: 600, marginBottom: 16 }}>{t.privacy.subtitle}</p>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24 }}>{t.privacy.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[t.privacy.feature1, t.privacy.feature2, t.privacy.feature3].map((f, i) => (
                <span key={i} style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", padding: "4px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{f}</span>
              ))}
            </div>
          </div>

        </div>

        {/* PERFORMANCE SECTION */}
        <div style={{ marginTop: 40, padding: 40, background: `linear-gradient(135deg, ${theme.secondary}1a, ${theme.primary}1a)`, borderRadius: 32, border: `1px solid ${theme.border}`, textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>{t.performance.title}</h2>
          <p style={{ color: theme.accent, fontWeight: 600, marginBottom: 16 }}>{t.performance.subtitle}</p>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>{t.performance.body}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 32 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900 }}>60</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>FPS</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
            <div>
              <div style={{ fontSize: 24, fontWeight: 900 }}>0ms</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Latency</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
            <div>
              <div style={{ fontSize: 24, fontWeight: 900 }}>100%</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Offline</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "80px 32px 40px", textAlign: "center" }}>
        <button 
          onClick={() => onNavigate("home")}
          style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20 }}
        >
          {t.footer.back}
        </button>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>{t.footer.rights}</div>
      </footer>
    </div>
  );
}
