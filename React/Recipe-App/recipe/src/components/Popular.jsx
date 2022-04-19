import { useEffect, useState } from "react";

// Component, use rfc
const Popular = () => {

    // apiKey
    const api_key = process.env.REACT_APP_API_KEY;

    // useState -> we're handling an array ([])
    const [popular, setPopular] = useState([]);

    // getPopular will be called everytime this component gets rendered
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        // fetch, and turn the data into json format
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=10`);
        const data = await api.json();
        setPopular(data.recipes);
    }

    return (
        <div>
            {/* fetch the popular items with the help of api */}
            {/* GET https://api.spoonacular.com/recipes/random */}

            {/* Fancy way of looping */}
            {/* Each individual div needs a key, so that they can be removed from the ui when needed */}
            {popular.map((recipe => {
                return(
                    <div key={recipe.id}>
                        <p>{recipe.title}</p>
                    </div>
                );
            }))}

        </div>
    );
}

export default Popular;
