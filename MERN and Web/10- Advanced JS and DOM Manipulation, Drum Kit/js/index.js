const btns = document.querySelectorAll('button');

for(btn of btns){
    btn.addEventListener('click', function(){
        alert('I got clicked.');
    });
} // end for