import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { TextField, Checkbox, Button } from "@material-ui/core";
import { Person, Mail } from "@material-ui/icons";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

import "./css/Animations.css";

interface RegisterProps {
  handleSwitchForm: () => void;
}

const Register = ({ handleSwitchForm }: RegisterProps) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");

    if (savedUsername) {
      setUsername(savedUsername);
    }

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
    };

    if (username.trim() === "") {
      formIsValid = false;
      newErrors.username = "Por favor, insira um nome de usuário.";
    }

    if (email.trim() === "") {
      formIsValid = false;
      newErrors.email = "Por favor, insira um endereço de e-mail.";
    } else if (!validateEmail(email)) {
      formIsValid = false;
      newErrors.email = "Por favor, insira um endereço de e-mail válido.";
    }

    if (password.trim() === "") {
      formIsValid = false;
      newErrors.password = "Por favor, insira uma senha.";
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Salvar informações no localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Navegar para a página de perfil
      navigate("/profile");
    }
  };

  return (
    <div className="wrapper active-popup">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome de usuário"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <Person />,
          }}
          error={errors.username !== ""}
          helperText={errors.username}
        />
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
          error={errors.email !== ""}
          helperText={errors.email}
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
          error={errors.password !== ""}
          helperText={errors.password}
        />
        <Checkbox
          checked={agreeTerms}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAgreeTerms(e.target.checked)
          }
        />
        Eu concordo com os termos e condições
        <p>
          Já tem uma conta?{" "}
          <Button color="primary" onClick={handleSwitchForm}>
            Entrar
          </Button>
        </p>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default Register;
