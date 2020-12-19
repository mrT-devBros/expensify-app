// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	// console.log('expensesReducer running');
	switch (action.type) {
		case 'ADD_EXPENSE':
			// return state.concat(action.expense);
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			// return state.filter((expense) => expense.id !== action.id);
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updatedExpenseItems
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

export default expensesReducer;
