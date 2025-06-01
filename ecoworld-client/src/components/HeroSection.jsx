import React from 'react';

const HeroSection = () => {
  const handleShopNow = async () => {
    const res = await fetch('http://localhost:4000/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: 'FEATURED_001',
        amount_cents: 1000,
        currency: 'EUR',
      }),
    });

    const data = await res.json();
    if (data.sessionId) {
      window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
    } else {
      alert('❌ Payment failed. Please try again.');
    }
  };

  return (
    <section className="hero">
      <h1 className="headline">Welcome to EcoWorldBuy</h1>
      <p className="subtitle">Planet-positive products for a sustainable future.</p>
      <button className="ghost-btn" onClick={handleShopNow}>
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;
