import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Trending() {
  useEffect(() => {
    getTrending();
  }, []);

  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    const check = localStorage.getItem("trending");
    var data;
    if (check) {
      data = JSON.parse(check);
      setTrending(data.recipes);
      console.log("Fetched from local storage");
      console.log(data);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags="indian"`
      );
      data = await api.json();
      setTrending(data.recipes);
      console.log(data);
      console.log("Fetched from API call");
      localStorage.setItem("trending", JSON.stringify(data));
    }
  };

  return (
    <Wrapper>
      <h3>Trending Recipes</h3>
      <Splide
        options={{
          gap: "1rem",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 4,
        }}
      >
        {trending.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <img src={recipe.image} alt="{recipe.title}"></img>
                <p>{recipe.title}</p>
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    font-weight: 600;
    z-index: 10;
    color: white;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    font-size: 1rem;
    text-align: center;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
`;

export default Trending;
