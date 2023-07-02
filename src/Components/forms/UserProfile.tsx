import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/material";
import { useAuth } from "../../Contexts/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();

  useEffect(() => {
    // Acessar as informações do localStorage
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // Exibir as informações no console ou fazer outra lógica desejada
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  }, []);

  const handleGoBack = () => {
    navigate("/preview");
  };

  const CleanLocalStorage = () => {
    localStorage.clear();
    setAuthenticated(false);
    navigate("/");
  };

  const ContainerProfile = styled("div")({
    width: "500px",
    height: "300",
    padding: "20px",
    margin: "50px auto",
    textAlign: "center",
  });

  return (
    <>
      <ContainerProfile>
        <h2 style={{ textAlign: "center" }}>Perfil do Usuário</h2>
        <h4 style={{ textAlign: "center", color: "green" }}>
          Você está logado!
        </h4>
        <Box m={3} />
        <div>
          <p>
            <strong>Nome de usuário:</strong>{" "}
            {localStorage.getItem("username") || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {localStorage.getItem("email") || "N/A"}
          </p>
          <p>
            <strong>Senha:</strong> {localStorage.getItem("password") || "N/A"}
          </p>
        </div>
        <Box m={3} />
        <button
          style={{
            width: "200px",
            margin: "auto",
            display: "block",
            cursor: "pointer",
          }}
          onClick={handleGoBack}
        >
          Voltar
        </button>
        <Box m={1} />
        <button
          style={{
            width: "200px",
            margin: "auto",
            display: "block",
            cursor: "pointer",
          }}
          onClick={CleanLocalStorage}
        >
          Deletar Usuário
        </button>
      </ContainerProfile>
    </>
  );
};

export default Profile;
