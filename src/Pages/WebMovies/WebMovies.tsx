import { Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useEffect, useState } from "react";
import Typed from "react-typed";
import BackgroundWaves from "../../Components/Background/BackgroundWaves";

import "./css/WebMovies.css";

const WebMovies = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setShowTyping(true);
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      m="10% auto"
    >
      <Grid textAlign="center" justifyContent="center">
        <Typography
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/filmes")}
          variant="h4"
          textAlign="center"
          mb={1}
        >
          <span style={{ display: "block", fontWeight: "bold" }}>
            Divirta-se conhecendo mais sobre&nbsp;
          </span>
          {showTyping ? (
            <Typed
              style={{ fontStyle: "italic", fontWeight: "normal" }}
              strings={["Filmes.", "Series.", "Documentários."]}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          ) : null}
        </Typography>
        <Grid>
          <div className="button-movies" onClick={() => navigate("/filmes")}>
            {isAuthenticated ? "Ver filmes" : "Entrar com convidado"}
          </div>
          {!isAuthenticated && (
            <Button variant="contained" onClick={() => navigate("/login")}>
              Criar conta
            </Button>
          )}
          <BackgroundWaves />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WebMovies;
