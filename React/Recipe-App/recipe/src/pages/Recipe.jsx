import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Wrapper } from './styled/Wrapper';
import { Info } from './styled/Info';
import { Button } from './styled/Button';

const Recipe = () => {

    // we are going to pass an object here
    const [details, setDetails] = useState({});
    // instructions is going to be active by default
    const [activeTab, setActiveTab] = useState("instructions");

    // apiKey
    const api_key = process.env.REACT_APP_API_KEY;


    // get the params
    const params = useParams();

    const fetchDetails = async () => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${api_key}`);
        const data = await resp.json();
        return data;
    };

    useEffect(() => {
        let isMounted = true;
        fetchDetails().then((data) => {
            if (isMounted) setDetails(data);
        });
        return () => {
            isMounted = false;
        };
    }, [params.id]);

  return (
    <Wrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
            {/* INGREDIENTS */}
            {/* if active tab is ingredients, add active to it, else nothing */}
            <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
                Ingredients
            </Button>

            {/* INSTRUCTIONS */}
            <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
                Instructions
            </Button>

            {/* RENDER OUT HTML DATA FROM THE API */}

            {activeTab === "ingredients" && (
                <ul>
                    {details.extendedIngredients.map(({ id, original }) => (
                    <li key={id}>{original}</li>
                    ))}
                </ul>
            )}

            {activeTab === "instructions" && (
                <div>
                    <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                    <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                </div>
            )}

      </Info>
    </Wrapper>
  );
};


export default Recipe;