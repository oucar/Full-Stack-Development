import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Grid } from './styled/Grid';
import { Card } from './styled/Card';

// rfce
function Cuisine() {

  // handling the parameters
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
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return(
          <Card key={item.id}>
          <img src={item.image} alt={item.title}/>
          <h4>{item.title}</h4>
        </Card>
        );
      })}
    </Grid>
  )
}

export default Cuisine