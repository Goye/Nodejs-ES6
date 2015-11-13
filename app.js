'use strict';

//Template literals
var obj = {
	name : 'John Doe',
	greet: function(name, second) {
		var greet = `Hello ${ name } and ${ second }`;
		console.log(greet);
	}
}

obj.greet.call(this, 'Link', '1');
obj.greet.apply(this, ['Cloud', 2]);

//Classes
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	greet() {
		console.log('Hello, '+ this.firstname + ' ' + this.lastname);
	}
}

var me = new Person('Goye', 'says');
me.greet();

//Inheriting
var Greetr = require('./greetr');
var greeterone = new Greetr();

greeterone.on('greet', function(data){
	console.log('Wow greeted!: '+ data);
});

greeterone.greet('Tony');