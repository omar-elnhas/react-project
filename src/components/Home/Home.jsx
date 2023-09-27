import React from "react";

import { Helmet } from "react-helmet";
import Movies from "../Movies/Movies";
import Tvshows from "../Tvshows/Tvshows";
import People from "../People/People";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
    <div>

      <Movies />
      <Tvshows />
      <People />
      </div>
    </>
  );
}
