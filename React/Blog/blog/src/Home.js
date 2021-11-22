import { useState } from 'react';

const Home = () => {

    

    const handleClick = (e) => {
        console.log("I have been clicked.", e);
    }

    // useState Hook
    const [name, setName] = useState('mario');

    const changeName = (givenName) => {
        setName(givenName);
    }
 
    return (  
        <div className="home">
            <h2>Homepage</h2>
            {/* paranthesis invoke the function right away - handleClick(123) */}
            <button onClick={handleClick}>Click Me!</button>

            <button onClick={() => changeName('onur')}>Change the name!</button>
            <p> {name} </p>
        </div>
    );
}
 
export default Home;