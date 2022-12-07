import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/authentication.css';
import Spinner from '../components/Spinner';
const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //提交成功后获取表单数据
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post('/api/users/register', values);
      message.success('注册成功！');
      setLoading(false);
    } catch (error) {
      message.error('抱歉,出错了！');
      setLoading(false);
    }
  };
  //若用户登录成功，不可以继续访问register页面
  useEffect(() => {
    if (localStorage.getItem('expense-tracker-user')) {
      navigate('/');
    }
  }, []);
  return (
    <div className='register'>
      {loading && <Spinner />}
      <div className='row justify-content-center align-items-center w-100 h-100'>
        <div className='col-md-5' data-aos='fade-right'>
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
        <div className='col-md-4' data-aos='fade-left'>
          {/* form表单 */}
          <Form layout='vertical' onFinish={onFinish}>
            <h1>用户注册</h1>
            <br />
            <Form.Item label='姓名' name='name'>
              <Input />
            </Form.Item>
            <Form.Item label='邮箱' name='email'>
              <Input />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input type='password' autoComplete='off' />
            </Form.Item>

            <div className='d-flex justify-content-between align-items-center'>
              <Link to='/login'>已经注册，点击进入登录页面</Link>
              <button className='secondary' type='submit'>
                注册
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
