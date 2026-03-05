import { useState } from "react";
import Navbar from "./Navbar";

const translations = {
  en: {
    hero: {
      tag: "Privacy First",
      headline: "Your data stays on your glass.",
      sub: "FocusTabs is engineered to be a fortress. We don't just protect your privacy; we don't even have access to it.",
    },
    sections: [
      {
        title: "100% Offline-First",
        body: "FocusTabs works entirely without an internet connection. There are no remote servers, no cloud sync, and no databases harvesting your information. Everything stays on your device.",
        icon: "📵"
      },
      {
        title: "No Accounts, No Tracking",
        body: "We don't want to know who you are. There's no registration, no email required, and zero third-party analytics. Your productivity patterns are for your eyes only.",
        icon: "👤"
      },
      {
        title: "BYOK AI Model",
        body: "For AI features, you bring your own Gemini API key. This means the connection is directly between you and Google, with FocusTabs acting only as a local interface. We never see your keys or your prompts.",
        icon: "🔑"
      },
      {
        title: "SQLite Encryption",
        body: "Your daily goals are stored in a local SQLite database, protected by system-level file encryption. Even if someone gets physical access to your device, your mind's map is secure.",
        icon: "🔒"
      }
    ],
    footer: { back: "← Back to Home", rights: "© 2026 FocusTabs." }
  },
  tr: {
    hero: {
      tag: "Gizlilik Önceliği",
      headline: "Verileriniz cihazınızda kalır.",
      sub: "FocusTabs bir kale gibi tasarlandı. Gizliliğinizi sadece korumuyoruz; ona erişimimiz bile yok.",
    },
    sections: [
      {
        title: "%100 Çevrimdışı",
        body: "FocusTabs tamamen internet bağlantısı olmadan çalışır. Uzak sunucular, bulut senkronizasyonu veya bilgilerinizi toplayan veritabanları yoktur. Her şey cihazınızda kalır.",
        icon: "📵"
      },
      {
        title: "Hesap Yok, Takip Yok",
        body: "Kimin olduğunuzu bilmek istemiyoruz. Kayıt yok, e-posta gerekmez ve sıfır üçüncü taraf analitiği. Üretkenlik örüntüleriniz sadece sizin gözleriniz içindir.",
        icon: "👤"
      },
      {
        title: "BYOK AI Modeli",
        body: "Yapay zeka özellikleri için kendi Gemini API anahtarınızı getirirsiniz. Bu, bağlantının doğrudan sizinle Google arasında olduğu, FocusTabs'in yalnızca yerel bir arayüz görevi gördüğü anlamına gelir. Anahtarlarınızı veya istemlerinizi asla görmüyoruz.",
        icon: "🔑"
      },
      {
        title: "SQLite Şifreleme",
        body: "Günlük hedefleriniz, sistem düzeyinde dosya şifrelemesiyle korunan yerel bir SQLite veritabanında saklanır. Birisi cihazınıza fiziksel erişim sağlasa bile, zihninizin haritası güvendedir.",
        icon: "🔒"
      }
    ],
    footer: { back: "← Ana Sayfaya Dön", rights: "© 2026 FocusTabs." }
  }
};

export default function Privacy({ onNavigate, lang, setLang, theme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      {/* HERO */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 20%, ${theme.glow} 0%, transparent 60%)`, opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 300, height: 300, borderRadius: "50%", background: `${theme.secondary}10`, filter: "blur(100px)" }} />
        
        <div style={{ position: "relative", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{t.hero.tag}</div>
          <div style={{ filter: "drop-shadow(0 4px 15px rgba(0,0,0,1))" }}>
            <h1 style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              fontWeight: 900, 
              marginBottom: 20, 
              color: theme.accent,
              background: `linear-gradient(135deg,#fff 20%,${theme.accent} 80%)`, 
              WebkitBackgroundClip: "text", 
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {t.hero.headline}
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 19, lineHeight: 1.6 }}>{t.hero.sub}</p>
        </div>
      </section>

      {/* PRIVACY GRID */}
      <section style={{ padding: "40px 32px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 32 }}>
          {t.sections.map((section, i) => (
            <div key={i} style={{ padding: 40, background: `${theme.primary}0d`, border: `1px solid ${theme.border}`, borderRadius: 32 }}>
              <div style={{ fontSize: 32, marginBottom: 20 }}>{section.icon}</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: theme.accent }}>{section.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section style={{ padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: 40, background: "rgba(255,255,255,0.02)", borderRadius: 32, border: "1px solid rgba(255,255,255,0.05)" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Privacy Commitment</h3>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, fontStyle: "italic" }}>
            "FocusTabs was built because we believe productivity shouldn't come at the cost of surveillance. Your mind is the most private place you have; we intend to keep it that way."
          </p>
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
