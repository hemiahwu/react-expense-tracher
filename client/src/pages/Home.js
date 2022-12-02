import { Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import '../resources/transaction.css';

const Home = () => {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);

  const onFinish = (values) => {
    console.log(values);
  };
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
        footer={false}
        onCancel={() => setShowAddEditTransactionModal(false)}
      >
        <Form
          layout='vertical'
          className='transaction-form'
          onFinish={onFinish}
        >
          <Form.Item label='金额' name='amount'>
            <Input type='text' />
          </Form.Item>
          <Form.Item label='类型' name='type'>
            <Select
              defaultValue='收入'
              options={[
                {
                  value: 'income',
                  label: '收入',
                },
                {
                  value: 'expense',
                  label: '支出',
                },
              ]}
            />
          </Form.Item>
          <Form.Item label='分类' name='category'>
            <Select
              defaultValue='工资'
              options={[
                {
                  value: 'salary',
                  label: '工资',
                },
                {
                  value: 'freelance',
                  label: '兼职',
                },
                {
                  value: 'food',
                  label: '饮食',
                },
                {
                  value: 'entertainment',
                  label: '娱乐',
                },
                {
                  value: 'investment',
                  label: '投资',
                },
                {
                  value: 'travel',
                  label: '旅行',
                },

                {
                  value: 'education',
                  label: '教育',
                },
                {
                  value: 'medical',
                  label: '医疗',
                },
                {
                  value: 'tax',
                  label: '交通',
                },
              ]}
            />
          </Form.Item>
          <Form.Item label='时间' name='date'>
            <Input type='date' />
          </Form.Item>
          <Form.Item label='关联' name='reference'>
            <Input type='text' />
          </Form.Item>
          <Form.Item label='描述' name='description'>
            <Input type='text' />
          </Form.Item>

          <div className='d-flex justify-content-end'>
            <button className='primary' type='submit'>
              保存
            </button>
          </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
};

export default Home;
