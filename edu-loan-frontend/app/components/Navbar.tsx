export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b" style={{
      background: 'rgba(10, 15, 30, 0.85)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(201, 168, 76, 0.15)',
    }}>
      <div className="max-w-6xl mx-auto px-8 py-0 flex justify-between items-stretch" style={{ height: 60 }}>

        {/* Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          textDecoration: 'none',
        }}>
          <div style={{
            width: 30,
            height: 30,
            background: 'linear-gradient(135deg, #e8c97a, #c9a84c)',
            borderRadius: 7,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="#0a0f1e" strokeWidth="1.5" fill="none"/>
              <circle cx="8" cy="8" r="2" fill="#0a0f1e"/>
            </svg>
          </div>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#f0ece4',
            lineHeight: 1,
          }}>
            Edu<span style={{ color: '#c9a84c' }}>Loan</span>
          </span>
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {[
            { label: 'Apply', href: '/apply' },
            { label: 'Track', href: '/track' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 18px',
                height: '100%',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#9ca3af',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.color = '#e8c97a';
                el.style.borderBottomColor = 'rgba(201,168,76,0.5)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.color = '#9ca3af';
                el.style.borderBottomColor = 'transparent';
              }}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
