const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://msonline123:test123456@msonline.menjs.mongodb.net/expense-tracker',
  { useNewUrlParser: true, useunifiedTopology: true }
);

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));

connection.on('connected', () => console.log('MongoDB数据库连接成功!'));
