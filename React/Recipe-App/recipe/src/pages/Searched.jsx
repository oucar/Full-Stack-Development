import React from 'react'
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { Grid } from './styled/Grid';
import { Card } from './styled/Card';

function Searched() {

  // apiKey
  const api_key = process.env.REACT_APP_API_KEY;

  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  // get recipes specific to a cuisine
  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${name}`);
    const recipes = await data.json();
    
    setSearchedRecipes(recipes.results);
  };
  
  useEffect(() => {
    // PAGES.JSX -> Whatever you put after :
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}> 
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Searched