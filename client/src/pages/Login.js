import React from 'react';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/authentication.css';
const Login = () => {
  const navigate = useNavigate();
  //提交成功后获取表单数据
  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/users/login', values);
      //本地存储
      localStorage.setItem(
        'expense-tracker-user',
        JSON.stringify({
          ...response.data,
          password: '',
        })
      );
      navigate('/');
      message.success('登录成功！');
    } catch (error) {
      message.error('登录失败！');
    }
  };

  return (
    <div className='register'>
      <div className='row justify-content-center align-items-center w-100 h-100'>
        <div className='col-md-4'>
          {/* form表单 */}
          <Form layout='vertical' onFinish={onFinish}>
            <h1>用户登录</h1>
            <br />
            <Form.Item label='邮箱' name='email'>
              <Input />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input type='password' autoComplete='off' />
            </Form.Item>

            <div className='d-flex justify-content-between align-items-center'>
              <Link to='/register'>未注册，点击进入注册页面</Link>
              <button className='primary' type='submit'>
                登录
              </button>
            </div>
          </Form>
        </div>

        <div className='col-md-5'>
          {/* 左侧图片 */}
          <div className='lottie'>
            <lottie-player
              src='https://assets4.lottiefiles.com/packages/lf20_06a6pf9i.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
