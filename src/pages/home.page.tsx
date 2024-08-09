import React from "react";
import { Link } from "react-router-dom";
import InTheater from "../components/home/in-theater.component";
import Latestnews from "../components/home/latestnews.component";
import Slider from "../components/home/slider.component";
import Trailers from "../components/home/trailers.component";

function Home() {
  return (
    <>
      <Slider />
      <InTheater />
      <Trailers />
      <Latestnews />
    </>
  );
}

export default Home;
