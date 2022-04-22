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

    // useState -> we're handling an array ([])
    const [popular, setPopular] = useState([]);

    // getPopular will be called everytime this component gets rendered
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        // fetch, and turn the data into json format
        // fetched data will be stored into the local storage.
        const check = localStorage.getItem("popular");
        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=10`);
            const data = await api.json();
            setPopular(data.recipes);

            localStorage.setItem("popular", JSON.stringify(data.recipes));
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
    <h3>Popular Picks</h3>
        <Splide options={{
            perPage:3,
            // arrows: false,
            // pagination: false,
            // drag: 'free',
            gap: '5rem',
        }}>
            {popular.map((recipe => {
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
