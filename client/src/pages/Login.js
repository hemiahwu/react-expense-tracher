import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import '../resources/authentication.css';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //提交成功后获取表单数据
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', values);
      //本地存储
      localStorage.setItem(
        'expense-tracker-user',
        JSON.stringify({
          ...response.data,
          password: '',
        })
      );
      setLoading(false);
      message.success('登录成功！');
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error('登录失败！');
    }
  };
  //若用户登录成功，不可以继续访问login页面
  useEffect(() => {
    if (localStorage.getItem('expense-tracker-user')) {
      navigate('/');
    }
  }, []);

  return (
    <div className='register'>
      {loading && <Spinner />}
      <div className='row justify-content-center align-items-center w-100 h-100'>
        <div className='col-md-4' data-aos='fade-right'>
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
              <button className='secondary' type='submit'>
                登录
              </button>
            </div>
          </Form>
        </div>

        <div className='col-md-5' data-aos='fade-left'>
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
