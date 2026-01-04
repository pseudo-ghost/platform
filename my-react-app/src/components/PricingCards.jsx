import React, { useState } from 'react';

const PricingCards = () => {
  
  const [isYearly, setIsYearly] = useState(false);

  const Check = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
      <circle cx="12" cy="12" r="10" fill="#ffb703" fillOpacity="0.2"/>
      <path d="M8 12L11 15L16 9" stroke="#ffb703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const styles = {
    section: { padding: '80px 20px', background: '#0d1b2a', textAlign: 'center', fontFamily: "'Inter', sans-serif" },
   
    toggleContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '40px' },
    switch: {
      width: '60px', height: '30px', background: 'rgba(255,255,255,0.1)',
      borderRadius: '20px', position: 'relative', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)'
    },
    knob: {
      width: '24px', height: '24px', background: '#ffb703', borderRadius: '50%',
      position: 'absolute', top: '2px', left: isYearly ? '32px' : '4px', transition: 'all 0.3s ease'
    },
   
    wrapper: { display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' },
    card: {
      background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(15px)', borderRadius: '24px',
      padding: '40px', width: '280px', border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease', textAlign: 'left', position: 'relative'
    },
    popularCard: { borderColor: '#ffb703', transform: 'scale(1.05)', boxShadow: '0 10px 30px rgba(255, 183, 3, 0.2)' },
    badge: {
      position: 'absolute', top: '-15px', right: '20px', background: '#ffb703',
      color: '#0d1b2a', padding: '5px 15px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold'
    },
    price: { fontSize: '2.5rem', fontWeight: 'bold', color: '#ffb703', margin: '20px 0' },
    btn: { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', background: '#ffb703', color: '#0d1b2a', fontWeight: 'bold', cursor: 'pointer' }
  };

  
  const handleHover = (e, isPopular) => {
    e.currentTarget.style.transform = isPopular ? 'scale(1.08) translateY(-10px)' : 'translateY(-15px)';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
  };

  const handleLeave = (e, isPopular) => {
    e.currentTarget.style.transform = isPopular ? 'scale(1.05)' : 'translateY(0)';
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
  };

  return (
    <section style={styles.section}>
      <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '10px' }}>Simple Pricing</h2>
      
      {/* 2. The Switch */}
      <div style={styles.toggleContainer}>
        <span style={{ color: !isYearly ? '#fff' : 'rgba(255,255,255,0.5)' }}>Monthly</span>
        <div style={styles.switch} onClick={() => setIsYearly(!isYearly)}>
          <div style={styles.knob}></div>
        </div>
        <span style={{ color: isYearly ? '#fff' : 'rgba(255,255,255,0.5)' }}>Yearly <small style={{color: '#ffb703'}}>(Save 20%)</small></span>
      </div>

      <div style={styles.wrapper}>
        {/* Apprentice */}
        <div style={styles.card} onMouseEnter={(e) => handleHover(e, false)} onMouseLeave={(e) => handleLeave(e, false)}>
          <h3>Apprentice</h3>
          <div style={styles.price}>Free</div>
          <button style={styles.btn}>Join Free</button>
        </div>

        {/* Specialist Card (POPULAR) */}
        <div style={{ ...styles.card, ...styles.popularCard }} onMouseEnter={(e) => handleHover(e, true)} onMouseLeave={(e) => handleLeave(e, true)}>
          <div style={styles.badge}>MOST POPULAR</div>
          <h3>Specialist</h3>
          <div style={styles.price}>
            {isYearly ? '$240' : '$25'} 
            <span style={{ fontSize: '0.9rem', color: '#fff' }}>/{isYearly ? 'yr' : 'mo'}</span>
          </div>
          <button style={styles.btn}>Start Trial</button>
        </div>

        {/* Master Card */}
        <div style={styles.card} onMouseEnter={(e) => handleHover(e, false)} onMouseLeave={(e) => handleLeave(e, false)}>
          <h3>Master</h3>
          <div style={styles.price}>
            {isYearly ? '$720' : '$75'}
            <span style={{ fontSize: '0.9rem', color: '#fff' }}>/{isYearly ? 'yr' : 'mo'}</span>
          </div>
          <button style={styles.btn}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;