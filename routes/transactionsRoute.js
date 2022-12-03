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
    const transactions = await Transaction.find({
      date: {
        //$gt: moment('2022-11-01).toDate(),
        //$lt: moment('2022-11-01').toDate(),
        // $gt: moment().subtract(365, 'd').toDate(),
      },
      userid: req.body.userid,
    });
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
