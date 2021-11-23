import { useState, useEffect} from 'react';

// custom hook
// can work with anything and not with only blogs
const useFetch = (url) => {

    // ! blogs
    // ? will be passed using Props (you can pass data to your child --> <BlogList/>)
    const [data, setData] = useState([]);

    // ! loading screen
    const [isPending, setIsPending] = useState(true);

    // ! error on the screen
    const [error, setError] = useState(null);

    // fires on every render
    // ? [] -> only runs in the first render
    // ? [total] -> only runs if the total changes 
    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('could not fetch the data for that resource!');
                }
                // parses json into js
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                // console.log(err.message);
                setError(err.message);
            })

        console.log("Use effect!")
    }, [url])

    return { data, isPending, error };
}

export default useFetch;