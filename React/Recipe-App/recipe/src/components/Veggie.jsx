// Component, use rfc
import React from 'react'


// STYLED COMPONENTS
import { Wrapper } from "./styled/Wrapper";
import { Gradient } from "./styled/Gradient";
import { Card } from "./styled/Card";


import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'

export default function Veggie() {

    // apiKey
    const api_key = process.env.REACT_APP_API_KEY;

    // useState -> we're handling an array ([])
    const [veggie, setVeggie] = useState([]);

    // getPopular will be called everytime this component gets rendered
    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
        // fetch, and turn the data into json format
        // fetched data will be stored into the local storage.
        const check = localStorage.getItem("veggie");
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=9&tags=vegetarian`);
            const data = await api.json();
            setVeggie(data.recipes);

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            console.log(data.recipes);
        }
    }


  return (
    <div>
    {/* fetch the popular items with the help of api */}
    {/* GET https://api.spoonacular.com/recipes/random */}

    {/* Fancy way of looping */}
    {/* Each individual div needs a key, so that they can be removed from the ui when needed */}

    <Wrapper>
    <h3>Our Vegeterian Picks</h3>
        <Splide options={{
            perPage:5,
            // arrows: false,
            // pagination: false,
            // drag: 'free',
            gap: '5rem',
        }}>
            {veggie.map((recipe => {
                return(
                    <SplideSlide key={recipe.id}>
                        <Card key={recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}  />
                            <Gradient/>
                        </Card>
                    </SplideSlide>
                );        
            }))}
        </Splide>
    </Wrapper>
</div>
  )
}
