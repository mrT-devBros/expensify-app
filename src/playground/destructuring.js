//
// Object Destructuring
//

// const person = {
// 	name: 'mrT',
// 	age: 25,
// 	location: {
// 		city: 'hcm',
// 		temp: 33
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`I am ${firstName}, and I'm ${age} years old.`);
// console.log(
// 	`I've lived in ${city} city, with the temperature of ${temperature} degrees.`
// );

// // challenge
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		// name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['620 DVB', 'HCM', '4', '16'];
const [, city, district] = address;

console.log(`You are in ${city}, district ${district}.`);

// challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
