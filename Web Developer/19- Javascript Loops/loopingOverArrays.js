const animals = ['lion', 'tiger', 'bear'];

for (let i = 0; i < animals.length; i++) {
    console.log(`${i}: ` + animals[i]);
}

const student = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
let counter = 1;

for(let i = 0; i < student.length; i++){

    if(i%3===0){
        console.log(`ROW ${counter}`);
        counter++;
    }

    console.log(student[i]);

}