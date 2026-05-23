export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: 'var(--navy)' }}>
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '100%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
        }}/>

        <div className="max-w-4xl text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-up" style={{
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: 100,
            padding: '6px 16px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c' }}/>
            <span style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em' }}>
              SMART EVALUATION PLATFORM
            </span>
          </div>

          <h1 className="font-display animate-fade-up-delay" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#f0ece4',
          }}>
            Fund Your Future,<br/>
            <span className="gold-gradient">Intelligently.</span>
          </h1>

          <p className="animate-fade-up-delay-2" style={{
            fontSize: '1.15rem',
            color: '#9ca3af',
            maxWidth: 520,
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            AI-powered education loan evaluation with real-time lead scoring,
            fraud detection, and instant decisions.
          </p>

          <div className="flex items-center justify-center gap-4 animate-fade-up-delay-2">
            <a href="/apply" className="btn-gold" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Apply Now
            </a>
            <a href="/track" style={{
              padding: '14px 32px',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 10,
              color: '#c9a84c',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              Track Application
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div className="max-w-4xl mx-auto px-8 py-10 grid grid-cols-3 gap-8 text-center">
          {[
            { value: '₹50L+', label: 'Max Loan Amount' },
            { value: '<2 min', label: 'Instant Decision' },
            { value: '99.2%', label: 'Accuracy Rate' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display gold-gradient" style={{ fontSize: '2rem', fontWeight: 700 }}>
                {stat.value}
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: 4, letterSpacing: '0.03em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          {[
            {
              icon: '◈',
              title: 'Lead Scoring',
              desc: 'Real-time quality assessment based on academic performance, financial profile, and intent signals.',
            },
            {
              icon: '⬡',
              title: 'Fraud Detection',
              desc: 'Multi-layer verification to identify suspicious applications before they enter the pipeline.',
            },
            {
              icon: '◎',
              title: 'Instant Decision',
              desc: 'Get a preliminary evaluation in under 2 minutes with detailed scoring rationale.',
            },
          ].map((f, i) => (
            <div key={i} className="glass-card p-6" style={{ transition: 'border-color 0.2s' }}>
              <div style={{
                width: 40, height: 40,
                background: 'rgba(201,168,76,0.1)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a84c',
                fontSize: '1.2rem',
                marginBottom: 16,
              }}>
                {f.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#f0ece4' }}>
                {f.title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
