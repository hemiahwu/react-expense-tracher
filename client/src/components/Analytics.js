import { Progress } from 'antd';
import React from 'react';
import '../resources/analytics.css';
const Analytics = ({ transactions }) => {
  //总交易流水笔数
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

  // 总交易金额
  const totalTurnover = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;

  const totalExpenseTurnoverPercentage =
    (totalExpenseTurnover / totalTurnover) * 100;

  const categories = [
    'salary',
    'entertainment',
    'freelance',
    'food',
    'travel',
    'investment',
    'education',
    'medical',
    'tax',
  ];

  return (
    <div className='analytics'>
      <div className='row'>
        <div className='col-md-4 mt-3'>
          <div className='transactions-count'>
            <h4>总交易流水笔数：{totalTransactions}</h4>
            <hr />
            <h5>总收入笔数:{totalIncomeTransactions.length}</h5>
            <h5>总支出笔数:{totalExpenseTransactions.length}</h5>

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
        <div className='col-md-4 mt-3'>
          <div className='transactions-count'>
            <h4>总交易流水金额：{totalTurnover}</h4>
            <hr />
            <h5>总收入金额:{totalIncomeTurnover}</h5>
            <h5>总支出金额:{totalExpenseTurnover}</h5>

            {/* 进度圈 */}
            <div className='progress-bars'>
              <Progress
                className='mx-5'
                strokeColor='#5DD64F'
                type='circle'
                percent={totalIncomeTurnoverPercentage.toFixed(0)}
              />
              <Progress
                strokeColor='#E5572F'
                type='circle'
                percent={totalExpenseTurnoverPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-md-6'>
          <div className='category-analytics'>
            <h4>收入 - 类别分析</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter(
                  (transaction) =>
                    transaction.type === 'income' &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div className='category-card'>
                    <h5>{category}</h5>
                    <Progress
                      strokeColor='#0B5AD9'
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='category-analytics'>
            <h4>支出 - 类别分析</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter(
                  (transaction) =>
                    transaction.type === 'expense' &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div className='category-card'>
                    <h5>{category}</h5>
                    <Progress
                      strokeColor='#0B5AD9'
                      percent={((amount / totalExpenseTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
