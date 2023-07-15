import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Result() {
  let params = useParams();

  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult(params.input);
  }, [params.input]);

  const getResult = async (input) => {
    console.log("Fetching for : " + input);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}&number=10`
    );
    const data = await api.json();
    setResult(data.results);
  };

  return (
    <Grid>
      {result.map((item) => {
        return (
          <Card>
            <div>
              <img src={item.image}></img>
              <h4>{item.title}</h4>
            </div>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
  position: relative;
`;

const Card = styled.div`
  img {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Result;
