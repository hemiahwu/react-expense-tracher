import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import '../resources/authentication.css';
const Login = () => {
  //提交成功后获取表单数据
  const onFinish = async (values) => {
    console.log(values);
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
              <Input type='password' />
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
