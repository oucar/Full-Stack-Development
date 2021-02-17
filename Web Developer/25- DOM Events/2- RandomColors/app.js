// select the button
const btn = document.querySelector('button');

const spans = document.querySelectorAll('span');

// declare the function (gemerate 3 numbers from 0 to 255)
const randomizeColor = () => {

    const r = Math.floor( Math.random() * 255 );
    const g = Math.floor( Math.random() * 255 );
    const b = Math.floor( Math.random() * 255 );

    let pixels = [r,g,b];

    let i = 0;
    for(span of spans){
        span.textContent = pixels[i];
        i++;
    } // end for

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}



// add event listener
btn.addEventListener('click', randomizeColor);