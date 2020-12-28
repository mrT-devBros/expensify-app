import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import {
	editExpense,
	removeExpense,
	startRemoveExpense
} from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		// console.log('updated', expense);
		// props.dispatch(editExpense(props.expense.id, expense));
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onRemove = () => {
		// dispatch(removeExpense({ id: id }));
		// props.dispatch(removeExpense({ id: props.expense.id })); // object defintion shorthand
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		// console.log(props);
		// return <div>Editing the expense with id of {props.match.params.id}</div>;
		return (
			<div>
				<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
				<button onClick={this.onRemove}>Remove</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(
		(expense) => expense.id === props.match.params.id
	)
});

const mapDispatchToProps = (dispatch, props) => ({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
