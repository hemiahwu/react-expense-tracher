import { Form, Input, message, Modal, Select, Table } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddEditTransaction from '../components/AddEditTransaction';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import '../resources/transaction.css';
import moment from 'moment';
const Home = () => {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
      const response = await axios.post(
        '/api/transactions/get-all-transactions',
        {
          userid: user._id,
        }
      );
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('抱歉，出错了！');
    }
  };

  //获取所有交易流水
  useEffect(() => {
    getTransactions();
  }, []);

  //定义表格columns
  const columns = [
    {
      title: '日期',
      key: 'date',
      dataIndex: 'date',
      render: (text) => <span>{moment(text).format('YYYY-MM-DD')}</span>,
    },
    {
      title: '金额',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: '分类',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: '关联',
      key: 'reference',
      dataIndex: 'reference',
    },
  ];
  return (
    <DefaultLayout>
      {loading && <Spinner />}
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
      <div className='table-analtics'>
        <div className='table'>
          <Table columns={columns} dataSource={transactions} />
        </div>
      </div>

      {/* 添加流水的modal弹出框 */}
      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          getTransactions={getTransactions}
        />
      )}
    </DefaultLayout>
  );
};

export default Home;
