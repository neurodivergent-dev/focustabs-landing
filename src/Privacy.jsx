import { useState } from "react";
import Navbar from "./Navbar";

const translations = {
  en: {
    hero: {
      tag: "Privacy First",
      headline: "Private by default.",
      sub: "Offline. No tracking. No accounts.",
    },
    mockup: {
      title: "Privacy Policy",
      commitment: "Our Privacy Commitment",
      commitmentBody: "FocusTabs is engineered with a strict privacy-first approach. We believe your personal data belongs to you, which is why everything stays on your device and is never collected.",
      dataTitle: "Data Collection",
      items: [
        { label: "Zero Data Collection:", body: "The application operates entirely offline. No data collection mechanisms, period." },
        { label: "Local Storage Only:", body: "All your goal information and settings stay on your device, never transmitted elsewhere." },
        { label: "No Third-Party Analytics:", body: "We don't use any third-party analytics or tracking tools of any kind." },
      ]
    },
    sections: [
      { title: "100% Offline-First", body: "FocusTabs works entirely without an internet connection. No remote servers, no cloud sync, no databases harvesting your information. Everything stays on your device.", icon: "📵" },
      { title: "No Accounts, No Tracking", body: "No registration, no email required, zero third-party analytics. Your productivity patterns are for your eyes only.", icon: "👤" },
      { title: "BYOK AI Model", body: "For AI features, you bring your own Gemini API key. The connection is directly between you and Google. FocusTabs acts only as a local interface — we never see your keys or your prompts.", icon: "🔑" },
    ],
    bottom: "Focus without compromise.",
    footer: { back: "← Back to Home", rights: "© 2026 FocusTabs." }
  },
  tr: {
    hero: {
      tag: "Gizlilik Önceliği",
      headline: "Varsayılan olarak gizli.",
      sub: "Çevrimdışı. Takip yok. Hesap yok.",
    },
    mockup: {
      title: "Gizlilik Politikası",
      commitment: "Gizlilik Taahhüdümüz",
      commitmentBody: "FocusTabs katı bir gizlilik öncelikli yaklaşımla tasarlandı. Kişisel verilerinizin size ait olduğuna inanıyoruz; bu nedenle her şey cihazınızda kalır ve asla toplanmaz.",
      dataTitle: "Veri Toplama",
      items: [
        { label: "Sıfır Veri Toplama:", body: "Uygulama tamamen çevrimdışı çalışır. Hiçbir veri toplama mekanizması yoktur." },
        { label: "Yalnızca Yerel Depolama:", body: "Tüm hedef bilgileriniz ve ayarlarınız cihazınızda kalır, hiçbir yere iletilmez." },
        { label: "Üçüncü Taraf Analitik Yok:", body: "Herhangi bir üçüncü taraf analitik veya izleme aracı kullanmıyoruz." },
      ]
    },
    sections: [
      { title: "%100 Çevrimdışı", body: "FocusTabs tamamen internet bağlantısı olmadan çalışır. Uzak sunucu yok, bulut senkronizasyonu yok, bilgi toplayan veritabanı yok. Her şey cihazınızda kalır.", icon: "📵" },
      { title: "Hesap Yok, Takip Yok", body: "Kayıt yok, e-posta gerekmez, sıfır üçüncü taraf analitiği. Üretkenlik örüntüleriniz sadece sizin gözleriniz içindir.", icon: "👤" },
      { title: "BYOK AI Modeli", body: "Yapay zeka özellikleri için kendi Gemini API anahtarınızı getirirsiniz. Bağlantı doğrudan sizinle Google arasındadır. FocusTabs yalnızca yerel arayüz görevi görür — anahtarlarınızı veya istemlerinizi asla görmüyoruz.", icon: "🔑" },
    ],
    bottom: "Taviz vermeden odaklanın.",
    footer: { back: "← Ana Sayfaya Dön", rights: "© 2026 FocusTabs." }
  }
};

const PhoneMockup = ({ children, theme }) => (
  <div style={{
    position: "relative",
    width: 260,
    margin: "0 auto",
    filter: `drop-shadow(0 0 40px ${theme.primary}40)`,
  }}>
    <div style={{
      background: "#0f0a1e",
      borderRadius: 36,
      border: `2px solid ${theme.border}`,
      padding: "10px 8px",
      overflow: "hidden",
    }}>
      <div style={{ background: "#111", borderRadius: 28, overflow: "hidden" }}>
        <div style={{ height: 20, background: "#0f0a1e", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 60, height: 6, borderRadius: 3, background: "#1a1040" }} />
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default function Privacy({ onNavigate, lang, setLang, theme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      {/* HERO */}
      <section style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 20%, ${theme.glow} 0%, transparent 60%)`, opacity: 0.4 }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{t.hero.tag}</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, marginBottom: 16, background: `linear-gradient(135deg,#fff 20%,${theme.accent} 80%)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t.hero.headline}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 20, letterSpacing: 1 }}>{t.hero.sub}</p>
        </div>
      </section>

      {/* MOCKUP + CARDS */}
      <section style={{ padding: "40px 32px 80px", maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>
        
        {/* PHONE MOCKUP */}
        <div style={{ flexShrink: 0 }}>
          <PhoneMockup theme={theme}>
            <div style={{ background: `linear-gradient(160deg, #1a0f3c, #0f0a2e)`, padding: 16, minHeight: 420 }}>
              
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", fontSize: 20 }}>🛡️</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.mockup.title}</div>
              </div>

              {/* Commitment card */}
              <div style={{ background: "#fff", borderRadius: 12, padding: 12, marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#111", marginBottom: 6 }}>{t.mockup.commitment}</div>
                <div style={{ fontSize: 10, color: "#555", lineHeight: 1.5 }}>{t.mockup.commitmentBody}</div>
              </div>

              {/* Data collection card */}
              <div style={{ background: "#fff", borderRadius: 12, padding: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#111", marginBottom: 8 }}>{t.mockup.dataTitle}</div>
                {t.mockup.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 7, color: "#10b981" }}>✓</span>
                    </div>
                    <div style={{ fontSize: 9, color: "#333", lineHeight: 1.4 }}>
                      <span style={{ fontWeight: 700 }}>{item.label}</span> {item.body}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </PhoneMockup>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div style={{ flex: "1 1 320px", maxWidth: 480, display: "flex", flexDirection: "column", gap: 20 }}>
          {t.sections.map((section, i) => (
            <div key={i} style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 20, display: "flex", gap: 16, alignItems: "flex-start",
              transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${theme.primary}80`}
              onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${theme.primary}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{section.icon}</div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6, color: "#fff" }}>{section.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{section.body}</p>
              </div>
            </div>
          ))}

          {/* Bottom label */}
          <div style={{ padding: "16px 20px", background: `${theme.primary}15`, borderLeft: `3px solid ${theme.primary}`, borderRadius: "0 12px 12px 0", color: "rgba(255,255,255,0.7)", fontSize: 14, fontStyle: "italic", fontWeight: 500 }}>
            {t.bottom}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 32px", textAlign: "center" }}>
        <button onClick={() => onNavigate("home")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.back}</button>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>{t.footer.rights}</div>
      </footer>
    </div>
  );
}