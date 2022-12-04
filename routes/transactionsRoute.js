const express = require('express');
const Transaction = require('../models/Transaction');
const moment = require('moment');
const router = express.Router();

//添加流水API
router.post('/add-transaction', async (req, res) => {
  try {
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send('交易流水添加成功！');
  } catch (error) {
    res.status(500).json(error);
  }
});

//获取所有交易流水API
router.post('/get-all-transactions', async (req, res) => {
  try {
    const { frequency, selectedRange, type } = req.body;
    const transactions = await Transaction.find({
      ...(frequency !== 'custom'
        ? { date: { $gt: moment().subtract(Number(frequency), 'd').toDate() } }
        : { date: { $gte: selectedRange[0], $lte: selectedRange[1] } }),
      userid: req.body.userid,
      ...(type !== 'all' && { type }),
    });
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
