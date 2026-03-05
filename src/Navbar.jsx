import { useState } from "react";

const translations = {
  en: {
    home: "Home",
    features: "Features",
    privacy: "Privacy",
    tech: "Tech",
    download: "Download",
  },
  tr: {
    home: "Ana Sayfa",
    features: "Özellikler",
    privacy: "Gizlilik",
    tech: "Teknoloji",
    download: "İndir",
  }
};

export default function Navbar({ currentLang, onLangChange, onNavigate, theme }) {
  const t = translations[currentLang];

  const navItems = [
    { label: t.home, id: "home" },
    { label: t.features, id: "features" },
    { label: t.privacy, id: "privacy" },
    { label: t.tech, id: "tech" },
  ];

  return (
    <nav style={{ 
      position: "sticky", 
      top: 0, 
      zIndex: 100, 
      background: "rgba(5,2,15,0.85)", 
      backdropFilter: "blur(20px)", 
      borderBottom: `1px solid ${theme.border}`, 
      padding: "14px 32px", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center" 
    }}>
      <div 
        style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={() => onNavigate && onNavigate("home")}
      >
        <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#fff" }}>Fo</div>
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: -0.5, color: "#fff" }}>FocusTabs</span>
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {navItems.map((item) => (
          <span 
            key={item.id} 
            onClick={() => onNavigate && onNavigate(item.id)}
            style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = theme.accent}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
          >
            {item.label}
          </span>
        ))}
        
        <button
          onClick={() => onLangChange(currentLang === "en" ? "tr" : "en")}
          style={{ background: `${theme.primary}25`, border: `1px solid ${theme.primary}66`, borderRadius: 20, padding: "4px 14px", color: theme.accent, fontSize: 12, fontWeight: 700, cursor: "pointer" }}
        >
          {currentLang === "en" ? "🇹🇷 TR" : "🇬🇧 EN"}
        </button>
        
        <button 
          onClick={() => window.open("https://play.google.com/store/apps/details?id=com.melihcandemir.focustabs", "_blank")}
          style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, border: "none", borderRadius: 20, padding: "8px 18px", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
        >
          {t.download}
        </button>
      </div>
    </nav>
  );
}
