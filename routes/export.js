const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const exportedData = req.session.savedData || 'No data available';
  res.render('export-data', { title: 'Exported Data', data: exportedData });
});

module.exports = router;
