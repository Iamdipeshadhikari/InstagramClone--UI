import React from "react";
import styled from "styled-components";
import { Story } from "../StyledComponents/Story";

// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InfiniteScroll from "react-infinite-scroll-component";

const Stories = () => {
  const SliderSettings = {
    dots: false,
    infinity: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const FormatUsername = (str) => {
    const output = [];
    for (let i = 0; i < 9; i++) {
      output.push(str[i]);
    }

    return output.join("");
  };

  return (
    <StoriesContainer>
      <Slider {...SliderSettings}>
        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Bhumik Pangeni")}</span>
        </Story>

        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Manjil Junior")}</span>
        </Story>
        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Sabitri Pangeni")}</span>
        </Story>

        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Krishna Pangeni")}</span>
        </Story>

        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Sura Ji")}</span>
        </Story>
        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Ramesh Aryal")}</span>
        </Story>

        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Askhey Kumar")}</span>
        </Story>
        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Robert Downey Junior")}</span>
        </Story>

        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Rale bele")}</span>
        </Story>

        <Story>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmI3ZDlmZjAtOGFiYS00NzhjLTlkMTAtNmRlODFhMmJjNDg0XkEyXkFqcGdeQXVyODk4NzYxNjE@._V1_.jpg"
            alt="Reki bale"
          />

          <span>{FormatUsername("Sonika rai")}</span>
        </Story>
      </Slider>
    </StoriesContainer>
  );
};

export default Stories;

const StoriesContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);

  /* Slick Slider Button */
  .slick-next {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    height: 1.2rem;
    width: 1.2rem;
    color: #999;
    border-radius: 50%;
    z-index: 2;

    &:before {
      font-family: "Font Awesome 5 Free";
      content: "\f061";
      display: inline-block;
      font-weight: 900;
      position: absolute;
      left: 7px;
      top: 6px;
      font-size: 0.7rem;
      color: ${(props) => props.theme.fontColor1};
    }
  }
`;
