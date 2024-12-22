const express = require('express');
const router = express.Router();

// Main page route
router.get('/', (req, res) => {
  res.render('index', { title: 'File Upload Page' });
});


// Handle file data saving
router.post('/save-data', (req, res) => {
  const { content } = req.body;
  req.session.savedData = content || 'No data uploaded'; // Save to session
  res.status(200).send('Data saved successfully!');
});

module.exports = router;
