import { Promise } from 'firebase';

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is my resolved data.');
		// resolve({
		// 	name: 'mrT',
		// 	age: 25
		// });
		// reject('Something went wrong!');
	}, 2000);
});

console.log('before');

promise
	.then((data) => {
		console.log('1', data);
		// return 'some data';
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('This is my other promise');
			}, 2000);
		});
	})
	.then((str) => {
		console.log('Does this run?', str);
	})
	.catch((error) => {
		console.log('error:', error);
	});

// promise.then((data) => {
// 	console.log('2'.data);
// });

console.log('after');
