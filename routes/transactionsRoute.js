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

//编辑交易流水API
router.post('/edit-transaction', async (req, res) => {
  try {
    await Transaction.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.send('交易流水更新成功！');
  } catch (error) {
    res.status(500).json(error);
  }
});

//删除交易流水API
router.post('/delete-transaction', async (req, res) => {
  try {
    await Transaction.findOneAndDelete({ _id: req.body.transactionId });
    res.send('交易流水删除成功！');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
