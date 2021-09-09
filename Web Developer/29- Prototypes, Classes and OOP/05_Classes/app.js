// we can group everything together! no need to use prototype
// Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.
// Protected properties are usually prefixed with an underscore _.
class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true


class Color {
	// ! Constructor (automatically runs as long as its name is constructor)
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}

	// ! Methods

	greet(){
		const { name } = this;
		return `hello from ${name}`

		// or
		// return `hello from ${this.name};
	}

	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	} // end innerRgb()

	rgb() {
		return `rgb(${this.innerRGB()})`;
	} // end rgb()

	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	} // end rgba()

	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	} // end hex()

}



// Creating the new colors
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
