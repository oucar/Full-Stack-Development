import { useState } from 'react';

const Home = () => {

    

    const handleClick = (e) => {
        console.log("I have been clicked.", e);
    }

    // useState Hook
    // !NAME
    const [name, setName] = useState('mario');

    const changeName = (givenName) => {
        setName(givenName);
    }

    // !AGE
    const [age, setAge] = useState(13);

    const changeAge = (givenAge) => {
        setAge(givenAge);
    }

 
    return (  
        <div className="home">
            <h2>Homepage</h2>
            {/* paranthesis invoke the function right away - handleClick(123) */}
            <button onClick={handleClick}>Click Me!</button>

            <button onClick={() => {
                changeName('onur');
                changeAge(18);
            }}>useState Hooks</button>
            <p> {name} </p>
            <p> { age } </p>
        </div>
    );
}
 
export default Home;