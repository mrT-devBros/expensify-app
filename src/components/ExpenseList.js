import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div>
		{props.expenses.length === 0 ? (
			<p>No expenses</p>
		) : (
			props.expenses.map((expense) => {
				return (
					<ExpenseListItem key={expense.id} {...expense} />
					// <ExpenseListItem
					// 	key={i}
					// 	description={expense.description}
					// 	amount={expense.amount}
					//   createdAt={expense.createdAt}
					//   expense={expense}
					// />
				);
			})
		)}
	</div>
);

const mapStateToProps = (state) => {
	return {
		name: 'mrT',
		expenses: selectExpenses(state.expenses, state.filters)
		// expenses: state.expenses
		// filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseList);

// create HOC
// const ConnectedExpenseList = connect((state) => {
// 	return {
// 		name: 'mrT',
// 		expenses: state.expenses
// 	};
// })(ExpenseList);

// export default ConnectedExpenseList;
