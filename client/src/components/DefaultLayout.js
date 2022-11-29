import React from 'react';

const DefaultLayout = (props) => {
  return (
    <div className='layout'>
      {/* header部分 */}
      <div className='header'>
        <div>
          <h1 className='logo'>我的记账本</h1>
        </div>
      </div>

      {/* 内容部分 */}
      <div className='content'>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
