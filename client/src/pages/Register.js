import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='register'>
      <div className='row'>
        <div className='col-md-5'>{/* 左侧图片 */}</div>
        <div className='col-md-4'>
          {/* form表单 */}
          <Form>
            <h1>用户注册</h1>
            <Form.Item label='姓名' name='name'>
              <Input />
            </Form.Item>
            <Form.Item label='邮箱' name='email'>
              <Input />
            </Form.Item>
            <Form.Item label='密码' name='password'>
              <Input.Password />
            </Form.Item>

            <div className='d-flex justify-content-between align-items-center'>
              <Link to='/login'>已经注册，点击进入登录页面</Link>
              <button className='primary' type='submit'>
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
