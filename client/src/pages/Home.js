import { Form, Input, message, Modal, Select, Table, DatePicker } from 'antd';
import { UnorderedListOutlined, AreaChartOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddEditTransaction from '../components/AddEditTransaction';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import '../resources/transaction.css';
import moment from 'moment';
import Analytics from '../components/Analytics';
const Home = () => {
  const { RangePicker } = DatePicker;
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [frequency, setFrequency] = useState('7');
  const [selectedRange, setSelectedRange] = useState([]);
  const [type, setType] = useState('all');
  const [viewType, setViewType] = useState('table');
  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('expense-tracker-user'));
      setLoading(true);
      const response = await axios.post(
        '/api/transactions/get-all-transactions',
        {
          userid: user._id,
          frequency,
          ...(frequency === 'custom' && { selectedRange }),
          type,
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
  }, [frequency, selectedRange, type]);

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
        <div className='d-flex '>
          <div className='d-flex flex-column'>
            <h6>选择日期</h6>
            <Select
              value={frequency}
              onChange={(value) => setFrequency(value)}
              options={[
                {
                  value: '7',
                  label: '最近一周',
                },
                {
                  value: '30',
                  label: '最近一月',
                },
                {
                  value: '365',
                  label: '最近一年',
                },
                {
                  value: 'custom',
                  label: '自定义',
                },
              ]}
            />
            {frequency === 'custom' && (
              <RangePicker
                value={selectedRange}
                onChange={(value) => setSelectedRange(value)}
              />
            )}
          </div>
          <div className='d-flex flex-column mx-5'>
            <h6>选择交易类型</h6>
            <Select
              value={type}
              onChange={(value) => setType(value)}
              options={[
                {
                  value: 'all',
                  label: '所有类型',
                },
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
            {frequency === 'custom' && (
              <RangePicker
                value={selectedRange}
                onChange={(value) => setSelectedRange(value)}
              />
            )}
          </div>
        </div>
        <div className='d-flex'>
          <div>
            <div className='view-switch mx-5'>
              <UnorderedListOutlined
                className={`mx-2 ${
                  viewType === 'table' ? 'action-icon' : 'inactive-icon'
                } `}
                onClick={() => setViewType('table')}
              />
              <AreaChartOutlined
                className={`mx-2 ${
                  viewType === 'analytics' ? 'action-icon' : 'inactive-icon'
                } `}
                onClick={() => setViewType('analytics')}
              />
            </div>
          </div>
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
        {viewType === 'table' ? (
          <div className='table'>
            <Table columns={columns} dataSource={transactions} />
          </div>
        ) : (
          <Analytics transactions={transactions} />
        )}
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
