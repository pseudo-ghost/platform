import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' or 'monthly'

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CrossIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <path d="M9 9L15 15M15 9L9 15" stroke="#FF5252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

 const styles = {
  container: {
    padding: '100px 20px',
    background: '#210635', // MOON Deep Navy
    color: '#F5D5E0',      // MOON Soft Pink text
    textAlign: 'center',
    fontFamily: "'Inter', sans-serif"
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    marginBottom: '20px',
    color: '#F5D5E0',      // Soft Pink
    fontWeight: '800',
    letterSpacing: '-0.03em'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#6667AB',      // MOON Blue-Purple
    maxWidth: '700px',
    margin: '0 auto 60px',
    lineHeight: '1.7'
  },
  billingToggle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(102, 103, 171, 0.15)', 
    padding: '8px',
    borderRadius: '50px',
    maxWidth: '320px',
    margin: '0 auto 60px',
    border: '1px solid rgba(245, 213, 224, 0.1)'
  },
  toggleOption: {
    padding: '12px 24px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '0.9rem',
  
  },
  glassWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'rgba(66, 13, 75, 0.3)', 
    backdropFilter: 'blur(15px)', 
    WebkitBackdropFilter: 'blur(15px)', 
    borderRadius: '24px',
    padding: '40px 20px', 
    border: '1px solid rgba(245, 213, 224, 0.1)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden' 
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed', 
    minWidth: 'auto' 
  },
  th: {
    padding: '20px 10px', 
    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', 
    fontWeight: '700',
    color: '#F5D5E0',
    borderBottom: '1px solid rgba(245, 213, 224, 0.1)'
  },
  td: {
    padding: '15px 10px', 
    color: '#6667AB',
    fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
    borderBottom: '1px solid rgba(102, 103, 171, 0.1)',
    wordBreak: 'break-word' 
  },
  popularBadge: {
    background: 'linear-gradient(90deg, #7B337E, #6667AB)', // Vibrant Purple gradient
    color: '#F5D5E0',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: '10px',
    display: 'inline-block'
  },
  priceDisplay: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#F5D5E0',
    margin: '10px 0'
  },
  ctaButton: {
    background: '#7B337E', // Theme Primary Purple
    color: '#F5D5E0',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(123, 51, 126, 0.3)',
    width: '100%'
  },
  secondaryButton: {
    background: 'transparent',
    color: '#F5D5E0',
    border: '2px solid rgba(123, 51, 126, 0.5)',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
  },
  enterpriseNote: {
    marginTop: '60px',
    padding: '30px',
    backgroundColor: 'rgba(123, 51, 126, 0.1)',
    borderRadius: '16px',
    border: '1px solid rgba(123, 51, 126, 0.3)',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '60px auto 0'
  }
};

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  // B2B-appropriate pricing
  const pricingData = {
    monthly: {
      pro: '$49',
      enterprise: '$129',
      premium: '$349'
    },
    annual: {
      pro: '$39',
      enterprise: '$99',
      premium: '$279'
    }
  };

  const currentPrices = pricingData[billingCycle];

  // B2B-focused features
  const features = [
    ["Maximum Learners", "Up to 50", "Up to 500", "Unlimited"],
    ["Course Management", "Basic Library", "Advanced Library + AI Curation", "Enterprise Library + Custom Content"],
    ["White-Label Branding", <CrossIcon />, <CheckIcon />, <CheckIcon />],
    ["Admin & Reporting", "Basic Dashboard", <><CheckIcon /><br/><span style={{fontSize: '0.9em', color: '#b0b0b0'}}>Advanced Analytics</span></>, <><CheckIcon /><br/><span style={{fontSize: '0.9em', color: '#b0b0b0'}}>Custom Reporting Suite</span></>],
    ["Integration Options", "Standard API", "Advanced API + Webhooks", "Dedicated Integration Team"],
    ["Compliance & Security", "GDPR Ready", "SOC2 Type I", "SOC2 Type II + Custom"],
    ["Support Level", "Business Hours", "24/7 Priority", "Dedicated Account Team"],
    ["Custom Workflows", <CrossIcon />, "Limited", "Unlimited"],
    ["SLA Guarantee", "99.5%", "99.9%", "99.95%"],
    ["Implementation Support", "Guided Setup", "Managed Migration", "Full Implementation Services"]
  ];

  const plans = [
    { 
      name: "Lumina Pro", 
      color: "#4CAF50", 
      description: "For small teams & departments starting with digital learning",
      cta: "Schedule Demo",
      popular: false,
    },
    { 
      name: "Lumina Enterprise", 
      color: "#ffb703", 
      description: "Most popular for mid-sized organizations scaling training programs", 
      popular: true,
      cta: "Schedule Consultation"
    },
    { 
      name: "Lumina Premium", 
      color: "#2196F3", 
      description: "Complete solution for large institutions & global enterprises",
      popular: true,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" style={styles.container}>
      <h1 style={styles.title}>Enterprise Learning Solutions</h1>
      <p style={styles.subtitle}>
        Scalable pricing for organizations of every size. All plans include implementation support, 
        security compliance, and are trusted by 300+ educational institutions and enterprises worldwide.
      </p>

      <div style={styles.billingToggle}>
        <div 
          style={{
            ...styles.toggleOption,
            background: billingCycle === 'annual' ? '#ffb703' : 'transparent',
            color: billingCycle === 'annual' ? '#0d1b2a' : '#ffffff'
          }}
          onClick={() => setBillingCycle('annual')}
        >
          Annual Billing (Save 20%)
        </div>
        <div 
          style={{
            ...styles.toggleOption,
            background: billingCycle === 'monthly' ? '#ffb703' : 'transparent',
            color: billingCycle === 'monthly' ? '#0d1b2a' : '#ffffff'
          }}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly Billing
        </div>
      </div>

      <div style={styles.glassWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{...styles.th, textAlign: 'left', width: '30%', fontSize: '1.2rem', fontWeight: '700'}}>Platform Features</th>
              {plans.map((plan, index) => (
                <th key={index} style={{...styles.th, ...styles.planHeader}}>
                  {plan.popular && <div style={styles.popularBadge}>RECOMMENDED</div>}
                  <h3 style={{color: plan.color, margin: '10px 0', fontSize: '1.4rem', fontWeight: '700'}}>{plan.name}</h3>
                  <p style={{color: '#b0b0b0', fontSize: '0.95rem', margin: '5px 0 20px', lineHeight: '1.5'}}>{plan.description}</p>
                  <div style={styles.priceDisplay}>
                    {index === 0 ? currentPrices.pro : index === 1 ? currentPrices.enterprise : currentPrices.premium}
                    <span style={styles.priceUnit}>/learner/month</span>
                  </div>
                  <button 
                    style={plan.popular ? styles.ctaButton : plan.name === "Lumina Premium" ? styles.enterpriseButton : styles.secondaryButton}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    {plan.cta}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
              >
                <td style={{...styles.td, textAlign: 'left', fontWeight: '500', color: '#e0e0e0'}}>{row[0]}</td>
                <td style={{...styles.td, textAlign: 'center', color: '#b0b0b0'}}>{row[1]}</td>
                <td style={{...styles.td, textAlign: 'center', color: '#b0b0b0'}}>{row[2]}</td>
                <td style={{...styles.td, textAlign: 'center', color: '#b0b0b0'}}>{row[3]}</td>
              </tr>
            ))}
            {/* Pricing Row */}
            <tr style={{backgroundColor: 'rgba(255, 183, 3, 0.05)'}}>
              <td style={{...styles.td, textAlign: 'left', fontWeight: '600', fontSize: '1.1rem', color: '#ffffff'}}>
                Estimated Monthly Cost (100 learners)
              </td>
              <td style={{...styles.td, textAlign: 'center', fontSize: '1.2rem', fontWeight: '700', color: '#ffb703'}}>
                ${billingCycle === 'annual' ? '3,900' : '4,900'}
                <div style={{fontSize: '0.9rem', color: '#b0b0b0', marginTop: '5px', fontWeight: '400'}}>
                  {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                </div>
              </td>
              <td style={{...styles.td, textAlign: 'center', fontSize: '1.2rem', fontWeight: '700', color: '#ffb703'}}>
                ${billingCycle === 'annual' ? '9,900' : '12,900'}
                <div style={{fontSize: '0.9rem', color: '#b0b0b0', marginTop: '5px', fontWeight: '400'}}>
                  {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                </div>
              </td>
              <td style={{...styles.td, textAlign: 'center', fontSize: '1.2rem', fontWeight: '700', color: '#2196F3'}}>
                ${billingCycle === 'annual' ? '27,900' : '34,900'}
                <div style={{fontSize: '0.9rem', color: '#b0b0b0', marginTop: '5px', fontWeight: '400'}}>
                  {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={styles.enterpriseNote}>
          <h4 style={{color: '#2196F3', marginBottom: '10px', fontSize: '1.1rem'}}>Custom Enterprise Solutions</h4>
          <p style={{color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6'}}>
            For organizations with 1000+ learners, multi-region deployments, or complex compliance requirements, 
            we offer fully custom solutions. Includes dedicated infrastructure, custom SLA terms, and personalized implementation.
          </p>
        </div>

        <div style={styles.trustSection}>
          <div style={{marginBottom: '20px', color: '#b0b0b0'}}>
            <span style={styles.trustItem}><div style={{color: '#4CAF50'}}>✓</div> 30-day implementation guarantee</span>
            <span style={styles.trustItem}><div style={{color: '#4CAF50'}}>✓</div> Compliant with GDPR & SOC2</span>
            <span style={styles.trustItem}><div style={{color: '#4CAF50'}}>✓</div> Dedicated implementation support</span>
            <span style={styles.trustItem}><div style={{color: '#4CAF50'}}>✓</div> No long-term contracts required</span>
          </div>
          <p style={{color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6'}}>
            All prices are in USD. Volume discounts available for 500+ learners. Need a custom quote?{' '}
            <a href="#contact" style={{color: '#ffb703', textDecoration: 'none', fontWeight: '600'}}>
              Contact our enterprise sales team
            </a>{' '}
            for a personalized proposal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;