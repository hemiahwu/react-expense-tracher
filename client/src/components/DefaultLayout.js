import { Dropdown } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../resources/default-layout.css';
const DefaultLayout = (props) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
  const items = [
    {
      key: '1',
      label: (
        <li
          onClick={() => {
            localStorage.removeItem('expense-tracker-user');
            navigate('/login');
          }}
        >
          退出
        </li>
      ),
    },
  ];

  return (
    <div className='layout'>
      {/* header部分 */}
      <div className='header d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='logo'>我的记账本</h1>
        </div>
        <div>
          <Dropdown menu={{ items }} placement='bottom'>
            <h1 className='username'>{user.name}</h1>
          </Dropdown>
        </div>
      </div>

      {/* 内容部分 */}
      <div className='content'>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
