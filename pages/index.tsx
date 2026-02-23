import { useState } from 'react';
import { BookOpen, Heart, Camera, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [demoActive, setDemoActive] = useState(false);

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes glow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        .fadeIn { animation: fadeIn 0.8s ease-out; }
        .slideUp { animation: slideUp 0.6s ease-out; }
        .float { animation: float 3s ease-in-out infinite; }
        .glow { animation: glow 2s ease-in-out infinite; }
      `}</style>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContent} className="fadeIn">
          <h1 style={styles.title}>Your Daily Reflection</h1>
          <p style={styles.subtitle}>Journal your thoughts, track your mood, see patterns emerge. A sanctuary for your inner world.</p>
          <button style={styles.primaryButton} onClick={() => setDemoActive(true)}>
            Explore <ArrowRight size={16} style={{marginLeft: '8px'}} />
          </button>
        </div>
      </section>

      {/* Demo Modal */}
      {demoActive && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button onClick={() => setDemoActive(false)} style={styles.closeButton}>✕</button>
            <h2 style={styles.demoTitle}>Your Mood Calendar</h2>
            <div style={styles.moodGrid}>
              {[...Array(30)].map((_, i) => {
                const moods = ['😊', '😌', '😢', '😤', '😡'];
                const mood = moods[i % moods.length];
                return (
                  <div key={i} style={{...styles.moodDay, background: `hsl(${(i * 12) % 360}, 70%, 85%)`}}>
                    <span style={styles.moodEmoji}>{mood}</span>
                  </div>
                );
              })}
            </div>
            <p style={styles.demoText}>See your emotional patterns at a glance. Click any day to view that journal entry.</p>
          </div>
        </div>
      )}

      {/* Features */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>How Reflect Works</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}><BookOpen size={32} color="#2d5016" /></div>
            <h3 style={styles.featureTitle}>Daily Journaling</h3>
            <p style={styles.featureText}>Write or voice-record your thoughts each day. Your sanctuary for raw, honest reflection.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}><Heart size={32} color="#8b3a3a" /></div>
            <h3 style={styles.featureTitle}>Mood Calendar</h3>
            <p style={styles.featureText}>Track your emotional temperature. See how your mood shifts day by day, week by week.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}><Camera size={32} color="#6b5b3f" /></div>
            <h3 style={styles.featureTitle}>Picture Boards</h3>
            <p style={styles.featureText}>Attach photos to memories. Build visual collections that capture your moments.</p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}><TrendingUp size={32} color="#4a5859" /></div>
            <h3 style={styles.featureTitle}>Mood Insights</h3>
            <p style={styles.featureText}>Discover what lifts you up, what drains you. See the patterns beneath the surface.</p>
          </div>
        </div>
      </section>

      {/* Mood Examples */}
      <section style={styles.moods}>
        <h2 style={styles.sectionTitle}>Track Your Inner World</h2>
        <div style={styles.moodShowcase}>
          <div style={styles.moodCard}>
            <span style={styles.moodLarge}>😊</span>
            <p style={styles.moodLabel}>Joyful</p>
            <p style={styles.moodCount}>12 days this month</p>
          </div>
          <div style={styles.moodCard}>
            <span style={styles.moodLarge}>😌</span>
            <p style={styles.moodLabel}>Peaceful</p>
            <p style={styles.moodCount}>8 days this month</p>
          </div>
          <div style={styles.moodCard}>
            <span style={styles.moodLarge}>🤔</span>
            <p style={styles.moodLabel}>Thoughtful</p>
            <p style={styles.moodCount}>6 days this month</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={styles.pricing}>
        <h2 style={styles.sectionTitle}>Simple Pricing</h2>
        <div style={styles.pricingGrid}>
          <div style={styles.pricingCard}>
            <h3 style={styles.tierName}>Free</h3>
            <p style={styles.tierPrice}>Forever</p>
            <ul style={styles.featureList}>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Daily journaling</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Basic mood calendar</li>
              <li style={{opacity: 0.5}}>Picture boards</li>
              <li style={{opacity: 0.5}}>Mood insights</li>
            </ul>
            <button style={styles.secondaryButton}>Get Started</button>
          </div>

          <div style={{...styles.pricingCard, background: '#f5f3f0', border: '2px solid #2d5016'}}>
            <div style={styles.popular}>Most Popular</div>
            <h3 style={styles.tierName}>Pro</h3>
            <p style={styles.tierPrice}>$9<span style={styles.tierPriceSub}>/mo</span></p>
            <ul style={styles.featureList}>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Unlimited journals</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Full mood calendar</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Picture boards</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Mood insights</li>
            </ul>
            <button style={styles.primaryButton}>Start Free Trial</button>
          </div>

          <div style={styles.pricingCard}>
            <h3 style={styles.tierName}>Premium</h3>
            <p style={styles.tierPrice}>$19<span style={styles.tierPriceSub}>/mo</span></p>
            <ul style={styles.featureList}>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Everything in Pro</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Voice transcription</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Share journals</li>
              <li><CheckCircle2 size={16} style={{marginRight: '8px', display: 'inline'}} />Priority support</li>
            </ul>
            <button style={styles.secondaryButton}>Start Free Trial</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>Loved by Reflective People</h2>
        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Reflect helped me understand what actually makes me happy. The mood calendar is eye-opening."</p>
            <p style={styles.testimonialAuthor}>— Maya, Creative Director</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Finally, a journal that doesn't feel like a chore. Adding photos makes it feel alive."</p>
            <p style={styles.testimonialAuthor}>— David, Therapist</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"I've journaled for years. This is the first app that actually captures the full picture of my emotional life."</p>
            <p style={styles.testimonialAuthor}>— Sofia, Writer</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.finalCta}>
        <h2 style={styles.ctaTitle}>Start Your Journey</h2>
        <p style={styles.ctaSubtitle}>Begin journaling today. Forever free.</p>
        <button style={styles.primaryButton}>
          Begin Free <ArrowRight size={16} style={{marginLeft: '8px'}} />
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Reflect. Your thoughts, preserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  root: {
    background: '#faf8f5',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    color: '#1a1a1a',
  } as React.CSSProperties,

  hero: {
    padding: '120px 40px',
    textAlign: 'center' as const,
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,

  heroContent: {
    maxWidth: '700px',
  } as React.CSSProperties,

  title: {
    fontSize: '64px',
    fontWeight: '700',
    margin: '0 0 24px',
    lineHeight: '1.1',
    color: '#2d5016',
  } as React.CSSProperties,

  subtitle: {
    fontSize: '20px',
    color: '#666',
    margin: '0 0 48px',
    lineHeight: '1.6',
  } as React.CSSProperties,

  primaryButton: {
    padding: '14px 32px',
    background: '#2d5016',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  } as React.CSSProperties,

  secondaryButton: {
    padding: '14px 32px',
    background: '#f5f3f0',
    color: '#1a1a1a',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginTop: '24px',
  } as React.CSSProperties,

  modal: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  } as React.CSSProperties,

  modalContent: {
    background: '#fff',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '600px',
    width: '90%',
    position: 'relative' as const,
  } as React.CSSProperties,

  closeButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  } as React.CSSProperties,

  demoTitle: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 30px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  moodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '8px',
    marginBottom: '24px',
  } as React.CSSProperties,

  moodDay: {
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,

  moodEmoji: {
    fontSize: '20px',
  } as React.CSSProperties,

  demoText: {
    fontSize: '14px',
    color: '#666',
    margin: '0',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  features: {
    padding: '100px 40px',
    background: '#fff',
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: '42px',
    fontWeight: '700',
    margin: '0 0 60px',
    textAlign: 'center' as const,
    color: '#2d5016',
  } as React.CSSProperties,

  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  } as React.CSSProperties,

  featureCard: {
    padding: '32px',
    background: '#faf8f5',
    borderRadius: '8px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  featureIcon: {
    marginBottom: '16px',
  } as React.CSSProperties,

  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 8px',
  } as React.CSSProperties,

  featureText: {
    fontSize: '14px',
    color: '#666',
    margin: '0',
    lineHeight: '1.5',
  } as React.CSSProperties,

  moods: {
    padding: '100px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  moodShowcase: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  } as React.CSSProperties,

  moodCard: {
    padding: '40px',
    background: '#fff',
    borderRadius: '8px',
    textAlign: 'center' as const,
    border: '1px solid #e0e0e0',
  } as React.CSSProperties,

  moodLarge: {
    fontSize: '64px',
    display: 'block',
    marginBottom: '16px',
  } as React.CSSProperties,

  moodLabel: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 8px',
  } as React.CSSProperties,

  moodCount: {
    fontSize: '14px',
    color: '#999',
    margin: '0',
  } as React.CSSProperties,

  pricing: {
    padding: '100px 40px',
    background: '#faf8f5',
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  } as React.CSSProperties,

  pricingCard: {
    padding: '40px',
    background: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    position: 'relative' as const,
  } as React.CSSProperties,

  popular: {
    position: 'absolute' as const,
    top: '-12px',
    left: '20px',
    background: '#2d5016',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '700',
  } as React.CSSProperties,

  tierName: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '16px 0',
  } as React.CSSProperties,

  tierPrice: {
    fontSize: '42px',
    fontWeight: '700',
    margin: '16px 0',
    color: '#2d5016',
  } as React.CSSProperties,

  tierPriceSub: {
    fontSize: '14px',
    color: '#999',
  } as React.CSSProperties,

  featureList: {
    listStyle: 'none',
    padding: '0',
    margin: '24px 0',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    fontSize: '14px',
    textAlign: 'left' as const,
  } as React.CSSProperties,

  testimonials: {
    padding: '100px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  } as React.CSSProperties,

  testimonialCard: {
    padding: '32px',
    background: '#fff',
    borderRadius: '8px',
  } as React.CSSProperties,

  testimonialText: {
    fontSize: '16px',
    fontStyle: 'italic',
    margin: '0 0 16px',
    lineHeight: '1.6',
  } as React.CSSProperties,

  testimonialAuthor: {
    fontSize: '14px',
    color: '#999',
    margin: '0',
  } as React.CSSProperties,

  finalCta: {
    padding: '80px 40px',
    background: '#2d5016',
    color: '#fff',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: '48px',
    fontWeight: '700',
    margin: '0 0 16px',
  } as React.CSSProperties,

  ctaSubtitle: {
    fontSize: '18px',
    color: '#ccc',
    margin: '0 0 40px',
  } as React.CSSProperties,

  footer: {
    padding: '40px',
    textAlign: 'center' as const,
    color: '#999',
    borderTop: '1px solid #e0e0e0',
    background: '#faf8f5',
  } as React.CSSProperties,
};
