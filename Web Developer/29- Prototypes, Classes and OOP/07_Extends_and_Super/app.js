// Sharing functionality between classes

class Pet {
	constructor(name, age) {					// will be used for children as well
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {		// custom constructor
		console.log('IN CAT CONSTRUCTOR!');

		// ! super is a reference to what we are extending from
		super(name, age); 						// this.name = name; this.age = age; --> does the same thing
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW!!';
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;	// overrides
	}
}


// const pet = new Dog("Onur", 12);
// pet.bark() --> "WOOF!!"
// pet.eat()