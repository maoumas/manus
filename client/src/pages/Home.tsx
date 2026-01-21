import {
  Terminal, Cpu, Feather, ArrowRight, Layout,
  BookOpen, Mic, Film, Globe, ShieldCheck, Menu, X, PlayCircle
} from "lucide-react";
import { useState } from "react";

// --- DICCIONARIO DE TRADUCCIONES ---
const TRANSLATIONS = {
  en: {
    nav: { why: "Why Markdown?", ecosystem: "Ecosystem", docs: "Docs", launch: "Launch Console" },
    hero: {
      badge: "System v2.0 Online",
      title: "Structure your ideas.",
      subtitle: "Master the future.",
      desc: "In the AI era, plain text is king. SaraPuma is your professional suite to write, record, and create without technical friction.",
      btnPrimary: "Start Puma Log",
      btnSecondary: "Read Documentation",
      codeTitle: "mission_statement.md",
      code1: "# Project: SaraPuma",
      code2: "## Mission",
      code3: "Simplify complex tech.",
      code4: "// Ready to deploy..."
    },
    why: {
      title: "The Syntax of Success",
      subtitle: "Why do top developers and creators use Markdown? It's not just text, it's universal structure.",
      f1Title: "AI Native Language",
      f1Desc: "ChatGPT, Claude, and Gemini 'think' in Markdown. Writing this way lets you communicate better with Artificial Intelligence.",
      f2Title: "Universal Portability",
      f2Desc: "Your notes aren't trapped in an app. They are plain text files that will live forever, readable on any system.",
      f3Title: "Focus Mode",
      f3Desc: "No complex menus. No unnecessary buttons. Just you and your ideas flowing at the speed of thought."
    },
    eco: {
      label: "Application Suite",
      title: "SaraPuma Ecosystem",
      link: "View full documentation",
      app1Title: "Puma Log",
      app1Desc: "Intelligent Markdown editor. Color categorization, instant search, and secure local storage.",
      app1Btn: "Open Application",
      app2Title: "Teleprompter",
      app2Desc: "Your personal recording studio. Adjustable auto-scroll for smooth presentations and videos.",
      app2Btn: "Launch Studio",
      app3Title: "VideoGen",
      app3Desc: "Asset creation engine. Generate thumbnails, titles, and graphics for your productions in seconds.",
      app3Btn: "Create Assets"
    },
    videos: {
      title: "Markdown Academy",
      subtitle: "Master the tool in minutes with these curated tutorials."
    },
    footer: {
      bio: "Developing the future of technical and creative writing. Clean code, clear ideas.",
      products: "Products",
      resources: "Resources",
      legal: "Legal"
    }
  },
  es: {
    nav: { why: "¿Por qué Markdown?", ecosystem: "Ecosistema", docs: "Docs", launch: "Iniciar Consola" },
    hero: {
      badge: "Sistema v2.0 En Línea",
      title: "Estructura tus ideas.",
      subtitle: "Domina el futuro.",
      desc: "En la era de la IA, el texto plano es el rey. SaraPuma es tu suite profesional para escribir, grabar y crear sin fricción técnica.",
      btnPrimary: "Iniciar Puma Log",
      btnSecondary: "Leer Manual",
      codeTitle: "mision_proyecto.md",
      code1: "# Proyecto: SaraPuma",
      code2: "## Misión",
      code3: "Simplificar la tecnología.",
      code4: "// Listo para desplegar..."
    },
    why: {
      title: "La Sintaxis del Éxito",
      subtitle: "¿Por qué los mejores desarrolladores usan Markdown? No es solo texto, es estructura universal.",
      f1Title: "Lenguaje Nativo de IA",
      f1Desc: "ChatGPT y Gemini 'piensan' en Markdown. Escribir así te permite comunicarte mejor con la Inteligencia Artificial.",
      f2Title: "Portabilidad Universal",
      f2Desc: "Tus notas no están atrapadas. Son archivos de texto plano que vivirán por siempre en cualquier sistema.",
      f3Title: "Modo Enfoque",
      f3Desc: "Sin menús complejos. Sin botones innecesarios. Solo tú y tus ideas fluyendo a la velocidad del pensamiento."
    },
    eco: {
      label: "Suite de Aplicaciones",
      title: "Ecosistema SaraPuma",
      link: "Ver documentación completa",
      app1Title: "Puma Log",
      app1Desc: "Editor Markdown inteligente. Categorización por colores, búsqueda instantánea y almacenamiento local.",
      app1Btn: "Abrir Aplicación",
      app2Title: "Teleprompter",
      app2Desc: "Tu estudio de grabación. Scroll automático ajustable para presentaciones y videos fluidos.",
      app2Btn: "Lanzar Estudio",
      app3Title: "VideoGen",
      app3Desc: "Motor de creación. Genera miniaturas, títulos y gráficos para tus producciones en segundos.",
      app3Btn: "Crear Activos"
    },
    videos: {
      title: "Academia Markdown",
      subtitle: "Domina la herramienta en minutos con estos tutoriales seleccionados."
    },
    footer: {
      bio: "Desarrollando el futuro de la escritura técnica y creativa. Código limpio, ideas claras.",
      products: "Productos",
      resources: "Recursos",
      legal: "Legal"
    }
  },
  de: {
    nav: { why: "Warum Markdown?", ecosystem: "Ökosystem", docs: "Doku", launch: "Konsole Starten" },
    hero: {
      badge: "System v2.0 Online",
      title: "Strukturieren Sie Ideen.",
      subtitle: "Meistern Sie die Zukunft.",
      desc: "Im KI-Zeitalter ist Plain Text König. SaraPuma ist Ihre Profi-Suite zum Schreiben, Aufnehmen und Erstellen ohne technische Reibung.",
      btnPrimary: "Puma Log Starten",
      btnSecondary: "Dokumentation",
      codeTitle: "projekt_mission.md",
      code1: "# Projekt: SaraPuma",
      code2: "## Mission",
      code3: "Technik vereinfachen.",
      code4: "// Bereit zur Bereitstellung..."
    },
    why: {
      title: "Die Syntax des Erfolgs",
      subtitle: "Warum nutzen Top-Entwickler Markdown? Es ist nicht nur Text, es ist universelle Struktur.",
      f1Title: "KI-Muttersprache",
      f1Desc: "ChatGPT und Gemini 'denken' in Markdown. So kommunizieren Sie besser mit Künstlicher Intelligenz.",
      f2Title: "Universelle Portabilität",
      f2Desc: "Ihre Notizen sind nicht gefangen. Es sind Textdateien, die für immer auf jedem System lesbar bleiben.",
      f3Title: "Fokus-Modus",
      f3Desc: "Keine komplexen Menüs. Keine unnötigen Tasten. Nur Sie und Ihre Ideen in Gedankengeschwindigkeit."
    },
    eco: {
      label: "Anwendungs-Suite",
      title: "SaraPuma Ökosystem",
      link: "Vollständige Dokumentation",
      app1Title: "Puma Log",
      app1Desc: "Intelligenter Markdown-Editor. Farbkategorisierung, Sofortsuche und sichere lokale Speicherung.",
      app1Btn: "Anwendung Öffnen",
      app2Title: "Teleprompter",
      app2Desc: "Ihr persönliches Aufnahmestudio. Anpassbarer Auto-Scroll für flüssige Präsentationen.",
      app2Btn: "Studio Starten",
      app3Title: "VideoGen",
      app3Desc: "Asset-Erstellungs-Engine. Erstellen Sie Thumbnails und Grafiken in Sekunden.",
      app3Btn: "Assets Erstellen"
    },
    videos: {
      title: "Markdown Akademie",
      subtitle: "Meistern Sie das Werkzeug in Minuten mit diesen ausgewählten Tutorials."
    },
    footer: {
      bio: "Entwicklung der Zukunft des technischen und kreativen Schreibens. Sauberer Code, klare Ideen.",
      products: "Produkte",
      resources: "Ressourcen",
      legal: "Rechtliches"
    }
  }
};

type Lang = "en" | "es" | "de";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en"); // Default English

  const t = TRANSLATIONS[lang]; // Shortcut to current language

  // --- ENLACES ---
  const LINKS = {
    log: "https://sarapuma.com/app.html",
    teleprompter: "https://sarapuma.com/tp/index.html",
    videoGen: "https://sarapuma.com/video-gen/index.html",
    manual: "https://sarapuma.com/manual.html"
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo & Language Switcher */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 hidden sm:block">SaraPuma<span className="text-indigo-600">_Dev</span></span>
            </div>

            {/* Language Toggles */}
            <div className="flex items-center bg-slate-100 rounded-lg p-1 gap-1">
              {(["en", "es", "de"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-bold rounded-md uppercase transition-all ${lang === l ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#why" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{t.nav.why}</a>
            <a href="#ecosystem" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{t.nav.ecosystem}</a>
            <a href={LINKS.manual} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{t.nav.docs}</a>
            <a
              href={LINKS.log}
              className="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-lg hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200/50"
            >
              {t.nav.launch}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl absolute w-full">
            <a href="#why" className="block font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>{t.nav.why}</a>
            <a href="#ecosystem" className="block font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>{t.nav.ecosystem}</a>
            <a href={LINKS.manual} className="block font-medium text-slate-600">{t.nav.docs}</a>
            <a href={LINKS.log} className="block font-bold text-indigo-600">{t.nav.launch}</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-600 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            {t.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              {t.hero.subtitle}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={LINKS.log}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/30 w-full sm:w-auto"
            >
              <span className="mr-2 flex items-center gap-2 font-bold text-lg">
                {t.hero.btnPrimary} <Terminal className="w-5 h-5" />
              </span>
            </a>
            <a
              href={LINKS.manual}
              className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 font-medium text-slate-700 transition-all hover:border-indigo-200 hover:bg-slate-50 w-full sm:w-auto text-lg"
            >
              {t.hero.btnSecondary}
            </a>
          </div>

          {/* Code Snippet Visual */}
          <div className="mt-16 mx-auto max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 text-left transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs text-slate-400 font-mono">{t.hero.codeTitle}</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div className="text-slate-300">
                <span className="text-purple-400"># </span> {t.hero.code1}<br />
                <br />
                <span className="text-blue-400">## </span> {t.hero.code2}<br />
                {t.hero.code3}<br />
                <br />
                <span className="text-slate-500">{t.hero.code4}</span><span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY MARKDOWN --- */}
      <section id="why" className="py-24 bg-white relative z-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.why.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {t.why.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.why.f1Title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.why.f1Desc}</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.why.f2Title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.why.f2Desc}</p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-pink-100 hover:shadow-xl hover:shadow-pink-100/50 transition-all">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                <Feather className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.why.f3Title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.why.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ECOSYSTEM GRID --- */}
      <section id="ecosystem" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">{t.eco.label}</span>
            <h2 className="text-4xl font-bold text-slate-900">{t.eco.title}</h2>
          </div>
          <a href={LINKS.manual} className="text-slate-500 hover:text-indigo-600 font-medium flex items-center gap-1 group">
            {t.eco.link} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* APP 1 */}
          <a href={LINKS.log} className="group flex flex-col h-full">
            <div className="relative h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-200/40 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              <div className="relative w-16 h-16 bg-white border border-slate-100 shadow-lg rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:-translate-y-1 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="relative text-2xl font-bold mb-2 text-slate-900">{t.eco.app1Title}</h3>
              <p className="relative text-slate-500 mb-8 flex-grow">{t.eco.app1Desc}</p>
              <div className="relative mt-auto inline-flex items-center text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg w-fit group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {t.eco.app1Btn} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </a>

          {/* APP 2 */}
          <a href={LINKS.teleprompter} className="group flex flex-col h-full">
            <div className="relative h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              <div className="relative w-16 h-16 bg-white border border-slate-100 shadow-lg rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:-translate-y-1 transition-transform">
                <Mic className="w-8 h-8" />
              </div>
              <h3 className="relative text-2xl font-bold mb-2 text-slate-900">{t.eco.app2Title}</h3>
              <p className="relative text-slate-500 mb-8 flex-grow">{t.eco.app2Desc}</p>
              <div className="relative mt-auto inline-flex items-center text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {t.eco.app2Btn} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </a>

          {/* APP 3 */}
          <a href={LINKS.videoGen} className="group flex flex-col h-full">
            <div className="relative h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              <div className="relative w-16 h-16 bg-white border border-slate-100 shadow-lg rounded-2xl flex items-center justify-center text-pink-600 mb-8 group-hover:-translate-y-1 transition-transform">
                <Film className="w-8 h-8" />
              </div>
              <h3 className="relative text-2xl font-bold mb-2 text-slate-900">{t.eco.app3Title}</h3>
              <p className="relative text-slate-500 mb-8 flex-grow">{t.eco.app3Desc}</p>
              <div className="relative mt-auto inline-flex items-center text-sm font-bold text-pink-600 bg-pink-50 px-4 py-2 rounded-lg w-fit group-hover:bg-pink-600 group-hover:text-white transition-colors">
                {t.eco.app3Btn} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* --- VIDEO ACADEMY SECTION (NEW) --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <PlayCircle className="w-8 h-8 text-indigo-400" /> {t.videos.title}
            </h2>
            <p className="text-slate-400">{t.videos.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Video 1: Markdown Crash Course */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-indigo-500 transition-colors">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HUBNt18RFbo"
                  title="Markdown Crash Course"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Markdown Crash Course</h3>
                <p className="text-sm text-slate-400">Aprende la sintaxis básica en 20 minutos.</p>
              </div>
            </div>

            {/* Video 2: Why Obsidian (Good for Markdown context) */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-purple-500 transition-colors">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6A5EpqqDOdk"
                  title="Markdown Basics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Markdown in 10 Minutes</h3>
                <p className="text-sm text-slate-400">Guía rápida para principiantes absolutos.</p>
              </div>
            </div>

            {/* Video 3: General Writing */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-pink-500 transition-colors">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/pTCfC0IuThk"
                  title="The Power of Plain Text"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">The Power of Plain Text</h3>
                <p className="text-sm text-slate-400">Por qué el texto plano es el futuro del trabajo.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">

          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Terminal className="w-5 h-5" /> SaraPuma_Dev
            </div>
            <p className="leading-relaxed opacity-80">{t.footer.bio}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">{t.footer.products}</h4>
            <ul className="space-y-3">
              <li><a href={LINKS.log} className="hover:text-indigo-400 transition-colors">Puma Notes</a></li>
              <li><a href={LINKS.teleprompter} className="hover:text-indigo-400 transition-colors">Teleprompter Pro</a></li>
              <li><a href={LINKS.videoGen} className="hover:text-indigo-400 transition-colors">VideoGen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">{t.footer.resources}</h4>
            <ul className="space-y-3">
              <li><a href={LINKS.manual} className="hover:text-indigo-400 transition-colors">{t.nav.docs}</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cheatsheet</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms</a></li>
              <li className="text-xs opacity-50 mt-4">© 2026 SaraPuma Inc. <br />All systems operational.</li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
}