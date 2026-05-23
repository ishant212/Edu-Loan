'use client';

import { useState } from 'react';
import { api } from '../../services/api';
import Navbar from '../components/Navbar';

export default function TrackPage() {
  const [applicationId, setApplicationId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const trackApplication = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/applications/${applicationId}`);
      setResult(res.data);
    } catch (error) {
      alert('Application not found');
    } finally {
      setLoading(false);
    }
  };

  const statusConfig: Record<string, { color: string; bg: string; border: string; label: string }> = {
    approved: { color: '#4ade80', bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.2)', label: 'Approved' },
    pending: { color: '#c9a84c', bg: 'rgba(201,168,76,0.08)', border: 'rgba(201,168,76,0.2)', label: 'Under Review' },
    rejected: { color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)', label: 'Rejected' },
  };

  const status = statusConfig[result?.applicationStatus?.toLowerCase()] ?? statusConfig.pending;

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6" style={{ background: 'var(--navy)' }}>
        <div style={{
          position: 'fixed', top: 0, right: 0,
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        <div className="max-w-xl mx-auto relative">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: 'rgba(201,168,76,0.4)' }}/>
              <span style={{ color: '#c9a84c', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em' }}>
                STATUS TRACKER
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f0ece4', lineHeight: 1.15 }}>
              Track Your<br/>
              <span className="gold-gradient">Application</span>
            </h1>
            <p style={{ color: '#6b7280', marginTop: 12, fontSize: '0.9rem' }}>
              Enter your application ID to check the current status.
            </p>
          </div>

          {/* Search card */}
          <div className="glass-card p-8">
            <label style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#c9a84c',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Application ID
            </label>
            <input
              value={applicationId}
              onChange={e => setApplicationId(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && trackApplication()}
              placeholder="e.g. APP-2024-XXXXX"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201, 168, 76, 0.15)',
                borderRadius: 10,
                padding: '13px 16px',
                color: '#f0ece4',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                outline: 'none',
                marginBottom: 14,
              }}
              onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
            />
            <button
              onClick={trackApplication}
              disabled={loading || !applicationId.trim()}
              className="btn-gold w-full"
            >
              {loading ? 'Searching...' : 'Check Status →'}
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className="glass-card p-8 mt-6" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
              <h2 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 600, color: '#f0ece4', marginBottom: 20 }}>
                Application Details
              </h2>

              {/* Status badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 18px',
                background: status.bg,
                border: `1px solid ${status.border}`,
                borderRadius: 10,
                marginBottom: 20,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: status.color, boxShadow: `0 0 8px ${status.color}` }}/>
                <span style={{ fontWeight: 600, color: status.color }}>{status.label}</span>
              </div>

              {/* Info grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Lead Score', value: result.leadScore },
                  { label: 'Category', value: result.leadCategory },
                  { label: 'Dead Lead', value: result.isDeadLead ? 'Yes' : 'No' },
                  { label: 'App ID', value: applicationId },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '12px 14px',
                  }}>
                    <div style={{ fontSize: '0.7rem', color: '#6b7280', letterSpacing: '0.05em', marginBottom: 4, textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{ fontWeight: 600, color: '#f0ece4', fontSize: '0.95rem' }}>
                      {item.value ?? '—'}
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: 16, fontSize: '0.78rem', color: '#4b5563', textAlign: 'center' }}>
                Need help? Contact support at support@eduloan.in
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
