// EXERCISES

// prime numbers
outer: for(let i = 2; i<=10; i++){

	for(let j = 2; j<i; j++){
		
		if(i % j === 0 ) continue outer;	
	
	}

	alert(i);			// prime

}

// tempConversion
let ftoc = (fahrenheit) => ((fahrenheit-32)*(5/9)).toFixed(1);
let ctof = (celsius) => ((9/5)*celsius + 32).toFixed(1);
	
// repeatString
let repeatString = (string, num) => {
	
	let repeatedString = "";
	for(let i = 0; i<num; i++){
		repeatedString = repeatedString + string;
	}

	return repeatedString;

};

// reverseString
let reverseString = (string) =>{

	let reversed = '';
	
	for(let i = string.length-1; i>=0; i--){
		reversed = reversed + string[i];	
	} // end for

	return reversed;
	
};

// Remove from array
let removeFromArray = (arrayGiven, element) => {

	let index = arrayGiven.indexOf(element);
	arrayGiven.splice(element,1);
	return arrayGiven;				// make sure you return the new array!!

};

// leapYear




