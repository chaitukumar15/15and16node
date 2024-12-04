const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

const SECRET_KEY = 'your-secret-key'; // Your secret key for verifying JWT

app.use(express.json());

app.get('/protected', (req, res) => {
  const authHeader = req.get('Authorization');
  
  if (!authHeader) {
    return res.status(401).send('Authorization header missing');
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('Token missing');
  }

  // Verify the JWT token
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid or expired token');
    }

    // Token is valid, send a response
    console.log('Decoded token:', decoded);
    res.send('Token is valid');
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
