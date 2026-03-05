import { useState, useEffect } from "react";
import "./Navbar.css";

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
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.home, id: "home" },
    { label: t.features, id: "features" },
    { label: t.privacy, id: "privacy" },
    { label: t.tech, id: "tech" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleNavigate = (id) => {
    onNavigate && onNavigate(id);
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleLangChange = () => {
    onLangChange(currentLang === "en" ? "tr" : "en");
    // setIsOpen(false); // Optional: close menu on lang change
  };

  // Close menu on resize if it's open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <nav className="navbar" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div className="nav-brand" onClick={() => handleNavigate("home")}>
          <div className="nav-logo" style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})` }}>Fo</div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: -0.5, color: "#fff" }}>FocusTabs</span>
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <span 
              key={item.id} 
              onClick={() => handleNavigate(item.id)}
              className="nav-link"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = theme.accent}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
            >
              {item.label}
            </span>
          ))}
          
          <div className="nav-buttons">
            <button
              onClick={handleLangChange}
              className="lang-btn"
              style={{ background: `${theme.primary}25`, border: `1px solid ${theme.primary}66`, color: theme.accent }}
            >
              {currentLang === "en" ? "🇹🇷 TR" : "🇬🇧 EN"}
            </button>
            
            <button 
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.melihcandemir.focustabs", "_blank")}
              className="download-btn"
              style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})` }}
            >
              {t.download}
            </button>
          </div>
        </div>

        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className={`overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>
    </>
  );
}
