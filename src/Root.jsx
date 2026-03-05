import { useState } from "react";
import App from "./App";
import Features from "./Features";
import Tech from "./Tech";
import Privacy from "./Privacy";

const themes = {
  Cyberpunk: {
    primary: "#7c3aed",
    secondary: "#4f46e5",
    accent: "#a78bfa",
    glow: "rgba(139,92,246,0.3)",
    glowStrong: "rgba(139,92,246,0.6)",
    border: "rgba(139,92,246,0.15)",
  },
  Neon: {
    primary: "#ec4899",
    secondary: "#8b5cf6",
    accent: "#f472b6",
    glow: "rgba(236,72,153,0.3)",
    glowStrong: "rgba(236,72,153,0.6)",
    border: "rgba(236,72,153,0.15)",
  },
  Matrix: {
    primary: "#10b981",
    secondary: "#059669",
    accent: "#34d399",
    glow: "rgba(16,185,129,0.3)",
    glowStrong: "rgba(16,185,129,0.6)",
    border: "rgba(16,185,129,0.15)",
  },
  Focus: {
    primary: "#6d28d9",
    secondary: "#5b21b6",
    accent: "#8b5cf6",
    glow: "rgba(109,40,217,0.3)",
    glowStrong: "rgba(109,40,217,0.6)",
    border: "rgba(109,40,217,0.15)",
  }
};

export default function Root() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("en");
  const [currentTheme, setCurrentTheme] = useState("Cyberpunk");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const theme = themes[currentTheme];

  const pageProps = {
    onNavigate: navigate,
    lang,
    setLang,
    theme,
    currentTheme,
    setTheme: setCurrentTheme
  };

  if (currentPage === "features") {
    return <Features {...pageProps} />;
  }

  if (currentPage === "tech") {
    return <Tech {...pageProps} />;
  }

  if (currentPage === "privacy") {
    return <Privacy {...pageProps} />;
  }

  return <App {...pageProps} />;
}
