import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// the others event we can use to subscribe
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// read or fetch data from the firebase
// database
// 	.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		// console.log(snapshot.val());
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// the way firebase stores data when we want to work with array
// const firebaseNotes = {
// 	notes: {
// 		akjshfuia: {
// 			title: 'First note',
// 			body: 'This is my note'
// 		},
// 		owiuekhljfoas: {
// 			title: 'Another note',
// 			body: 'This is my note'
// 		}
// 	}
// };

// to do that -> using push()
// database.ref('notes').push({
// 	title: 'Buy Food',
// 	body: 'for christmas'
// });

// database.ref('notes/-MPNIb64VT9eVxB1fL_O').update({
// 	body: 'go to the gym'
// });

// database.ref('notes/-MPNIb64VT9eVxB1fL_O').remove();

// database.ref('expenses').push({
// 	description: 'Monitor',
// 	amount: 3231,
// 	createdAt: 213543,
// 	note: 'for code'
// });

// database.ref('expenses').push({
// 	description: 'Keyboard',
// 	amount: 749,
// 	createdAt: 215343,
// 	note: 'for code'
// });

// database.ref('expenses').push({
// 	description: 'Table',
// 	amount: 1000,
// 	createdAt: 216541,
// 	note: 'for code'
// });

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// setTimeout(() => {
// 	database.ref().update({
// 		name: 'cherry',
// 		'job/company': 'Google'
// 	});
// }, 3500);

// fetch data and get notified when that data changes
// const onValueChange = (snapshot) => {
// 	console.log(snapshot.val());
// };

// database.ref().on('value', onValueChange);

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off();
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// fetch data a single time
// database
// 	.ref()
// 	.ref('location')
// 	.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// write data to the database
// database
// 	.ref()
// 	.set({
// 		name: 'mrT',
// 		age: 25,
// 		stressLevel: 6,
// 		// isSingle: false,
// 		// job: 'Software developer',
// 		job: {
// 			title: 'Software developer',
// 			company: 'Google'
// 		},
// 		location: {
// 			city: 'HCM',
// 			country: 'VN'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data is saved!');
// 	})
// 	.catch((e) => {
// 		console.log('This failed.', e);
// 	});

// update the data with a weird syntax
// database.ref().update({
// 	job: 'Manager',
// 	'location/city': 'DN'
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// update data
// database.ref().update({
// 	name: 'cherry',
// 	age: 26,
// 	job: 'QA', // add new property
// 	isSingle: null // delete
// });

// // use set() to wipe the data as well
// database.ref('isSingle').set(null);

// delete isSingle
// database
// 	.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Remove succeeded.');
// 	})
// 	.catch((e) => {
// 		console.log('Remove failed:', e.message);
// 	});

// delete everything
// database
// 	.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Remove succeeded.');
// 	})
// 	.catch((e) => {
// 		console.log('Remove failed:', e.message);
// 	});

// database.ref().set('This is my data.');

// database.ref('age').set(26);
// database.ref('location/city').set('DN');

// database
// 	.ref('attributes')
// 	.set({
// 		height: 1.75,
// 		weight: 75
// 	})
// 	.then(() => {
// 		console.log('Second set call worked.');
// 	})
// 	.catch((e) => {
// 		console.log('Things didnt work for the second error', e);
// 	});

// console.log('Data changed!');	// not use since the code a bove happen asynchronous
// console.log('I made a request to change the data.');
