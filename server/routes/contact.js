const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { contactValidators } = require('../utils/validators');

router.post('/', contactValidators, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  console.log('New contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ success: true, message: 'Your message has been received!' });
});

module.exports = router;
