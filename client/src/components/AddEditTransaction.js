import React, { useState } from 'react';
import { Form, Input, message, Modal, Select } from 'antd';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const AddEditTransaction = ({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  getTransactions,
}) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
      await axios.post('/api/transactions/add-transaction', {
        ...values,
        userid: user._id,
        key: uuidv4(),
      });
      getTransactions();
      setShowAddEditTransactionModal(false);
      setLoading(false);
      message.success('交易流水添加成功！');
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了!');
    }
  };
  return (
    <Modal
      title='添加流水'
      open={showAddEditTransactionModal}
      footer={false}
      onCancel={() => setShowAddEditTransactionModal(false)}
    >
      {loading && <Spinner />}
      <Form layout='vertical' className='transaction-form' onFinish={onFinish}>
        <Form.Item label='金额' name='amount'>
          <Input type='text' />
        </Form.Item>
        <Form.Item label='类型' name='type'>
          <Select
            initialvalue='收入'
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
            initialvalue='工资'
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
  );
};

export default AddEditTransaction;
