import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Grid } from './styled/Grid';
import { Card } from './styled/Card';

// rfce
function Cuisine() {

  // handling the parameters that has been passewd into the link
  let params = useParams();

  // apiKey
  const api_key = process.env.REACT_APP_API_KEY;

  const [cuisine, setCuisine] = useState([]);

  // get recipes specific to a cuisine
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&cuisine=${name}`);
    
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  // it will get rendered again once params.type changes!
  useEffect(() => {
    // get the cuisine from the parameters
    getCuisine(params.type);
    console.log(params.type);
  // PAGES.JSX -> Whatever you put after :
  }, [params.type]);

  return (
    <Grid 
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title}/>
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  )
}

export default Cuisine