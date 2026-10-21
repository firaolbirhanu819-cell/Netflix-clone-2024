import { profile, socials, navLinks } from '../data.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#home" className="logo">
            {profile.name}
            <span>.</span>
          </a>
          <p className="muted">{profile.title}</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-links">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="copyright">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
