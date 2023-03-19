# MERN全栈项目——记账本

## 一、配置前端

### 1、初始化ReactAPP

1. 创建文件夹

- 在桌面创建expense tracker 文件夹

2. 命令

```bash
npx create-react-app client
cd client
npm start
```

3. 清理文件夹，进入src文件夹

- 进入App.js，删除return中的header内容及引入的logo，补充文本内容：我的记账本

```jsx
import './App.css'

function App() {
  return <div className="App">
  <h1>我的记账本</h1>
  </div>;
}

export default App;
```

- 删除logo.svg
- 清空App.css样式



### 2、配置文件结构及安装模块

1. 安装三方模块

```bash
npm install antd react-router-dom aos react-redux redux axios
//Axios，是一个基于promise的网络请求库，作用于node.js和浏览器中
//AOS（Animate on scroll）是小型动画滚动库，可在页面滚动时给元素添加动画效果。
```

2. 重启

```bash
npm start
```

3. antd官网：https://ant.design/index-cn             and of react文档：https://ant.design/docs/react/introduce-cn

```
antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。
```

- 进入组件，找到Button按钮，并拷贝primary button的代码插入到App.js进行展示

```bash
  import { Button} from 'antd';
  <Button type="primary">Primary Button</Button>
```

4. 配置文件目录

- 创建src/pages文件夹                                     用于存放项目页面组件
- 创建src/components                                     用于存放项目中公用的组件
- 创建src/resources                                          用于存放公共静态资源
- 创建src/redux                                                 用于存放状态管理

5. 引入bootstrap:https://getbootstrap.com/,         拷贝CDN链接，进入public/index.html进行粘贴，清楚注释掉的内容，修改title。

```html
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
```



### 3、创建默认布局组件

1. 创建页面组件文件及默认布局组件

- 创建src/pages/Home.js
- 创建src/components/DefaultLayout.js

2. 进入DefaultLayout.js：

```jsx
import React from "react";

function DefaultLayout(props) {
 
  return (
    <div className="layout">
      <div className="header">
        <div>
          <h1 className="logo">我的记账本</h1>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;

```

3. 进入Home.js

```jsx
import React from "react";
import DefaultLayout from '../components/DefaultLayout'

function Home() {
  return (
    <DefaultLayout>
      <h1>这是主页</h1>
    </DefaultLayout>
  );
}

export default DefaultLayout;
```

4. 进入App.js

```jsx
import "./App.css";
import { BrowserRouter as Routers,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;

```

5. 创建src/pages/Test.js文件，测试路由

```jsx
import React from 'react'
import DefaultLayout from '../components/DefaultLayout'

function Test() {
  return (
      <DefaultLayout><h1>这是测试页面</h1></DefaultLayout>
  )
}

export default Test
```

6. Test.js文件引入App.js中：

```jsx
import "./App.css";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
```



### 4、添加默认布局组件样式

1. 首先进入index.js，引入Googlefonts字体图标：ZCOOL XiaoWei

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap');
body {
  margin: 0;
  font-family: 'Noto Sans SC', sans-serif;
}

```

2. 创建src/resources/default-layout.css

```css
.layout{
    margin: 0 100px;
}
.header{
    background-color: #1677FF
    padding: 20px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
.logo{
    font-size: 30px;
    color: rgba(255, 255, 255, 0.716);
    margin: 0 !important;
    cursor: pointer;
}

.username{
    font-size: 18px;
    color: rgba(255, 255, 255, 0.742);
}

.content{
    height: 85vh;
    box-shadow: 0 0 2px gray;
    margin-top: 20px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    padding: 15px;
}

@media screen and (max-width:700px){
    .layout{
        margin: 0 15px;
    }
}
```

3. 将default-layout.css引入DefaultLayout.js

```jsx
import React from "react";
import "../resources/default-layout.css";
function DefaultLayout(props) {

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">我的记账本</h1>
        </div>
        <div>
          <h1 className="username">用户姓名</h1>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;

```

4. 测试样式，若引入的外部字体无效，可以进入index.css，设置为最高级

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap');
body {
  margin: 0;

  font-family: 'Noto Sans SC', sans-serif !important;
}


```

5.测试

```bash
npm start
```



## 二、配置后台

### 1、初始化server服务器

1. 进入expense tracker文件夹，初始化项目

```bash
npm init
```

2. 安装第三方软件包

```
npm install nodemon mongoose express
```

3. 创建expense tracker/server.js文件：

```js
const express = require('express')
const app = express()
const PORT =process.env.PORT || 5000

app.get('/',(req,res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`服务器正在${PORT}端口号运行...`);)
```

4. 监听server服务器

```
nodemon server
```



### 2、连接MongoDB数据库

1. 登录MongoDB Atlas: https://www.mongodb.com/atlas/database
2. 执行流程：

```
第一步创建新的database数据库：点击Atlas面板中的Browse Collections
第二步点击Create Database 按钮，输入数据库名称及集群名称
第三步点击Overview返回主页面板，并点击connect连接按钮
第四步点击connect using MongoDB Compass
第五步如果没有MongoDB Compass面板，就点击进行安装，如果有就拷贝连接到mongoDB Compass 的连接字符串
第六步打开MongoDB Compass面板粘贴字符串进行连接:
mongodb+srv://<username>:<password>@msonline.menjs.mongodb.net/expense-tracker
第七步实现nodejs连接到mongoDB数据库
```

3. 创建expense-tracker/dbConnect.js：

```js
const mongoose = require('mongoose');

mongoose.connect(
 'mongodb+srv://msonline123:test123456@msonline.menjs.mongodb.net/expense-tracker'
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));

connection.on('connected', () =>
  console.log('MongoDB数据库连接成功！')
);

```

4. 进入server.js

```js
const dbConnect = require('./dbConnect')
```

## 三、用户登录/注册UI

### 1、注册页面组件

1. 推荐颜色取值器【ColorPick Eyedroppe】：https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg
2. 分析登录/注册页面结构
3. 使用antd提供的表单组件来进行构建：https://ant.design/components/form-cn， 优势不需要使用reacthooks或者state状态来声明。
4. 配置页面组件文件：

- 创建src/pages/Login.js                     用于放置登录页面组件内容
- 创建src/pages/Register.js                用于放置注册页面组件内容

5. 进入Login.js ：

```jsx
import React from 'react'


function Login() {
  return (
      <div>这是登录页面</div>
  )
}

export default Login
```

6. 进入Register.js:

```jsx
import React from 'react'


function Register() {
  return (
      <div>这是注册页面</div>
  )
}

export default Register
```

7. 进入App.js，引入上方两个新的页面组件，并测试

```jsx
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

```

8. 进入Register.js，添加样式结构：

```jsx

import React from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input";

function Register() {

  return (
    <div className="register">
      <div className="row ">
        <div className="col-md-5">
        {/*左侧图片*/}
        </div>
        <div className="col-md-4">
           {/*右侧表单*/}
          {/*vertical的作用是进行垂直对齐*/}
          <Form layout="vertical" >
            <h1>用户注册</h1>
           
            <Form.Item label="姓名" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="邮箱" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">已经注册 ,点击进入登录页面</Link>
              <button className="primary" type="submit">
               注册
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;

```

9. 进入index.css，添加全局的主题颜色：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap');
body {
  margin: 0;
  font-family: 'Noto Sans SC', sans-serif;
}

.primary{
   background-color: #1677FF;
   padding:5px 20px;
   color: white;
   border: none;
   border-radius: 3px;
}
```

### 2、登录页面组件

1. 一个免费下载各类动画素材的网站：https://lottiefiles.com/

- 第一步先进行登录，若无账号可以进行注册
- 搜索框中输入money，查询相关动画素材
- 选择“Guilherme Lopes”，点击【html】按钮
- 拷贝提供的scripe标签，粘贴到public中的index
- 拷贝提供的<lottie-player>粘贴到Register组件对应的位置，删除【style】【controls】属性

```jsx
import React from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input";

function Register() {

  return (
    <div className="register">
      <div className="row ">
        <div className="col-md-5">
        {/*左侧图片*/}
           <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
        </div>
       ...
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
```

2. 设置Register中row的弹性布局：

```jsx
import React from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input";

function Register() {

  return (
    <div className="register">
      <div className="row justify-content-center align-items-center w-100 h-100">
        ...
      </div>
    </div>
  );
}

export default Register;
```

3. 若出现滚动条，可以进入index.css:

```css
body,html{
  overflow-x: hidden;
}

```

4. 添加Register中动画素材的样式，可以单独创建一个css外部样式：

- 创建src/resources/authentication.css文件：

```css
.register{
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  {/*进入webgradients.com，拷贝喜欢的渐变色-022*/}
    background-image: linear-gradient(to right, #30cfd0 0%, #330867 100%);
}
.lottie{
    height:400px;
}

.register input{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.784);
    color: rgba(255, 255, 255, 0.568);
}

input:focus{
   outline: none !important;
   box-shadow: none !important;
   border-bottom: 1px solid rgba(255, 255, 255, 0.784) !important;
}

label , a{
    color: rgba(255, 255, 255, 0.536) !important;
}

.register h1{
    font-size: 35px;
    color: white;
    font-weight: 600;
}
```

5. 表单提交设置：

```jsx
import { Form,Input} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../resources/authentication.css";


function Register() {
  //2 输出表单内容
  const onFinish = async (values) => {
   console.log(values)
  };


  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          {/*1 添加onFinish:提交表单且数据验证成功后回调事件*/}
           <Form layout="vertical" onFinish={onFinish}>
            <h1>用户注册</h1>
           
            <Form.Item label="姓名" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="邮箱" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">已经注册 ,点击进入登录页面</Link>
              <button className="primary" type="submit">
               注册
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;

```

6. 拷贝代码粘贴到Login.js中，并做修改：

```jsx
import { Form,Input} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../resources/authentication.css";


function Login() {
  const onFinish = async (values) => {
   console.log(values)
  };


  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
           <Form layout="vertical" onFinish={onFinish}>
            <h1>用户登录</h1>
            <Form.Item label="邮箱" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password">
              {/*在不想使用缓存的input标签中添加 autocomplete="off"属性;*/}
              <Input type="password" autocomplete=“new-password” />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">还没有注册 ,点击进入注册页面</Link>
              <button className="primary" type="submit">
               登录
              </button>
            </div>
          </Form>
        </div>
        
         <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
```



## 四、用户登录/注册API

### 1、用户模型及API

1. 首先创建数据库的models模型：

- 创建expense-tacker/models/User.js

```js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})
//Model对象代表的是数据库中的（collection），通过Model才能对数据库进行操作
//第一个参数是modelName，代表的是你要和数据库中映射的集合名（默认是复数形式），第二个参数schema代表的是你刚刚创建的schema对象名。
const usermodel = mongoose.model('Users' , userSchema)

module.exports = usermodel
```

2. 创建API:

- 创建expense-tracker/routes/usersRoute.js:

```js
const express = require("express");
const User = require("../models/User");
 //使用 express.Router 类创建模块化、可挂载的路由句柄
const router = express.Router();

router.post("/login", async function (req, res) {
  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", async function (req, res) {
    try {
      //创建用户
      const newuser = new User(req.body);
      await newuser.save();
      res.send('新用户注册成功！')
    } catch (error) {
      res.status(500).json(error);
    }
  });

//暴露 router模块
  module.exports = router;
```

3. 进入server.js，将路由添加到应用当中:

```js
const express = require('express')
const dbConnect = require('./dbConnect')
const userRoute = require('./routes/userRoute')
const app = express()
const PORT =process.env.PORT || 5000

//express.json()是Express 中内置的中间件功能。此方法用于解析带有 JSON 有效负载的传入请求,并基于 bodyparser。
app.use(express.json())

//配置路由
app.use('/api/users/',userRoute)



app.listen(PORT, () => console.log(`服务器正在${PORT}端口号运行...`);)
```



### 2、测试登录和注册

1. 进入client/package.json，配置proxy：

```json
//前端配置跨域代理 
"proxy": "http://localhost:5000"
```

2. 进入Register.js，使用axios发起请求：

```jsx
import { Form,Input,message} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../resources/authentication.css";
//1 引入模块
import axios from 'axios'

function Register() {
 
  const onFinish = async (values) => {
    //2 发起请求
    try {
      await axios.post("/api/users/register", values);
      message.success("注册成功！");
    } catch (error) {
      message.error("抱歉，出错了！");
    }
  };

  return (
    ...
   ）
}

export default Register;
```

3. 进入Login.js:

```jsx
import { Form,Input} from "antd";
import React from "react";
//3 结构导航
import { Link,useNavigate } from "react-router-dom";
import "../resources/authentication.css";
//1 引入模块
import axios from 'axios'

function Login() {
  
 //4 实例导航hooks
  const navigate = useNavigate();
  const onFinish = async (values) => {
    //2 发起请求
    try {
     const response = await axios.post("/api/users/login", values);
      //3  本地存储
       localStorage.setItem(
        "expense-tracker-user",
        JSON.stringify(response)
      );
      message.success("登录成功！");
      // 5 导航进入主页
      navigate("/");
    } catch (error) {
      message.error("登录失败！");
    }
  };

  return 
    ...
   ）
}

export default Login;
```

4. 测试：注册新用户，查询MongoDB Compass数据库是否更新
5. 测试：登录用户
6. 查看Application中的LocalStorage是否保存数据
7. 本地存储中，会保存密码，解决方式：

```jsx
const onFinish = async (values) => {
   
    try {
     const response =  await axios.post("/api/users/login", values);
       localStorage.setItem(
        "expense-tracker-user",
         //解决方法
        JSON.stringify({ ...response.data, password: "" })
      );
      message.success("登录成功！");
      navigate("/");
    } catch (error) {
      message.error("登录失败！");
    }
  };
```



## 五、加载/路由保护

### 1、加载和通知

1. 使用antd提供的spin组件实现加载效果，选择spin state状态来进行控制；
2. 所以进入Login.js，创建state状态：

```jsx
import React, { useEffect, useState } from "react";

function Login() {
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  
  const onFinish = async (values) => {
    try {
      setLoading(true)
      await axios.post("/api/users/login", values);
       localStorage.setItem(
        "expense-tracker-user",
         //解决方法
        JSON.stringify({ ...response.data, password: "" })
      );
       setLoading(false)
      message.success("登录成功！");
      navigate("/");
    } catch (error) {
       setLoading(false)
      message.error("登录失败！");
    }
  };
```

3. 创建src/components/Spinner.js:

```jsx
import React from "react";
import { Spin } from "antd";

function Spinner() {
  return (
    <div >
      <Spin/>
    </div>
  );
}

export default Spinner;

```

4. 进入Login.js，插入Spinner组件，并将状态修改为true，进行测试：

```jsx
import Spinner from "../components/Spinner";
...
const [loading, setLoading] = useState(true);
return (
    <div className="register">
      {loading && <Spinner />}
    ...
```

5. 添加Spinner组件样式，进入default-layout.css:

```css
.spinner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}
.ant-spin-dot-item{
    background-color: gray !important;
}
```

6.进入Spinner.js:

```jsx
import React from "react";
import { Spin } from "antd";

function Spinner() {
  return (
    <div className="spinner">
      <Spin color='gray' style={{color:'gray'}} size='large'/>
    </div>
  );
}

export default Spinner;

```

7. 将spinner效果粘贴到Register组件中：

```jsx
import { Form,Input} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import "../resources/authentication.css";
import axios from 'axios'

function Register() {
 const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/users/register", values);
      message.success("注册成功！");
      setLoading(false);
    } catch (error) {
      message.error("抱歉，出错了！");
      setLoading(false);
    }
  };

  return (
     {loading && <Spinner />}
    ...
   ）
}

export default Register;
```



### 2、路由守卫

1. 如果删除LocalStorage中保存的注册用户数据，你会发现直接请求根路径也是可以进入登录成功后的主页的，因此我们需要添加路由守卫，只有登录成功才能进入主页
2. 进入App.js:

```jsx
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

       ...
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
      ...
      
      
      
export function ProtectedRoute(props){

  if(localStorage.getItem('expense-tracker-user'))
  {
    return props.children
  }else{
   return <Navigate to='/login'/>
  }

}
```

3. 进入Login.js:

```jsx
  useEffect(() => {
    if (localStorage.getItem("expense-tracker-user")) {
      navigate("/");
    }
  }, []);
```

4. 进入Register.js:

```jsx
import { Link, useNavigate } from "react-router-dom";

const navigate = useNavigate(true);

  useEffect(() => {
    if (localStorage.getItem("expense-tracker-user")) {
      navigate("/");
    }
  }, []);
```

5. 进入DefaultLayout.js，获取username:

```jsx
  const user = JSON.parse(localStorage.getItem("expense-tracker-user"));

	...
         <div> 
            <button className='primary'>{user.name}</button>
         
        </div>
  ...
```

6. 进入antd, 拷贝dropdown组件代码，添加dropdown下拉式组件到DefaultLayout中：

```jsx
import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import {useNavigate} from 'react-router-dom'

import "../resources/default-layout.css";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expense-tracker-user"));
  const navigate = useNavigate()
 const items = [
        {
          key:'1'
          label: (
            <li onClick={()=>{
              localStorage.removeItem('expense-tracker-user')
              navigate("/login");
            }}>退出</li>
          ),
        }
      ]
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">我的记账本</h1>
        </div>
        <div>
          <Dropdown menu={{items}} placement="bottomLeft">
            <button className='primary'>{user.name}</button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;

```



## 六、添加流水UI

### 1、添加流水弹出框UI

1. 本章节我们将创建添加流水的UI，先简单做个结构分析：
2. 创建src/resources/transaction.css:

```css
.filter{
    box-shadow: 0 0 2px gray;
    padding: 15px 20px;
    border-radius: 5px;
}

```



3. 进入Home.js组件：

```jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../resources/transactions.css";
import { Modal } from 'antd';

function Home() {
  //3 设置流水模式状态
   const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  return (
    <DefaultLayout>
       {/* 1 上方过滤和类型切换按钮*/}
      <div className="filter d-flex justify-content-between align-items-center">
        {/*左侧下拉框*/}
         <div >
         
         <div>
           
         {/*右侧按钮*/}
        <div >
           {/*4 点击添加流水，会弹出模型框*/}
           <button className="primary"   onClick={() => setShowAddEditTransactionModal(true)}>
           添加流水
           </button>
          
        </div>
      </div>
      
      {/* 2 下方表格分析*/}    
      <div className="table-analtics">
       
      </div>
 
      {/* 5 下方表格分析*/}   
          <Modal title="添加流水" open={showAddEditTransactionModal} onCancel=           
            {()=>setShowAddEditTransactionModal(false)}>
          </Modal>
    </DefaultLayout>
  );
}

export default Home;

```

4. 测试

### 2、添加流水表单UI

1. 进入Home.js:

```jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import "../resources/transactions.css";
import { Modal } from 'antd';

function Home() {
   const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  
  // 5监听表单提交
  const onFinish =  (values) => {
   console.log(values)
  };
  
  return (
    <DefaultLayout>

      <div className="filter d-flex justify-content-between align-items-center">
        {/*左侧下拉框*/}
         <div >
         <div>
           
         {/*右侧按钮*/}
        <div >
           <button className="primary"   onClick={() => setShowAddEditTransactionModal(true)}>
           添加流水
           </button>
        <div>
      </div>
      
      <div className="table-analtics">
      </div>
          <Modal title="添加流水" open={showAddEditTransactionModal} onCancel=           
            {()=>setShowAddEditTransactionModal(false)}
             {/*2 取消默认的按钮*/}
             footer={false}
            >
             {/*1 构建模型框的内部form表格*/}
          <Form
        layout="vertical"
        className="transaction-form"
             {/*4 监听表单提交*/}
        onFinish={onFinish} 
      >
        <Form.Item label="金额" name="amount">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="类型" name="type">
          <Select 
            initialValue='收入' 
            options={[
              {
                value:'income',
                label:'收入',
              }，
               {
                value:'expense',
                label:'支出',
              }
            ]}
            />
          
        </Form.Item>

        <Form.Item label="分类" name="category">
          <Select defaultValue="工资"
           options={[
              {
                value:'salary',
                label:'工资',
              },
              {
                value:'freelance',
                label:'兼职',
              },
              {
                value:'food',
                label:'饮食',
              },
              {
                value:'entertainment',
                label:'娱乐',
              },
              {
                value:'investment',
                label:'投资',
              },
              {
                value:'travel',
                label:'旅行',
              },
              {
                value:'education',
                label:'教育',
              },
              {
                value:'medical',
                label:'医疗',
              },
              {
                value:'tax',
                label:'交通',
              },
            ]}
          
          />
        </Form.Item>

        <Form.Item label="时间" name="date">
          <Input type="date" />
        </Form.Item>
   			 {/**/}
        <Form.Item label="关联" name="reference">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="描述" name="description">
          <Input type="text" />
        </Form.Item>

       {/*3 自定义footer*/}
         <div className="d-flex justify-content-end">
          <button className="primary" type="submit">
            保存
          </button>
        </div>
      </Form>
          </Modal>
    </DefaultLayout>
  );
}

export default Home;


```

2. transaction.css样式：

```css
.filter{
    box-shadow: 0 0 2px gray;
    padding: 15px 20px;
    border-radius: 5px;
}

.transaction-form label{
    color: rgba(0, 0, 0, 0.77) !important;
}
.transaction-form input{
    border: 1px solid gray;
    border-bottom: 1px solid gray;
    box-shadow: none !important;
}
.transaction-form input:focus{
    border: 1px solid gray;
    border-bottom: 1px solid gray !important;
    box-shadow: none !important;
}

.ant-select-selector{
    border: 1px solid gray !important;
}
.ant-select-selector:focus{
    box-shadow:none !important;
    outline: none !important;
}

```



## 七、添加流水API

### 1、添加流水模型

1. 创建流水模型，创建src/models/Transaction.js:

```js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userid : { type: String, required: true},
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  reference: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const transactionModel = mongoose.model("Trasactions", transactionSchema);

module.exports = transactionModel;

```



### 2、添加流水API

1. 创建src/routes/transactionsRoute.js:

```js
const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

//添加流水
router.post("/add-transaction", async (req, res) {
  try {
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send("流水添加成功！");
  } catch (error) {
    res.status(500).json(error);
  }
});

//获取所有流水
router.post("/get-all-transactions", async (req, res) {
  try {
    const transactions = await Transaction.find({userid:req.body.userid});
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

```

2. 进入server.js：

```js
const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/transactions/' , transactionsRoute)
```

3. 创建src/components/AddEditTransaction.js组件单独保存Modal:

```jsx
import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";

function AddEditTransaction() {

  return (
          <Modal>...</Modal>
         
  );
}

export default AddEditTransaction;

```

4. 进入Home.js，引入AddEditTransaction组件并传值：

```jsx
import AddEditTransaction from '../components/AddEditTransaction';


{showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
        />
      )}
</DefaultLayout>
```

5. 进入AddEditTransaction.js, 解构props及剪切onFinish:

```jsx
import React, { useState } from "react";
import { Form, Input,message, Modal, Select } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";

function AddEditTransaction({ 
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,}) {
  //2 添加加载状态
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  
  // 1设置onFinish
  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'))
      setLoading(true)
      await axios.post("/api/transactions/add-transaction", {...values,userid:user._id});
      setShowAddEditTransactionModal（false)
       setLoading(false)
      message.success("流水添加成功！");
    } catch (error) {
       setLoading(false)
      message.error("抱歉，出错了！");
    }
  };

  return (
          <Modal>
      {/*3 加载组件*/}
       {loading && <Spinner />}
      ...</Modal>
         
  );
}

export default AddEditTransaction;
```

6. 测试



### 3、展示流水数据

1. 在antd中搜索table表格组件，简单查看代码结构；
2. 进入Home.js:

```jsx
import Spinner from '../components/Spinner';
import React, { useEffect, useState } from 'react';


//3 添加loading状态 
const [loading, setLoading] = useState(false);
//4 初始化流水状态
const [transactionsData, setTransactionsData] = useState([]);

//2 创建获取所有流水的方法
 const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
      const response = await axios.post(
        '/api/transactions/get-all-transactions',
        {
          userid: user._id,
        }
      );
      //6打印测试
      console.log(response.data)
      //5 存储流水
       setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了！');
    }
  };
// 1 设置useEffect钩子函数
useEffect(() => {
    getTransactions();
  }, []);


return（
  <DefaultLayout>
  {loading && <Spinner />}
  <DefaultLayout/>
）
```

6. 测试，如果能够得到从服务器返回的流水数组，下一步就设置表格样式进行展示；
7. 进入Home.js：

```jsx
import {Form, message, Select, Table } from 'antd';
//2格式化组件库
import moment from 'moment';
useEffect(() => {
    getTransactions();
  }, []);
//1创建表格的columns
const columns = [
    {
      title: '日期',
      key: 'date',
      dataIndex: 'date',
      render: (text) => <span>{moment(text).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '金额',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: '分类',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: '关联',
      key: 'reference',
      dataIndex: 'reference',
    },
  ];

return (
 <DefaultLayout>
    ....
   <div className='table-analtics'>
     {/*3引入table组件进行展示*/}
          <div className='table'>
            <Table columns={columns} dataSource={transactionsData} />
          </div>
      </div>
    {/*4每次添加重新请求所有交易流水，因此传递方法*/}
   {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          getTransactions={getTransactions}
        />
      )}
    </DefaultLayout>
  );
}

export default Home;
```

8. 进入AddEditTransaction组件：

```jsx
import React, { useState } from "react";
import { Form, Input,message, Modal, Select } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";
import { v4 as uuidv4 } from 'uuid';

function AddEditTransaction({ 
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  getTransactions,

}) { 
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  
   const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'))
      setLoading(true)
      await axios.post("/api/transactions/add-transaction", {...values,userid:user._id}，key: uuidv4(),);
      //请求所有交易流水
       getTransactions();
       message.success("流水添加成功！");
       setShowAddEditTransactionModal（false);
       setLoading(false);
    } catch (error) {
       setLoading(false)
      message.error("抱歉，出错了！");
    }
  };

  return (
          <Modal>
       {loading && <Spinner />}
      ...</Modal>
         
  );
}

export default AddEditTransaction;


```

9. 在client中安装uuid，moment组件

```bash
npm install uuid moment
```



## 八、过滤功能

### 1、解释日期过滤

1. 首先确保构建的Transition Schema添加了date字段及数据结构。
1. 添加一些虚拟的交易流水；因为过滤日期具体分为最近一周、最近一个月，最近一年，所以尝试添加上一周的数据，上一个月的数据；
1. 进入transactionsRoute.js，设置过滤API：

```js
//获取所有流水（过滤）
//(>) 大于 - $gt
//(<) 小于 - $lt
//(>=) 大于等于 - $gte
//(<= ) 小于等于 - $lte

//Moment.js是一个轻量级的JavaScript时间库，以前我们转化时间，都会进行很复杂的操作，而Moment.js的出现，简化了我们开发中对时间的处理，提高了开发效率。日常开发中，通常会对时间进行下面这几个操作：比如获取时间，设置时间，格式化时间，比较时间等等。
//https://blog.csdn.net/weixin_43923808/article/details/126233378

router.post("/get-all-transactions", async (req, res) {
  try {
    const transactions = await Transaction.find(
    {
            //获取2022-05-01之后的数据，并转化date对象
            date:{
            $gt:moment('2022-05-01').toDate()；
						//获取2022-05-01之前的数据，并转化date对象
						$lt:moment('2022-04-01').toDate()；
            },
  userid:req.body.userid
});
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});
```

4. 如何实现查询最近一周，一个月，一年的数据？

```js
router.post("/get-all-transactions", async (req, res) {
  try {
    const transactions = await Transaction.find(
    {
            
            date:{
            //获取最近一周数据
            $gt:moment().substract(7,'d').toDate();
						//获取最近一月数据
						 $gt:moment().substract(30,'d').toDate();
            },
  userid:req.body.userid
});
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});
```

5. 所以可以根据不同的日期频率来过滤交易流水，进行页面渲染。

### 2、实现日期过滤

1. 首先创建过滤组件UI，进入Home.js:

```jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import "../resources/transactions.css";
import { Modal } from 'antd';

function Home() {
   const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
   const [loading, setLoading] = useState(false);
   const [transactionsData, setTransactionsData] = useState([]);
  //2 创建日期频率状态
 	const [frequency,setFrequency] = useState('7')
 
   const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
      //3添加日期频率请求
      const response = await axios.post(
        '/api/transactions/get-all-transactions',
        {
          userid: user._id,
          frequency,
        }
      );
      console.log(response.data)
       setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了！');
    }
  };
  
  useEffect(() => {
    getTransactions();
  }, []);
  
  return (
    <DefaultLayout>

      <div className="filter d-flex justify-content-between align-items-center">
        {/*1左侧过滤下拉框*/}
         <div class='d-flex flex-column' >
           <h6>选择日期y</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)}
              options={[
              {
                value:'7',
                label:'最近一周',
              },
               {
                value:'30',
                label:'最近一月',
              },
               {
                value:'365',
                label:'最近一年',
              },
               {
                value:'custom',
                label:'自定义',
              },
               ]}
              
              />
              
         <div>
           
   					...
        </div>
      </Form>
          </Modal>
    </DefaultLayout>
  );
}

export default Home;



```

2. 进入transactionRoute.js，获取前端发送的日期频率

```js
router.post("/get-all-transactions", async (req, res) {
  try {
    const transactions = await Transaction.find(
    {
            	//获取日期频率
          date:{
						 $gt:moment().substract(Number(req.body.frequency),'d').toDate();
            },
  				userid:req.body.userid
});
    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});
```

3. 在Home.js中添加useEffect的依赖项，数据更新重新渲染UI：

```jsx
  useEffect(() => {
    getTransactions();
  }, [frequency]);
```

4. 在Home.js的选择日期样式下面， 添加自定义日期的UI样式：

```jsx
//DatePicker日期选择框约束开始结束时间     
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

{frequency === 'custom' && (
                <RangePicker/>
            )}
```

5. 在Home.js中保存选择的自定义日期状态：

```jsx
 const [selectedRange, setSelectedRange] = useState([]);

   {frequency === 'custom' && (
              <div className='mt-2'>
                <RangePicker
                  value={selectedRange}
                  onChange={(values) => setSelectedRange(values)}
                />
              </div>
            )}

```

6. 在Home.js中添加自定义请求：

```jsx
 const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
     
      const response = await axios.post(
        '/api/transactions/get-all-transactions',
        {
          userid: user._id,
          frequency,
           //1添加日期频率请求
           ...(frequency === 'custom' && { selectedRange }),
        }
      );
      console.log(response.data)
       setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了！');
    }
  };
  //2
  useEffect(() => {
    getTransactions();
  }, [frequency,selectedRange]);
  
```

7. 进入后台transaction.js进行获取：

```js
router.post("/get-all-transactions", async (req, res) => {
  //获取body中的不同值
  const { frequency, selectedRange  } = req.body;
  try {
    const transactions = await Transaction.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedRange[0],
              $lte: selectedRange[1],
            },
          }),
      userid: req.body.userid,
    });

    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});
```



### 3、类型过滤

1. 进入Home.js，拷贝上方选择日期的结构进行粘贴修改:

```jsx
  const [type, setType] = useState('all');


<div className='d-flex'>
	   ...
    <div class='d-flex flex-column mx-5' >
           <h6>选择类型</h6>
            <Select value={type} onChange={(value) => setType(value)}
              options={[
              {
                value:'all',
                label:'所有类型',
              },
               {
                value:'income',
                label:'收入',
              },
               {
                value:'expense',
                label:'支出',
              },
               ]}
              
              />
              
         <div>
      </div>
```

2. 在请求中添加type:

```jsx
 const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
     
      const response = await axios.post(
        '/api/transactions/get-all-transactions',
        {
          userid: user._id,
          frequency,
           ...(frequency === 'custom' && { selectedRange }),
           //1添加类型请求
          type
        }
      );
      console.log(response.data)
       setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了！');
    }
  };
  //2
  useEffect(() => {
    getTransactions();
  }, [frequency,selectedRange,type]);
```

3. 进入transaction.js:

```js
router.post("/get-all-transactions", async (req, res) => {
  const { frequency, selectedRange , type } = req.body;
  try {
    const transactions = await Transaction.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedRange[0],
              $lte: selectedRange[1],
            },
          }),
      userid: req.body.userid,
      //1查找type
      ...(type!=='all' && {type})
    });

    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});
```



## 九、数据分析

### 1、添加视图切换组件

1. 进入Home.js，在filter样式的下方，创建分析组件：

```jsx
//2
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';  

function Home() {
  ...
  
  //3 创建显示状态
const [viewType, setViewType] = useState('table');

<div className='d-flex'>
          <div>
            <div className='view-switch mx-5'>
              {/* 1 引入antd提供的icon图标，搜索list*/}
              <UnorderedListOutlined
                className={`mx-3 ${
                  viewType === 'table' ? 'active-icon' : 'inactive-icon'
                } `}
                onClick={() => setViewType('table')}
                size={30}
              />
              <AreaChartOutlined
                className={`${
                  viewType === 'analytics' ? 'active-icon' : 'inactive-icon'
                } `}
                onClick={() => setViewType('analytics')}
                size={30}
              />
            </div>
          </div>
          <button
            className='primary'
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            ADD NEW
          </button>
        </div>
  ...
}
```

2. 进入transaction.css，添加样式：

```css

.view-switch{
    border: 1px solid rgba(0, 0, 0, 0.71);
    border-radius: 3px;
    padding: 5px 10px;
}

{/*3 添加样式*/}
.anticon svg{
    font-size: 20px;
    cursor: pointer;
}

.active-icon{
    color: black;
    
}
.inactive-icon{
    color: gray;

}
```

### 2、总交易流水笔数分析

1. 创建src/components/Analytics.js

```jsx
import React from 'react';

function Analytics({transactions}){
  return (
  <div>交易分析</div>
  )
}

export default Analytics;
```

2. 进入Home.js，插入交易分析组件：

```jsx
<div className='table-analtics'>
        {viewType === 'table' ? (
          <div className='table'>
            <Table columns={columns} dataSource={transactionsData} />
          </div>
        ) : (
          <Analytics transactions={transactionsData} />
        )}
      </div>
```

3. 进入Analytics.js，获取支出流水和收入流水占总交易流水的比例：

```jsx
import React from 'react';

function Analytics({transactions}){
  //1计算比例
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenceTransactions = transactions.filter(
    (transaction) => transaction.type === "expence"
  );
  const totalIncomeTransactionsPercentage =
    (totalIncomeTransactions.length / totalTransactions) * 100;
  const totalExpenceTransactionsPercentage =
    (totalExpenceTransactions.length / totalTransactions) * 100;

  return (
    //2创建样式
    <div className='analytics'>
       <div className="row">
        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>总交易流水 : {totalTransactions}</h4>
            <hr />
            <h5>收入 : {totalIncomeTransactions.length}</h5>
            <h5>支出 : {totalExpenceTransactions.length}</h5>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Analytics;
```

4. 创建src/resources/analytics.css，并引入到analytics.js组件：

```css
.transactions-count{
    box-shadow: 0 0 2px rgb(132, 131, 131);
    padding: 15px;
    border-radius: 10px;
    color: rgb(56, 55, 55) !important;
}

.analytics h4{
    font-size: 20px;
    color: gray !important;
    font-weight: 600;
}
.analytics h5{
    font-size: 16px;
    color: gray !important;
}

```

5. 在antd中搜索Progress组件：

```jsx
import { Progress } from "antd";

return (
    <div className='analytics'>
       <div className="row">
        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>总交易流水 : {totalTransactions}</h4>
            <hr />
            <h5>收入 : {totalIncomeTransactions.length}</h5>
            <h5>支出 : {totalExpenceTransactions.length}</h5>
            
            {/*1 progress bar*/}
            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTransactionsPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenceTransactionsPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
```



### 3、总交易流水金额分析

1. 进入Analytics.js文件，计算总交易金额：

```jsx
function Analatics({ transactions }) {
//1 总交易金额
const totalTurnover = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
//2 总收入金额
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
//3 总支出金额
  const totalExpenceTurnover = transactions
    .filter((transaction) => transaction.type === "expence")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  console.log(totalExpenceTurnover);
//4 总收入金额占总交易金额的比例
  const totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;
//5 总支出金额占总交易金额的比例
  const totalExpenceTurnoverPercentage =
    (totalExpenceTurnover / totalTurnover) * 100;


  return (
    ...
    //6 构建结构
        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>总交易金额 : {totalTurnover}</h4>
            <hr />
            <h5>总收入 : {totalIncomeTurnover}</h5>
            <h5>总支出 : {totalExpenceTurnover}</h5>

            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTurnoverPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenceTurnoverPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
          ...
          )
}
```

2. 添加新交易测试

   

## 十、分类分析

### 1、收入类别分析

1. 创建所有交易分类；
2. 进入Analytics.js，创建分类的分析UI：

```jsx
const categories = [
    "salary",
    "entertainment",
    "freelance",
    "food",
    "travel",
    "investment",
    "education",
    "medical",
    "tax",
  ];

<hr />   
<div className="row">
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>收入 - 类别分析</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type == "income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && <div className="category-card">
                  <h5>{category}</h5>
                  <Progress strokeColor='#0B5AD9' percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
```

2. 进入analytics.css:

```css
.category-card{
    padding: 5px 20px;
    box-shadow: 0 0 2px gray;
    margin-top: 15px;
    border-radius: 5px;
}
```

3. 进入default-layout.css,添加滚动条:

```css
.content{
    height: 85vh;
    box-shadow: 0 0 2px gray;
    margin-top: 20px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    padding: 15px;
    overflow-y: scroll;
}
```



### 2、支出类别分析

1. 进入Analytics.js，只需要拷贝收入类型分析结构进行修改即可：

```jsx
 <div className="col-md-6">
          <div className="category-analysis">
            <h4>支出 - 类别分析</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type == "expence" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
               amount > 0 && <div className="category-card">
                  <h5>{category}</h5>
                  <Progress strokeColor='#0B5AD9' percent={((amount / totalExpenceTurnover) * 100).toFixed(0)} />
                </div>
              );
            })}
          </div>
    </div>
```



## 十一、编辑或删除交易

### 1、编辑交易

1. 进入Home.js，添加编辑/删除列：

```jsx

//2引入组件
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

function Home() {
  ...
  //3创建状态
const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
const columns = [
    {
      title: '日期',
      key: 'date',
      dataIndex: 'date',
      render: (text) => <span>{moment(text).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '金额',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: '分类',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: '关联',
      key: 'reference',
      dataIndex: 'reference',
    },
  //1添加编辑/删除列
  {
      title: '操作',
      key:'actions'
      dataIndex: 'actions',
      render: (text, record) => {
        return (
          <div>
    {/*antd中查询editor，delete图标*/}
            <EditOutlined
              //4事件监听
              onClick={() => {
                setSelectedItemForEdit(record);
                setShowAddEditTransactionModal(true);
              }}
            />
            <DeleteOutlined
              className='mx-3'
              onClick={() => deleteTransaction(record)}
            />
          </div>
        );
      },
    },
  ];

return(
...
   {showAddEditTransactionModal && (
    //5传递方法和状态
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          getTransactions={getTransactions}  
          setSelectedItemForEdit={setSelectedItemForEdit}
        />
      )}
)

}

```

2. 进入AddEditTransaction组件：

```jsx
import React, { useState } from "react";
import { Form, Input,message, Modal, Select } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";
import { v4 as uuidv4 } from 'uuid';

function AddEditTransaction({ 
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  //1 解构props
  selectedItemForEdit,
  setSelectedItemForEdit,
  getTransactions,

}) { 
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  
   const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'))
      setLoading(true)
      await axios.post("/api/transactions/add-transaction", {...values,userid:user._id}，key: uuidv4(),);
       getTransactions();
       message.success("流水添加成功！");
       setShowAddEditTransactionModal（false);
     
       setLoading(false);
    } catch (error) {
       setLoading(false)
      message.error("抱歉，出错了！");
    }
  };

  return (
    //2修改modal title
          <Modal
      title={selectedItemForEdit ? "编辑交易流水" : "添加交易流水"}
      visible={showAddEditTransactionModal}
      onCancel={() => setShowAddEditTransactionModal(false)}
      footer={false}
    >
       {loading && <Spinner />}
      {/*3添加initialValues*/}
       <Form
        layout="vertical"
        className="transaction-form"
        onFinish={onFinish}
        initialValues={selectedItemForEdit}
      >
      ...</Modal>
         
  );
}

export default AddEditTransaction;



```



### 2、实现编辑和删除交易

1. 进入transactionRoute.js，创建编辑路由:

```js
router.post("/edit-transaction", async function (req, res) {
  try {
    await Transaction.findOneAndUpdate({_id : req.body.transactionId} , req.body.payload)
    res.send("交易流水更新成功！");
  } catch (error) {
    res.status(500).json(error);
  }
});
```

2. 进入AddEditTransaction.js:

```jsx
 const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("expense-tracker-user"));
      setLoading(true);
      //1 判断编辑还是添加交易
      if (selectedItemForEdit) {
        await axios.post("/api/transactions/edit-transaction", {
           payload : {
            ...values,
            userid: user._id,
           },
          transactionId: selectedItemForEdit._id,
        });
        getTransactions();
        message.success("交易流水更新成功！");
      } else {
        await axios.post("/api/transactions/add-transaction", {
          ...values,
          userid: user._id,
        });
        getTransactions();
        message.success("交易流水添加成功！");
      }
      setShowAddEditTransactionModal(false);
       //2还原状态为null
      setSelectedItemForEdit(null)
      setSelectedItemForEdit(null);
      setLoading(false);
    } catch (error) {
      message.error("抱歉，出错了");
      setLoading(false);
    }
  };
```

3. 进入transactionRoute.js，创建删除交易流水路由:

```js

router.post("/delete-transaction", async function (req, res) {
  try {
    await Transaction.findOneAndDelete({_id : req.body.transactionId})
    res.send("Transaction Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});
```

4. 进入Home.js，创建删除交易事件:

```jsx
 const deleteTransaction = async (record) => {
    try {
      setLoading(true);
      await axios.post('/api/transactions/delete-transaction', {
        transactionId: record._id,
      });
      message.success('交易流水删除成功！');
      getTransactions();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了');
    }
  };

 const columns = [
   ...
{
      title: '操作',
      key:'actions'
      dataIndex: 'actions',
      render: (text, record) => {
        return (
          <div>
            <EditOutlined
              onClick={() => {
                setSelectedItemForEdit(record);
                setShowAddEditTransactionModal(true);
              }}
            />
            <DeleteOutlined
              className='mx-3'
              onClick={() => deleteTransaction(record)}
            />
          </div>
        );
      },
    },
```



## 十二、重构和部署

### 1、样式微调

1. 更新主题颜色：尝试更改default-layout的背景色及primary主题色，例如改为：#1b7e14等；
1. 可以调整登录和注册页面的btn颜色，单独创建一个secondary的css类：

```css
.secondary{
  background-color: #ffffff;
  padding:5px 20px;
  color: black !important;
  border: none;
}
```

3. 进入analytics.js，设置key props

4. 进入transaction.css更改picker range效果，同时设置翻页导航字体颜色，并添加媒体查询：

```css
.ant-picker-range{
    border: 1px solid black !important;
}
.ant-pagination a {
    color:rgba(0,0,0,0.77) !important;
}
@media screen and (max-width:600px){
    .filter{
        overflow-x: scroll;
    }
}
```

5. 使用aos动画库：AOS（Animate on scroll）是小型动画滚动库，可在页面滚动时给元素添加动画效果。进入app.js文件

```jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    //如果你不想单独每个元素做一个动画配置，你可以通过init()方法来统一配置所有元素的动画效果。
    //refresh()会重新计算元素的位置和偏移。
    AOS.init({
      duration: 500,
      easing: 'ease-in-back',
    });
    AOS.refresh();
  }, []);
```

6. 进入Login.js，为组件设置data-aos值：

```jsx
    <div className='col-md-4' data-aos='fade-right'>
  ...
   <div className='col-md-5' data-aos='fade-left'>
```

7. 进入Register.js，为组件设置data-aos值：

```jsx
  <div className='col-md-5' data-aos='fade-right'>
  ...
   <div className='col-md-4' data-aos='fade-left'>
```

8. 修改title标题

### 2、React前后端分离部署 -Nodejs后端部署

1. Nodejs后端部署

   1）准备工作：

   - 拆分前后端项目
   - expense-tracker⽂件名改名为7001
   - 修改server.js⽂件名为7001
   - 后端启动的服务较多, 所以统⼀⽤端⼝号来标识
   - 修改7001.js的端⼝号
   - 修改package.json的启动⽂件名7001.js
   - 删除node_modules⽂件夹

   2）登录宝塔，将后端7001项⽬⽂件夹放⼊服务器路径

   - ⽂件/www/wwwroot/www.thenewstep.cn/backend/

   3）安装项⽬依赖模块

   - 双击7001,进⼊项⽬⽂件路径
   - 点击终端

   4） 终端运⾏命令

   ```bash
   npm install
   ```

   5）启动项⽬测试

   ```bash
   node 7001.js
   ```

   - 启动正常,数据库连接正常, 但此时不能关闭终端, 关闭的话服务就断了
   - 所以不能使⽤node 7001.js启动
   - ctrl+c关闭服务,使⽤另外的命令启动

   6）使⽤pm2永久启动项⽬，[PM2](https://link.juejin.cn/?target=http%3A%2F%2Fpm2.keymetrics.io%2F)是常用的node进程管理工具，它可以提供node.js应用管理，如自动重载、性能监控、负载均衡等

   ```
   pm2 start 7001.js
   ```

   - 启动好之后, 即可关闭终端

   7）配置反向代理

   - 确保当⽤户访问当前服务端⼝时, 可以指向正确的服务
   - 侧边栏找到⽹站-www.thenewstep.cn->反向代理

   8）添加反向代理

   - 选择【高级功能】，添加代理名称(expense-tracker)，代理目录(/banckend/7001)，目标URL(http://localhost:7001)，进行提交。

   9） 重启nginx

   - 找到⽂件-> 终端  任意路径都可以,只要打开终端就⾏, 不是⾮要在7001⽂件路径下
   - 重启nginx命令

   ```bash
   service nginx reload
   ```

   10）测试后端接⼝

   - 打开client项⽬, 更换接⼝地址
   - package.json

   ```js
   "proxy": "https://www.thenewstep.cn/backend/7001"
   ```

### 3、React前后端分离部署 -前端打包部署-阿⾥云

1.  client项⽬运⾏确保正常

   ```bash
   npm start
   ```

2.  修改package.json打包路径

   ```json
   {
   "name": "client",
   "version": "0.1.0",
   "private": true,
   // 加⼊homepage字段-项目的主页地址, (.)表示当前文件夹下的相对路径
   "homepage": ".",
   "dependencies": {
   ...
    }
   }
   ```

   - 打包出来的静态⽂件, 会在路径前加⼀个点, 例如./static
   - 如果homepage的值是 "/xxx/xxx/" 那么打包的静态⽂件html中引⼊的路径就是/xxx/xxx/static

3. 修改App.js路由根路径

   - 修改根路径的⽬的是为了确保跟服务器的⽂件路径⼀直
   - 保证刷新仍然可以找到静态⽂件

   ```jsx
   <Routers basename="/frontend/react/7001">
   ```

   

4.  配置后端接⼝根路径

   - 打包之后,反向代理失效
   - 所以为了确保请求接⼝地址的完整
   - 就需要配置axios请求的根路径
   - Index.js

   ```jsx
   import axios from 'axios';
   
   axios.defaults.baseURL = 'https://www.thenewstep.cn/backend/7001';
   ```

   

5. 打包项⽬

   ```bash
   npm run build
   ```

   - 得到build文件夹后，将里面所有静态文件放到服务器中的/frontend/react/7001文件夹中

   

6. 进入宝塔，创建项⽬多级⽬录

   - 宝塔左侧菜单 "⽂件" -> 根⽬录/www/wwwroot/www.thenewstep.cn/frontend
   - 在frontend⽂件夹下创建react
   - 在react⽂件夹下创建7001
   - 将打包好的静态⽂件,放⼊7001⽂件夹中



7. 浏览器运⾏测试

​      访问:https://www.thenewstep.cn/frontend/react/7001

8. 手动刷新报错问题

1）产生问题的原因

React单页应用在使用React-Router后，在本地环境中测试一切正常，但在发布到基于Nginx的生产环境后出现了刷新后返回404 Not Found错误。

该问题产生的原因为加载单页应用后路由改变均由浏览器处理，而刷新时将会请求当前的链接，而Nginx无法找到对应的页面。例如打开页面http://example.com后跳转至http://example.com/page1，实际上只是由浏览器根据URL解析后加载对应的组件并渲染，而不再向服务器请求对应的页面。

当刷新时，浏览器将请求http://example.com/page1页面，此时由于资源中并不存在该页面，便导致了返回404的情况。

2）解决方法一

- 需要配置nginx代理服务的`try_files`命令，该命令用于根据指定的参数依次检查寻找对应的文件，若所有文件都找不到将会在内部重定向至最后一个参数指定的文件。

```js
  location /frontend/react/7001 {
      try_files $uri $uri/ /frontend/react/7001;
      index index.html;
    }
```



- $uri代表请求的文件及其路径，$uri/表示对应路径的目录。例如请求http://example.com/page时，$uri表示资源目录下是否存在名为page的文件，$uri/表示名为page的目录。

  所以，我们在配置文件中增加的命令表示接收到请求时先寻找uri对应的文件或目录，若不存在则返回index.html文件。

​     

3）解决方法二：

​    可以尝试 将BrowserRouter修改为HashRouter。





