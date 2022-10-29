const Item = require('../models/itemModel');

//  Get all from item
//  GET /api/v1/item
exports.getItem = async (req, res, next) => {
  try {
    const item = await Item.find();
    return res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}

//  Add to item
// POST /api/v1/item
exports.addItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    const items = await Item.find();
    return res.status(201).json({
      success: true,
data:items
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}

