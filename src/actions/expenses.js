import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
// export const addExpense = ({
// 	description = '',
// 	note = '',
// 	amount = 0,
// 	createdAt = 0
// } = {}) => ({
// 	type: 'ADD_EXPENSE',
// 	expense: {
// 		id: uuid(),
// 		description,
// 		note,
// 		amount,
// 		createdAt
// 	}
// });

const db = {
	users: {
		uidjslkfa: {
			expenses: {
				idkjslf: {
					description: 'rent',
					note: 'some note',
					amount: '3231',
					createdAt: 2243124
				}
			}
		}
	}
};

export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch, getState) => {
		// destructure here is identical to doing the exact same thing inside of the arguments list
		const uid = getState().auth.uid;
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = {
			description,
			note,
			amount,
			createdAt
		};
		return database
			.ref(`users/${uid}/expenses`)
			.push(expense)
			.then((ref) => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense
					})
				);
			});
	};
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

export const startRemoveExpense = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.remove()
			.then(() => {
				dispatch(removeExpense({ id }));
			});
	};
};

// EDIT_EXPENSE
export const editExpense = (id, updatedExpenseItems) => ({
	type: 'EDIT_EXPENSE',
	id,
	updatedExpenseItems
});

export const startEditExpense = (id, updatedExpenseItems) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.update(updatedExpenseItems)
			.then(() => {
				dispatch(editExpense(id, updatedExpenseItems));
			});
	};
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses`)
			.once('value')
			.then((snapshot) => {
				const expenses = [];
				snapshot.forEach((childSnapshot) => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				dispatch(setExpenses(expenses));
			});
	};
};
