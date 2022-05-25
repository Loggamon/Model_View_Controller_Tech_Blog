const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
   //temp test
   try {
   res.render('homepage')
   } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;