import { useState } from "react";
import Navbar from "./Navbar";

const translations = {
  en: {
    hero: {
      tag: "Your Mind in 3 Steps",
      headline: "Do less. Achieve more.",
      sub: "Manage your mind in 3 steps with 2026 aesthetics. Designed for a high-performance life, free from chaos.",
      cta: "Download Free",
      cta2: "View on GitHub",
    },
    quiet: {
      headline: "Quiet your mind.",
      sub: "Three focused goals. One clear day.",
      body: "Say goodbye to endless to-do lists. FocusTabs invites you to intentional constraint — only 3 actionable goals per day. No ads, no infinite scrolling, no bloat.",
      label: "Quiet, focused productivity.",
    },
    crystal: {
      headline: "Crystal clear focus.",
      sub: "AI slices complex goals into 3 actionable steps.",
      f1title: "AI Task Slicer",
      f1: "Break down intimidating, complex goals into exactly 3 tactical, actionable steps using AI power.",
      f2title: "AI Goal Refiner",
      f2: "Deep Gemini AI integration that analyzes your vague ideas and transforms them into single-sentence power goals.",
      label: "Complex goals, effortlessly simplified.",
    },
    consistency: {
      headline: "Visualize your consistency.",
      sub: "Three goals. Every day. Compound growth.",
      f1title: "Calendar View",
      f1: "Visualize how small wins turn into permanent habits with 3 goals completed every day.",
      f2title: "Performance Analysis",
      f2: "Identify your most productive days and areas for improvement instantly. Stay motivated with real-time insights.",
      label: "Small wins. Long-term leverage.",
    },
    privacy: {
      headline: "Private by default.",
      sub: "Offline. No tracking. No accounts.",
      f1title: "100% Offline-First",
      f1: "No internet connection required. No account creation, registration, or personal info sharing. Start instantly.",
      f2title: "BYOK Model",
      f2: "Bring Your Own Key for premium AI features. The app collects zero personal data, no cloud sync, no third-party trackers.",
      label: "Focus without compromise.",
    },
    themes: {
      headline: "Design your focus.",
      sub: "Minimal themes. Zero clutter. Total control.",
      body: "Cyberpunk, Neon, Matrix, or Focus — minimal themes with 2026 aesthetics. Instant Light/Dark Mode adaptation for a perfect visual experience in any lighting.",
      label: "Your system. Your rules.",
    },
    coach: {
      headline: "Your personal productivity mentor.",
      sub: "Get expert guidance on demand.",
      body: "AI Coach with a minimalist chat interface. Brainstorm ideas, sharpen your daily plans, and receive instant AI-powered feedback on your productivity patterns.",
      label: "Get expert guidance on demand.",
    },
    pricing: {
      headline: "No subscription. No hidden fees. Just focus.",
      sub: "Pay once, own it forever. A completely transparent business model that doesn't harvest your data. Download FocusTabs today to quiet your mind in 3 steps.",
      cta: "Download Free",
    },
    tech: {
      headline: "FAANG-level local architecture.",
      items: [
        { title: "Core Stack", body: "React Native & Expo SDK 55, TypeScript (100% type safe), and Zustand for instant-reactive native performance." },
        { title: "Zero Dependency", body: "SQLite architecture for reliable and persistent local storage. Zero cloud leak risk." },
        { title: "Hidden Surprise", body: "A real-time 4D Raymarching 'Reality Breach' easter egg hidden under the hood for tech enthusiasts." },
      ],
    },
    footer: { rights: "© 2026 FocusTabs. MIT License.", github: "GitHub @neurodivergent-dev" },
  },
  tr: {
    hero: {
      tag: "Zihninizi 3 Adımda Yönetin",
      headline: "Daha az yap, daha fazlasını başar.",
      sub: "2026 estetiğiyle zihninizi 3 adımda yönetin. Karmaşadan uzak, yüksek performanslı bir yaşam için tasarlandı.",
      cta: "Ücretsiz İndir",
      cta2: "GitHub'da Görüntüle",
    },
    quiet: {
      headline: "Zihninizi susturun.",
      sub: "Üç odaklı hedef. Tek net gün.",
      body: "Sonsuz yapılacaklar listelerine veda edin. FocusTabs sizi kasıtlı bir kısıtlamaya davet eder — günde sadece 3 eyleme geçirilebilir hedef. Reklam yok, sonsuz kaydırma yok, gereksiz karmaşa yok.",
      label: "Sakin, odaklı üretkenlik.",
    },
    crystal: {
      headline: "Kristal berraklığında odak.",
      sub: "Yapay zeka karmaşık hedefleri 3 eyleme dönüştürür.",
      f1title: "AI Görev Parçalayıcı",
      f1: "Göz korkutan, karmaşık hedefleri yapay zeka gücüyle tam 3 taktiksel ve eyleme dönüştürülebilir adıma bölün.",
      f2title: "AI Hedef Geliştirici",
      f2: "Belirsiz fikirlerinizi analiz edip, tek cümlelik net hedeflere dönüştüren derin Gemini AI entegrasyonu.",
      label: "Karmaşık hedefler, zahmetsizce basitleştirildi.",
    },
    consistency: {
      headline: "İstikrarınızı görselleştirin.",
      sub: "Üç hedef. Her gün. Bileşik büyüme.",
      f1title: "Takvim Görünümü",
      f1: "Her gün tamamlanan 3 hedefle küçük zaferlerin kalıcı alışkanlıklara dönüşmesini görselleştirin.",
      f2title: "Performans Analizi",
      f2: "Yüksek verimli günlerinizi ve gelişim alanlarınızı anında tespit edin. Gerçek zamanlı içgörülerle motivasyonunuzu zirvede tutun.",
      label: "Küçük zaferler. Uzun vadeli kaldıraç.",
    },
    privacy: {
      headline: "Varsayılan olarak gizli.",
      sub: "Çevrimdışı. İzleme yok. Hesap yok.",
      f1title: "%100 Çevrimdışı",
      f1: "İnternet bağlantısı gerektirmez. Hesap açmak, kayıt olmak veya kişisel bilgi paylaşmak yok. Anında kullanıma başlayın.",
      f2title: "BYOK Modeli",
      f2: "Premium yapay zeka özellikleri için kendi anahtarınızı getirin. Uygulama hiçbir kişisel verinizi toplamaz, bulut senkronizasyonu veya üçüncü taraf analitiği kullanmaz.",
      label: "Taviz vermeden odaklanın.",
    },
    themes: {
      headline: "Odağınızı tasarlayın.",
      sub: "Minimalist temalar. Sıfır karmaşa. Tam kontrol.",
      body: "Siberpunk, Neon, Matrix veya Focus — 2026 estetiğine sahip minimalist temalar. Aydınlık ve karanlık modlara anında adaptasyon ile her türlü ışık ortamında kusursuz görsel deneyim.",
      label: "Kendi sisteminiz, kendi kurallarınız.",
    },
    coach: {
      headline: "Kişisel üretkenlik mentörünüz.",
      sub: "İstediğinizde uzman rehberliği alın.",
      body: "Minimalist sohbet arayüzüne sahip AI Coach. Fikirleriniz için beyin fırtınası yapın, günlük planlarınızı netleştirin ve üretkenlik örüntüleriniz hakkında yapay zeka destekli anlık geri bildirimler alın.",
      label: "İstediğinizde uzman rehberliği.",
    },
    pricing: {
      headline: "Abonelik yok. Gizli ücret yok. Sadece odaklanın.",
      sub: "Bir kere öde, sonsuza dek senin olsun. Veri hasadı yapmayan, tamamen şeffaf bir iş modeli. Zihninizi 3 adımda sessizleştirmek için FocusTabs'i bugün indirin.",
      cta: "Ücretsiz İndir",
    },
    tech: {
      headline: "FAANG seviyesinde yerel mimari.",
      items: [
        { title: "Temel Stack", body: "React Native & Expo SDK 55, TypeScript (%100 tip güvenli) ve anında tepki veren yerel performans için Zustand." },
        { title: "Sıfır Bağımlılık", body: "Güvenilir ve kalıcı yerel depolama için SQLite mimarisi. Bulut sızıntısı riski sıfır." },
        { title: "Gizli Sürpriz", body: "Teknoloji tutkunları için kaputun altına gizlenmiş gerçek zamanlı 4D Raymarching 'Reality Breach' easter egg'i." },
      ],
    },
    footer: { rights: "© 2026 FocusTabs. MIT Lisansı.", github: "GitHub @neurodivergent-dev" },
  },
};

const PhoneMockup = ({ children, glow, theme }) => (
  <div style={{
    position: "relative",
    width: 260,
    margin: "0 auto",
    filter: glow ? `drop-shadow(0 0 40px ${theme.glowStrong})` : "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
  }}>
    <div style={{
      background: "#0f0a1e",
      borderRadius: 36,
      border: `2px solid ${theme.border}`,
      padding: "10px 8px",
      overflow: "hidden",
    }}>
      <div style={{ background: "#111", borderRadius: 28, overflow: "hidden", position: "relative" }}>
        <div style={{ height: 20, background: "#0f0a1e", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 60, height: 6, borderRadius: 3, background: "#1a1040" }} />
        </div>
        {children}
      </div>
    </div>
  </div>
);

const AppScreen = ({ theme, color = "#1a0f3c" }) => (
  <div style={{ background: color, padding: 16, minHeight: 380 }}>
    <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 16, padding: 16, marginBottom: 12 }}>
      <div style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>FocusTabs</div>
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, marginBottom: 10 }}>Your Mind in 3 Steps</div>
      <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "6px 10px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 11 }}>Daily Progress</span>
        <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>1/3</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, marginTop: 4 }}>
        <div style={{ width: "33%", height: 4, background: theme.accent, borderRadius: 2 }} />
      </div>
    </div>
    {[
      { text: "Meditate for 10 minutes 🧘", done: true, tag: "HEALTH" },
      { text: "Finish AI Slicer Logic 🧠", done: false, tag: "GOAL" },
      { text: "Architect FocusTabs Launch 🚀", done: false, tag: null },
    ].map((item, i) => (
      <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "10px 12px", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", border: item.done ? "none" : `2px solid ${theme.primary}`, background: item.done ? "#10b981" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
          {item.done && <span style={{ color: "#fff", fontSize: 10 }}>✓</span>}
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>{item.text}</div>
          {item.tag && <span style={{ fontSize: 9, padding: "2px 6px", borderRadius: 10, background: item.done ? "#d1fae5" : `${theme.primary}20`, color: item.done ? "#065f46" : theme.primary, fontWeight: 700 }}>{item.tag}</span>}
        </div>
      </div>
    ))}
    <div style={{ background: `linear-gradient(90deg,${theme.primary},${theme.secondary})`, borderRadius: 12, padding: "10px 16px", textAlign: "center", color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600 }}>3/3 · Daily limit reached</div>
  </div>
);

function App({ onNavigate, lang, setLang, theme, currentTheme, setTheme }) {
  const t = translations[lang];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#05020f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar currentLang={lang} onLangChange={setLang} onNavigate={onNavigate} theme={theme} />

      {/* HERO */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: `${theme.secondary}05`, filter: "blur(120px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: `${theme.primary}05`, filter: "blur(120px)" }} />
        
        <div style={{ display: "flex", alignItems: "center", gap: 80, maxWidth: 1100, width: "100%", flexWrap: "wrap", justifyContent: "center", position: "relative" }}>
          <div style={{ maxWidth: 500, textAlign: "left" }}>
            <div style={{ display: "inline-block", background: `${theme.primary}25`, border: `1px solid ${theme.primary}4d`, borderRadius: 20, padding: "6px 16px", fontSize: 12, color: theme.accent, fontWeight: 600, marginBottom: 20 }}>{t.hero.tag}</div>
            
            {/* GRADIENT KALDIRILDI - STANDART RENK VE GÖLGE */}
            <h1 style={{ 
              fontSize: "clamp(36px,5vw,58px)", 
              fontWeight: 900, 
              lineHeight: 1.1, 
              letterSpacing: -2, 
              marginBottom: 20, 
              color: "#fff",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)"
            }}>
              {t.hero.headline}
            </h1>

            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>{t.hero.sub}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button 
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.melihcandemir.focustabs", "_blank")}
                style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, border: "none", borderRadius: 14, padding: "14px 28px", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 32px ${theme.primary}66` }}
              >
                {t.hero.cta}
              </button>
              <button 
                onClick={() => window.open("https://github.com/neurodivergent-dev/focustabs", "_blank")}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "14px 28px", color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 600, cursor: "pointer" }}
              >
                {t.hero.cta2}
              </button>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
              {[["🎯","3 Goals/Day"],["🔒","100% Private"],["⚡","AI-Powered"]].map(([icon,label],i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <PhoneMockup glow theme={theme}><AppScreen theme={theme} /></PhoneMockup>
          </div>
        </div>
      </section>

      {/* QUIET YOUR MIND */}
      <section style={{ padding: "100px 32px", maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ flex: "1 1 300px", minWidth: 280 }}>
          <PhoneMockup theme={theme}><AppScreen theme={theme} color="#160d30" /></PhoneMockup>
        </div>
        <div style={{ flex: "1 1 300px", maxWidth: 480 }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>Core Philosophy</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 16 }}>{t.quiet.headline}</h2>
          <p style={{ color: theme.accent, fontSize: 18, fontWeight: 500, marginBottom: 16 }}>{t.quiet.sub}</p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8 }}>{t.quiet.body}</p>
          <div style={{ marginTop: 24, padding: "16px 20px", background: `${theme.primary}15`, borderLeft: `3px solid ${theme.primary}`, borderRadius: "0 12px 12px 0" }}>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontStyle: "italic" }}>{t.quiet.label}</span>
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section style={{ padding: "100px 32px", background: `linear-gradient(180deg, transparent, ${theme.secondary}0d, transparent)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", marginBottom: 60 }}>
          <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>AI Power</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: -1, marginBottom: 12 }}>{t.crystal.headline}</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17 }}>{t.crystal.sub}</p>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {[
            { emoji: "🧠", title: t.crystal.f1title, body: t.crystal.f1 },
            { emoji: "✨", title: t.crystal.f2title, body: t.crystal.f2 },
            { emoji: "⏱️", title: "Focus Timer", body: lang === "en" ? "Built-in Pomodoro-style timers keep you locked in on each goal. Start, pause, and track time effortlessly." : "Yerleşik Pomodoro tarzı zamanlayıcılar sizi her hedefte odaklanmış tutar." },
          ].map((card, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${theme.border}`, borderRadius: 20, padding: 28, transition: "transform 0.2s, border-color 0.2s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = `${theme.primary}80`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = theme.border; }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{card.emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{card.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSISTENCY */}
      <section style={{ padding: "100px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: -1, marginBottom: 12 }}>{t.consistency.headline}</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17 }}>{t.consistency.sub}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {[
            { emoji: "📅", title: t.consistency.f1title, body: t.consistency.f1, accent: theme.primary },
            { emoji: "📊", title: t.consistency.f2title, body: t.consistency.f2, accent: theme.secondary },
          ].map((card, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: 32, display: "flex", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${card.accent}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{card.emoji}</div>
              <div>
                <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: theme.accent, fontWeight: 600, marginTop: 32, fontSize: 15 }}>{t.consistency.label}</p>
      </section>

      {/* PRIVACY */}
      <section style={{ padding: "100px 32px", background: "linear-gradient(180deg,transparent,rgba(16,185,129,0.04),transparent)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 320px", maxWidth: 480 }}>
            <div style={{ color: "#10b981", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>Privacy First</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: -1, marginBottom: 20 }}>{t.privacy.headline}</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, marginBottom: 32 }}>{t.privacy.sub}</p>
            {[
              { emoji: "☁️", crossed: true, title: t.privacy.f1title, body: t.privacy.f1 },
              { emoji: "🔑", title: t.privacy.f2title, body: t.privacy.f2 },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{item.emoji}</div>
                <div>
                  <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 24, padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🛡️</div>
              <h3 style={{ fontWeight: 900, fontSize: 22, marginBottom: 16 }}>Privacy Commitment</h3>
              {["Zero Data Collection", "Local Storage Only", "No Third-Party Analytics", "No Cloud Sync", "No Account Required"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, textAlign: "left" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 10, color: "#10b981" }}>✓</span>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 20, padding: "12px 20px", background: "rgba(16,185,129,0.1)", borderRadius: 12, color: "#10b981", fontSize: 14, fontWeight: 700 }}>{t.privacy.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: -1, marginBottom: 12 }}>{t.themes.headline}</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 600, margin: "0 auto" }}>{t.themes.body}</p>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
          {[
            { id: "Cyberpunk", name: "Cyberpunk", colors: ["#7c3aed","#4f46e5","#8b5cf6"] },
            { id: "Neon", name: "Neon", colors: ["#ec4899","#8b5cf6","#10b981"] },
            { id: "Matrix", name: "Matrix", colors: ["#10b981","#059669","#34d399"] },
            { id: "Focus", name: "Focus", colors: ["#6d28d9","#5b21b6","#7c3aed"] },
          ].map((tItem, i) => (
            <div key={i} 
              onClick={() => setTheme(tItem.id)}
              style={{ 
                background: currentTheme === tItem.id ? `${tItem.colors[0]}26` : "rgba(255,255,255,0.04)", 
                border: `2px solid ${currentTheme === tItem.id ? tItem.colors[0] : "rgba(255,255,255,0.08)"}`, 
                borderRadius: 20, padding: 24, textAlign: "center", cursor: "pointer", transition: "all 0.2s" 
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg,${tItem.colors[0]},${tItem.colors[1]})`, margin: "0 auto 16px" }} />
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{tItem.name}</div>
              <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
                {tItem.colors.map((c, j) => <div key={j} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI COACH */}
      <section style={{ padding: "100px 32px", background: `linear-gradient(180deg,transparent,${theme.primary}10,transparent)` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: 24, maxWidth: 300 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>AI Coach</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Your Mind in 3 Steps</div>
                </div>
              </div>
              <div style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, borderRadius: 16, borderBottomRightRadius: 4, padding: "10px 14px", marginLeft: 40, marginBottom: 12, fontSize: 13 }}>How to focus better today?</div>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, borderBottomLeftRadius: 4, padding: "12px 14px", fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
                To laser-focus better today:<br/>
                <strong>1. Prioritize</strong> your 3 most important goals<br/>
                <strong>2. Work in sprints</strong> — 25 min on, 5 off<br/>
                <strong>3. Eliminate distractions</strong> — silence notifications
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 320px", maxWidth: 480 }}>
            <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>AI Coach</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: -1, marginBottom: 16 }}>{t.coach.headline}</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>{t.coach.body}</p>
            <div style={{ color: theme.accent, fontWeight: 600, fontSize: 15 }}>{t.coach.label}</div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: theme.accent, fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>Under the Hood</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: -1 }}>{t.tech.headline}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {t.tech.items.map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${theme.border}`, borderRadius: 20, padding: 28, borderTop: `3px solid ${theme.primary}80` }}>
                <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 10, color: theme.accent }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
            {["React Native","Expo SDK 55","TypeScript","Zustand","SQLite","Gemini AI"].map((tech, i) => (
              <div key={i} style={{ background: `${theme.primary}1a`, border: `1px solid ${theme.primary}40`, borderRadius: 20, padding: "6px 16px", fontSize: 13, color: theme.accent, fontWeight: 600 }}>{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 50%, ${theme.glow} 0%, transparent 70%)` }} />
        <div style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(32px,5vw,58px)", fontWeight: 900, letterSpacing: -2, lineHeight: 1.1, marginBottom: 20, maxWidth: 700, margin: "0 auto 20px" }}>{t.pricing.headline}</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>{t.pricing.sub}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button 
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.melihcandemir.focustabs", "_blank")}
              style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, border: "none", borderRadius: 16, padding: "18px 40px", color: "#fff", fontSize: 17, fontWeight: 800, cursor: "pointer", boxShadow: `0 12px 40px ${theme.primary}80` }}
            >
              {t.pricing.cta}
            </button>
            <button 
              onClick={() => window.open("https://github.com/neurodivergent-dev/focustabs", "_blank")}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: "18px 32px", color: "rgba(255,255,255,0.75)", fontSize: 17, fontWeight: 600, cursor: "pointer" }}
            >
              GitHub →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#fff" }}>Fo</div>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>{t.footer.rights}</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span 
            onClick={() => window.open("https://github.com/neurodivergent-dev/focustabs", "_blank")}
            style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, cursor: "pointer" }}
          >
            {t.footer.github}
          </span>
          <button onClick={() => setLang(lang === "en" ? "tr" : "en")} style={{ background: `${theme.primary}1a`, border: `1px solid ${theme.primary}40`, borderRadius: 12, padding: "4px 12px", color: theme.accent, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{lang === "en" ? "🇹🇷 Türkçe" : "🇬🇧 English"}</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
