import { Progress } from 'antd';
import React from 'react';
import '../resources/analytics.css';
const Analytics = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === 'income'
  );
  const totalExpenseTransactions = transactions.filter(
    (transaction) => transaction.type === 'expense'
  );

  const totalIncomeTransactionsPercentage =
    (totalIncomeTransactions.length / totalTransactions) * 100;

  const totalExpenseTransactionsPercentage =
    (totalExpenseTransactions.length / totalTransactions) * 100;

  return (
    <div className='analytics'>
      <div className='row'>
        <div className='col-md-4 mt-3'>
          <div className='transactions-count'>
            <h4>总交易流水笔数：{totalTransactions}</h4>
            <hr />
            <h5>收入:{totalIncomeTransactions.length}</h5>
            <h5>支出:{totalExpenseTransactions.length}</h5>

            {/* 进度圈 */}
            <div className='progress-bars'>
              <Progress
                className='mx-5'
                strokeColor='#5DD64F'
                type='circle'
                percent={totalIncomeTransactionsPercentage.toFixed(0)}
              />
              <Progress
                strokeColor='#E5572F'
                type='circle'
                percent={totalExpenseTransactionsPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
