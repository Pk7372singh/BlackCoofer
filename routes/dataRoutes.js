const express = require('express');
const router = express.Router();
const Data = require('../models/Data'); 


router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/data', async (req, res) => {
  try {
    const result = await Data.deleteMany({});
    res.status(200).json({ message: 'All data deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
