// select the button
const btn = document.querySelector('button');

const spans = document.querySelectorAll('span');

// declare the function (gemerate 3 numbers from 0 to 255)
const randomizeColor = () => {

    const r = Math.floor( Math.random() * 255 );
    const g = Math.floor( Math.random() * 255 );
    const b = Math.floor( Math.random() * 255 );

    let pixels = [r,g,b];                           // will help to output text

    let i = 0;
    for(span of spans){                             // each span represents a text
        span.textContent = pixels[i];               // we have 3 spans in total in the html
        i++;
    } // end for

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}

// add event listener
btn.addEventListener('click', randomizeColor);

// const btn4 = document.querySelector("#v4");
// btn4.addEventListener('click', () => {          // you're not calling this function. it will be called once the user clicked on the button
//     console.log("4TH ONE IS CLICKED!")
// });
