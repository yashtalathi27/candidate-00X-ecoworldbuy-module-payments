const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/create-checkout-session', (req, res) => {
  const { productId, amount_cents, currency } = req.body;
  if (productId === 'FEATURED_001') {
    return res.json({ sessionId: 'cs_test_12345' }); // Mock Session ID
  }
  res.status(400).json({ error: 'Invalid product' });
});

app.listen(4000, () => {
  console.log('Mock server running on http://localhost:4000');
});
