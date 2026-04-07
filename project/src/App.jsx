import { useState } from "react";
import Header from "./components/Header";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import "../styles/app.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <Header
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onClose={() => setMenuOpen(false)}
      />

      <main>
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
