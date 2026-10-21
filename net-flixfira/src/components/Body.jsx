import { profile, skills, projects } from '../data.js'

function Body() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="lead">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View my work
            </a>
            <a href="#contact" className="btn ghost">
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <div className="about-grid">
            <div className="about-text">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="about-card">
              <h3>Quick facts</h3>
              <ul>
                <li>
                  <strong>Based in:</strong> {profile.location}
                </li>
                <li>
                  <strong>Studying:</strong> Business &amp; Economics
                </li>
                <li>
                  <strong>Creating:</strong> Video &amp; Motion
                </li>
                <li>
                  <strong>Learning:</strong> React &amp; Full-Stack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-head">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="cards">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container contact">
          <h2 className="section-title">Get in touch</h2>
          <p>
            Have a project, a question or an opportunity? I would love to hear
            from you.
          </p>
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </section>
    </main>
  )
}

export default Body
