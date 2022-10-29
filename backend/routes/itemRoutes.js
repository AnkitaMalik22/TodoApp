const express = require('express');
const router = express.Router();

const { getItem, addItem} = require('../controllers/itemController');

router.route('/')
  .get(getItem)
  .post(addItem)


module.exports = router;