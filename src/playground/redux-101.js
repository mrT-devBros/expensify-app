import { createStore } from 'redux';

// object destructuring
// const add = ({ a, b }, c) => {
// 	return a + b + c;
// };
// console.log(add({ a: 1, b: 2 }, 100));

// Action generators: functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
	//console.log('running');
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubcribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

//console.log(store.getState());
