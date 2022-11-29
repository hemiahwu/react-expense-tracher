import React from 'react';
import '../resources/default-layout.css';
const DefaultLayout = (props) => {
  return (
    <div className='layout'>
      {/* header部分 */}
      <div className='header d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='logo'>我的记账本</h1>
        </div>
        <div>
          <h1 className='username'>用户姓名</h1>
        </div>
      </div>

      {/* 内容部分 */}
      <div className='content'>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
