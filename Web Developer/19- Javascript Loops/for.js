for (let i = 0; i < 10; i++) {
    console.log(i + 1 + " chicken");
}

//print even numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// or

for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}


/*

The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.

The loop below uses continue to output only odd values:

Note : Continue is interchangable with else and else if.

*/

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

// Does the same thing in a more js way :)
for (let i = 0; i < 10; i++) {

  if (i % 2) {				//odd
    alert( i );
  }

}

for(let i = 0; i<=10; i++){

	if(!(i%2)){			//even
		alert(i);
	}

}

 
//  Loop labeling (IMPORTANT!)
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert('Done!');





// POSTFIX PRFEIX LOOP

// prefix
let i = 0;
while (++i < 5) alert( i );			// 1 to 4


// postfix
let i = 0;
while (i++ < 5) alert( i );			// 0 to 5



for (let i = 0; i < 5; ++i) alert( i );		// 0 to 4 in both cases (no difference in for loop)

for (let i = 0; i < 5; i++) alert( i );		// ^^ 










