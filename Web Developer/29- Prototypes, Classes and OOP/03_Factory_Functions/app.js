//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {}; 						// !empty object 
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {  				// !method 
		const { r, g, b } = this; 			// same as color.r = r color.g = g...
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		console.log(this);
		const { r, g, b } = this;			// ! refers to the thing before .hex()
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"



// black.hex === firstColor.hex (FALSE, they are not the same function)
// "hi".slice === "bye".slice (TRUE, they are the same function)

// Factory functions create a new function for every "object" you declare. Not efficient