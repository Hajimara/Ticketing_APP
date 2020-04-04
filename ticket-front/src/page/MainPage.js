import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import SliderTemplate from "../components/slider/SliderTemplate";
import SliderContainer from "../containers/slider/SliderContainer";
import MovieTemplate from "../components/movie/MovieTemplate";
import MovieContainer from "../containers/movie/MovieContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer bgColor={true}/>
      <MovieTemplate>
        <MovieContainer></MovieContainer>
      </MovieTemplate>
      <SliderTemplate>
      <SliderContainer></SliderContainer>
      </SliderTemplate>
    </>
  );
};

export default MainPage;
