/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useParams } from "react-router";
import { useGetMovieById } from "../../../Hooks/MovieHook";
import { Typography } from "@mui/material";
// import BackgroundWaves from "../../../Components/Background/BackgroundWaves";

import "../../../index.css";

type TitleProp = {
  title: string;
};

const Title = ({ title }: TitleProp) => {
  return (
    <span style={{ fontSize: "14px", lineHeight: 2 }}>
      <em>{title}</em>
    </span>
  );
};

const Details: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetMovieById(id!);

  const geners = data?.genres.map((item) => item.name);
  return (
    <main style={{ maxWidth: "1200px", margin: "5% auto", padding: 20 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <div style={{ marginTop: 10 }}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
            alt="img"
          />
        </div>
        <div
          style={{
            width: 700,
            borderLeft: "solid 2px #222",
            padding: "20px",
            marginLeft: -30,
          }}
        >
          <Typography variant="h3">{data?.title}</Typography>
          <Title title="Descrição" />
          <Typography>{data?.overview}</Typography>
          <Title title="Data de lançamento" />
          <Typography>{data?.release_date}</Typography>
          <Title title="Popularidade" />
          <Typography>{data?.popularity}</Typography>
          <Title title="Gêneros" />
          <div style={{ display: "flex" }}>{geners?.join(", ")}</div>
          <Title title="Status" />
          <Typography>{data?.tagline}</Typography>
        </div>
      </div>
      {/* <Box m={50} />
      <BackgroundWaves /> */}
    </main>
  );
};

export default Details;
