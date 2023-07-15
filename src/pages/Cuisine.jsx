import React, { useEffect, useState } from "react";
import styled from "styled-components";
import motion from "framer-motion";
import { useParams, Link } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`
    );
    const recipes = await api.json();
    setCuisine(recipes.results);
  };

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card>
            <img src={item.image} alt={item.title}></img>
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 4rem;
`;

const Card = styled.div`
  img {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
