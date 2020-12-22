import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')} -
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;

// <button
// 	onClick={() => {
// 		// dispatch(removeExpense({ id: id }));
// 		dispatch(removeExpense({ id })); // object defintion shorthand
// 		console.log({ id });
// 	}}
// >
// 	Remove
// </button>;

// const ExpenseListItem = (props) => (
// 	<div>
// 		<h3>Expense: {props.itemNum}</h3>
// 		<p>Description: {props.description}</p>
// 		<p>Amount: {props.amount}</p>
// 		<p>createdAt: {props.createdAt}</p>
// 	</div>
// );

// export default connect()(ExpenseListItem);
