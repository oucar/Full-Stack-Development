const Home = () => {

    const handleClick = (e) => {
        console.log("I have been clicked.", e);
    }

    const handleClickAgain = (name) => {
        console.log(`hello ${name}`)
    }
 
    return (  
        <div className="home">
            <h2>Homepage</h2>
            {/* paranthesis invoke the function right away - handleClick(123) */}
            <button onClick={handleClick}>Click Me!</button>

            <button onClick={() => handleClickAgain('Onur!')}>Click Me Again!</button>
        </div>
    );
}
 
export default Home;