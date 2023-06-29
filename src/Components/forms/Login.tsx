import { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button } from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import LockIcon from "@mui/icons-material/Lock";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  handleSwitchForm: () => void;
}

const Login = ({ handleSwitchForm }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formIsValid = true;

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      formIsValid = false;
    }

    if (formIsValid) {
      // Lógica para realizar a validação do login
      // Por exemplo, verificar se o email e senha são válidos

      // Obter dados do localStorage
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (storedEmail === email && storedPassword === password) {
        // Login bem-sucedido, redirecionar para a página de perfil
        navigate("/profile");
      } else {
        // Login inválido
        setError("Credenciais inválidas. Por favor, tente novamente.");
      }
    }
  };

  return (
    <div className="wrapper active-popup">
      <h2>Login</h2>
      <Box m={3} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <Mail />,
          }}
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <LockIcon />,
          }}
        />
        {error && <p>{error}</p>}
        <Box m={15} />
        <p>
          Não possui uma conta?{" "}
          <Button color="primary" onClick={handleSwitchForm}>
            Registrar
          </Button>
        </p>

        <Box m={1} />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
