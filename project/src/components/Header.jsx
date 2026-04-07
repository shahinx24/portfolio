import "../../styles/header.css";

export default function Header({ menuOpen, onToggle, onClose }) {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="#home">
          Portfolio
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`} aria-label="Primary">
          <a href="#home" onClick={onClose}>
            Home
          </a>
          <a href="#skills" onClick={onClose}>
            Skills
          </a>
          <a href="#work" onClick={onClose}>
            Work
          </a>
          <a href="#contact" onClick={onClose}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
