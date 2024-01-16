import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHeader}>
        <tr className={css.tableHeaderRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className={css.tableBodyRow}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionsHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
