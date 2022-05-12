import React from "react";
import { useParams } from "react-router-dom";

const SingleJoke = () => {
  let params = useParams();
  return <div>{params.id}</div>;
};

export default SingleJoke;
