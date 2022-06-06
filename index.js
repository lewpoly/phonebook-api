const http = require('http');
const express = require('express');
const app = express();

// app.use(express.json);

let contacts = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/', (req, res) => {
  res.send('<h1>Phonebook Api</h1>');
});

app.get('/info', (req, res) => {
  res.send(`<p>Your phonebook has info for ${contacts.length} contacts.</p>`);
});

app.post('/api/contacts', (req, res) => {
  const maxId =
    contacts.length > 0 ? Math.max(...contacts.map((n) => n.id)) : 0;
  const contact = req.body;
  contact.id = maxId + 1;
  contacts = contacts.concat(contact);
  res.json(contact);
});

app.get('/api/:contacts', (req, res) => {
  res.json(contacts);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}...`);
