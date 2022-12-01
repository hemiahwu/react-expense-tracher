const express = require('express');
const dbConnect = require('./dbConnect');
const userRoute = require('./routes/usersRoute');
const PORT = process.env.PORT || 5000;

const app = express();
//配置中间件
app.use(express.json());

//配置路由
app.use('/api/users/', userRoute);

app.listen(PORT, () => console.log(`服务器正在${PORT}端口号运行！`));
