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
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)', 
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif"
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '16px',
      color: '#ffb703',
      fontWeight: '700',
      letterSpacing: '-0.02em'
    },
    subtitle: {
      fontSize: '1.1rem',
      marginBottom: '40px',
      color: '#e0e0e0',
      maxWidth: '800px',
      margin: '0 auto 50px',
      lineHeight: '1.6'
    },
    glassWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(10px)', 
      WebkitBackdropFilter: 'blur(10px)', 
      borderRadius: '20px',
      padding: '50px 30px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    th: {
      padding: '25px 15px',
      fontSize: '1.3rem',
      fontWeight: '600',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    td: {
      padding: '20px 15px',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    },
    planHeader: {
      textAlign: 'center',
      paddingBottom: '15px',
      position: 'relative'
    },
    popularBadge: {
      background: 'linear-gradient(90deg, #ffb703, #ff9e00)',
      color: '#0d1b2a',
      padding: '8px 20px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '700',
      display: 'inline-block',
      marginBottom: '15px',
      letterSpacing: '0.5px'
    },
    priceDisplay: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#ffb703',
      margin: '15px 0',
      letterSpacing: '-0.02em'
    },
    priceUnit: {
      fontSize: '1rem',
      color: '#b0b0b0',
      marginLeft: '5px',
      fontWeight: '400'
    },
    billingToggle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '50px',
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '10px',
      borderRadius: '50px',
      maxWidth: '400px',
      margin: '0 auto 40px'
    },
    toggleOption: {
      padding: '12px 30px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    ctaButton: {
      background: 'linear-gradient(90deg, #ffb703, #ff9e00)',
      color: '#0d1b2a',
      border: 'none',
      padding: '14px 30px',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '15px',
      width: '100%',
      maxWidth: '220px'
    },
    secondaryButton: {
      background: 'transparent',
      color: '#ffb703',
      border: '2px solid #ffb703',
      padding: '12px 25px',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '15px',
      width: '100%',
      maxWidth: '220px'
    },
    enterpriseButton: {
      background: 'transparent',
      color: '#2196F3',
      border: '2px solid #2196F3',
      padding: '12px 25px',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '15px',
      width: '100%',
      maxWidth: '220px'
    },
    trustSection: {
      marginTop: '60px',
      paddingTop: '40px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    trustItem: {
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 20px',
      color: '#b0b0b0',
      fontSize: '0.95rem',
      gap: '8px'
    },
    enterpriseNote: {
      marginTop: '20px',
      padding: '20px',
      backgroundColor: 'rgba(33, 150, 243, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(33, 150, 243, 0.2)',
      textAlign: 'left',
      maxWidth: '800px',
      margin: '40px auto 0'
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
      cta: "Schedule Demo"
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