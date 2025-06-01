# EcoWorldBuy.com – Module 5: Payments Integration

**Repository Name:** `candidate-00X-ecoworldbuy-module-payments`  
> Replace `00X` with your candidate number (e.g. `candidate-007-ecoworldbuy-module-payments`)

## 🌿 One-Liner Overview

EcoWorldBuy.com is an eco-friendly e-commerce marketplace for sustainable, planet-positive products—standing for **transparency**, **trust**, and a **global green-shopping** community.

---

## 💳 Module Description: Payments Integration

This module implements a **Stripe Checkout** flow that allows users to one-click purchase a featured product, the **Eco Starter Pack (€10)**, directly from the Hero section.

### ✅ Features

- **"Shop Now"** button in the Hero section
- Mock Stripe session flow on button click
- Redirects user to Stripe Checkout
- Handles webhook outcomes:
  - `✅ Purchase successful` on `checkout.session.completed`
  - `❌ Payment failed` on `payment_intent.payment_failed`
- Styled with **EcoWorldBuy’s brand guidelines**

---

## 🛠️ Technologies Used

- React (Frontend)
- CSS Modules
- Stripe Mock Integration
- REST API (Mock)
- Brand-Driven UI Styling

---
