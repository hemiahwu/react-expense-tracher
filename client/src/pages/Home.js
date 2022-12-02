import { Modal } from 'antd';
import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import '../resources/transaction.css';

const Home = () => {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  return (
    <DefaultLayout>
      {/* 上方:过滤及类型切换，添加交易按钮 */}
      <div className='filter d-flex justify-content-between align-items-center'>
        <div></div>
        <div>
          <button
            className='primary'
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            添加流水
          </button>
        </div>
      </div>

      {/* 下方:显示交易流水 */}
      <div></div>

      {/* 添加流水的modal弹出框 */}
      <Modal
        title='添加流水'
        open={showAddEditTransactionModal}
        onCancel={() => setShowAddEditTransactionModal(false)}
      ></Modal>
    </DefaultLayout>
  );
};

export default Home;
