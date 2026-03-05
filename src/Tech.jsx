import { useState } from "react";
import Navbar from "./Navbar";

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
        { title: "React Native & Expo", body: "Leveraging SDK 55 for unified, near-native performance across platforms with 100% TypeScript type safety." },
        { title: "Zustand State", body: "Ultra-lightweight, reactive state management that ensures the UI stays fluid at 60 FPS." },
        { title: "SQLite Local", body: "A hardened, local-only database architecture. Your data never touches the cloud, ensuring absolute privacy." },
      ]
    },
    ai: {
      title: "Gemini AI Integration",
      body: "Deep integration with Google's Gemini models. Using a BYOK (Bring Your Own Key) model, the app performs complex task slicing and goal refinement locally without data harvesting.",
      detail: "Secure API Communication · No Data Training · Zero Leak Risk"
    },
    easter: {
      title: "Hidden Complexity",
      body: "For the curious: Under the hood lies a real-time 4D Raymarching 'Reality Breach' engine. It's an easter egg that proves the performance ceiling of our architecture.",
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
        { title: "React Native & Expo", body: "SDK 55 kullanarak platformlar arası %100 TypeScript tip güvenliği ile yerel performansa yakın deneyim." },
        { title: "Zustand Durum Yönetimi", body: "Arayüzün 60 FPS'de akıcı kalmasını sağlayan ultra hafif, reaktif durum yönetimi." },
        { title: "Yerel SQLite", body: "Sertleştirilmiş, yalnızca yerel veritabanı mimarisi. Verileriniz buluta asla dokunmaz, mutlak gizlilik sağlar." },
      ]
    },
    ai: {
      title: "Gemini AI Entegrasyonu",
      body: "Google'ın Gemini modelleriyle derin entegrasyon. BYOK (Kendi Anahtarını Getir) modelini kullanarak, uygulama veri hasadı yapmadan karmaşık görev parçalama ve hedef iyileştirme işlemlerini yerel olarak gerçekleştirir.",
      detail: "Güvenli API İletişimi · Veri Eğitimi Yok · Sıfır Sızıntı Riski"
    },
    easter: {
      title: "Gizli Karmaşıklık",
      body: "Meraklısı için: Kaputun altında gerçek zamanlı bir 4D Raymarching 'Reality Breach' motoru yatar. Bu, mimarimizin performans tavanını kanıtlayan bir easter egg'dir.",
    },
    footer: { back: "← Ana Sayfaya Dön", rights: "© 2026 FocusTabs." }
  }
};

function Tech({ onNavigate, lang, setLang, theme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: `${theme.secondary}05`, filter: "blur(120px)" }} />
        
        <div style={{ position: "relative", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{t.hero.tag}</div>
          <div style={{ filter: "drop-shadow(0 4px 15px rgba(0,0,0,1))" }}>
            <h1 style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              fontWeight: 900, 
              marginBottom: 20, 
              color: theme.accent,
              background: `linear-gradient(135deg, #fff 20%, ${theme.accent} 80%)`, 
              WebkitBackgroundClip: "text", 
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {t.hero.headline}
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 19, lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>{t.hero.sub}</p>
        </div>
      </section>

      <section style={{ padding: "60px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 40, letterSpacing: -1 }}>{t.stack.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {t.stack.items.map((item, i) => (
            <div key={i} style={{ padding: 32, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${theme.primary}80`}
              onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, color: theme.accent, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "80px 32px 40px", textAlign: "center" }}>
        <button onClick={() => onNavigate("home")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.back}</button>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>{t.footer.rights}</div>
      </footer>
    </div>
  );
}

export default Tech;
