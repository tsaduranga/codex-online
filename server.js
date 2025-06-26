const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let nextId = 1;
const customers = new Map();

// List all customers
app.get('/customers', (req, res) => {
  res.json(Array.from(customers.values()));
});

// Create a new customer
app.post('/customers', (req, res) => {
  const customer = { id: nextId++, ...req.body };
  customers.set(customer.id, customer);
  res.status(201).json(customer);
});

// Read a customer by id
app.get('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const customer = customers.get(id);
  if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
  }
  res.json(customer);
});

// Update a customer
app.put('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!customers.has(id)) {
    return res.status(404).json({ error: 'Customer not found' });
  }
  const updated = { ...customers.get(id), ...req.body, id };
  customers.set(id, updated);
  res.json(updated);
});

// Delete a customer
app.delete('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!customers.has(id)) {
    return res.status(404).json({ error: 'Customer not found' });
  }
  customers.delete(id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
