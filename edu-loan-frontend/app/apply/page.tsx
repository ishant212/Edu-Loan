'use client';

import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { useState } from 'react';
import Navbar from '../components/Navbar';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  educationLevel: string;
  targetCourse: string;
  universityName: string;
  academicScore: number;
  familyIncome: number;
  loanAmount: number;
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(201, 168, 76, 0.15)',
  borderRadius: 10,
  padding: '13px 16px',
  color: '#f0ece4',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em', color: '#c9a84c', marginBottom: 6, textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ApplyPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState('');

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await api.post('/applications', data);
      if (res.data.message) {
        setError(res.data.message);
        setResponse(null);
      } else {
        setError('');
        setResponse(res.data);
      }
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    } finally {
      setLoading(false);
    }
  };

  const scoreColor = (score: number) => {
    if (score >= 70) return '#4ade80';
    if (score >= 40) return '#c9a84c';
    return '#f87171';
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6" style={{ background: 'var(--navy)' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        <div className="max-w-2xl mx-auto relative">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div style={{ height: 1, width: 40, background: 'rgba(201,168,76,0.4)' }}/>
              <span style={{ color: '#c9a84c', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em' }}>
                LOAN APPLICATION
              </span>
            </div>
            <h1 className="font-display" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f0ece4', lineHeight: 1.15 }}>
              Begin Your<br/>
              <span className="gold-gradient">Application</span>
            </h1>
            <p style={{ color: '#6b7280', marginTop: 12, fontSize: '0.9rem', lineHeight: 1.6 }}>
              Complete the form below for an instant AI-powered evaluation.
            </p>
          </div>

          {/* Form card */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Personal Info Section */}
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', color: '#4b5563', textTransform: 'uppercase', marginBottom: 14 }}>
                  Personal Information
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Field label="Full Name">
                    <input {...register('fullName')} placeholder="John Doe" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                  <Field label="Email">
                    <input {...register('email')} placeholder="john@email.com" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                </div>
                <div style={{ marginTop: 14 }}>
                  <Field label="Phone Number">
                    <input {...register('phone')} placeholder="+91 98765 43210" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(201,168,76,0.08)' }}/>

              {/* Academic Info */}
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', color: '#4b5563', textTransform: 'uppercase', marginBottom: 14 }}>
                  Academic Profile
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <Field label="Education Level">
                      <input {...register('educationLevel')} placeholder="e.g. Bachelor's" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </Field>
                    <Field label="Academic Score">
                      <input type="number" step="0.1" {...register('academicScore', { valueAsNumber: true })} placeholder="8.5 / 100" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </Field>
                  </div>
                  <Field label="Target Course">
                    <input {...register('targetCourse')} placeholder="e.g. MBA, MS Computer Science" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                  <Field label="University Name">
                    <input {...register('universityName')} placeholder="e.g. MIT, IIT Delhi" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(201,168,76,0.08)' }}/>

              {/* Financial Info */}
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', color: '#4b5563', textTransform: 'uppercase', marginBottom: 14 }}>
                  Financial Details
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Field label="Family Income (₹/yr)">
                    <input type="number" {...register('familyIncome', { valueAsNumber: true })} placeholder="800000" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                  <Field label="Loan Amount (₹)">
                    <input type="number" {...register('loanAmount', { valueAsNumber: true })} placeholder="1500000" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(201,168,76,0.15)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </Field>
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-gold w-full" style={{ marginTop: 8 }}>
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="20" strokeDashoffset="5"/>
                    </svg>
                    Evaluating...
                  </span>
                ) : 'Submit Application →'}
              </button>
            </form>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              marginTop: 16,
              padding: '14px 18px',
              background: 'rgba(248,113,113,0.08)',
              border: '1px solid rgba(248,113,113,0.2)',
              borderRadius: 10,
              color: '#f87171',
              fontSize: '0.875rem',
            }}>
              ⚠ {error}
            </div>
          )}

          {/* Result */}
          {response && (
            <div className="glass-card p-8 mt-6" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f0ece4' }}>
                  Evaluation Result
                </h2>
                <div style={{
                  padding: '4px 12px',
                  borderRadius: 100,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  background: response.status === 'approved' ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
                  color: response.status === 'approved' ? '#4ade80' : '#f87171',
                  border: `1px solid ${response.status === 'approved' ? 'rgba(74,222,128,0.25)' : 'rgba(248,113,113,0.25)'}`,
                }}>
                  {response.status?.toUpperCase()}
                </div>
              </div>

              {/* Score visualization */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Lead Score</span>
                  <span style={{ fontWeight: 700, color: scoreColor(response.leadScore), fontSize: '1.1rem' }}>
                    {response.leadScore}
                  </span>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${response.leadScore}%`,
                    background: `linear-gradient(90deg, ${scoreColor(response.leadScore)}, ${scoreColor(response.leadScore)}aa)`,
                    borderRadius: 3,
                    transition: 'width 1s ease',
                  }}/>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'Category', value: response.leadCategory },
                  { label: 'Dead Lead', value: response.isDeadLead ? 'Yes' : 'No' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '12px 16px',
                  }}>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280', letterSpacing: '0.05em', marginBottom: 4 }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontWeight: 600, color: '#f0ece4', fontSize: '0.95rem' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {response.scoringReasons?.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: 12 }}>
                    Scoring Rationale
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {response.scoringReasons.map((reason: string, index: number) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontSize: '0.875rem',
                        color: '#9ca3af',
                        lineHeight: 1.5,
                      }}>
                        <span style={{ color: '#c9a84c', marginTop: 2, flexShrink: 0 }}>›</span>
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
