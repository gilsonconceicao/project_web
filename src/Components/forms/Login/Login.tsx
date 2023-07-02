import { useState } from "react";
import { Button } from "@material-ui/core";
import { Mail, Lock } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TextFormField } from "../../TextFormField/TextFormField";
import { TypeValidationloginData, loginDefaultValues, loginValidationSchema } from "./Schema/LoginValidationSchema";
import { useAuth } from "../../../Contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {setStepAccess, setAuthenticated} = useAuth(); 
  
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(loginValidationSchema()),
    defaultValues: loginDefaultValues
  });

  const [submitError, setSubmitError] = useState("");

  const onSubmit = (formValues: TypeValidationloginData) => {
    let formIsValid = true;

    const password = formValues.password;
    const email = formValues.email;

    if (!password || !email) {
      setSubmitError("Por favor, preencha todos os campos.");
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
        setAuthenticated(true); 
        setStepAccess('logged'); 
      } else {
        // Login inválido
        setSubmitError("Credenciais inválidas. Por favor, tente novamente.");
      }
    }
  };

  return (
    <div className="wrapper active-popup">
      <h2>Login</h2>
      <Box m={3} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Grid>
            <TextFormField
              name="email"
              label="E-mail"
              type="email"
              startIcon={<Mail style={{ height: 20, width: 20 }} />}
              control={control}
              errors={errors.email}
            />
          </Grid>
          <Grid>
            <TextFormField
              name="password"
              label="Senha"
              type="password"
              startIcon={<Lock style={{ height: 20, width: 20 }} />}
              control={control}
              errors={errors.password}
            />
          </Grid>
        </Stack>
        {submitError &&
          <p className="errorMessage">
            {submitError}
          </p>}
        <Box m={15} />
        <p>
          Não possui uma conta?{" "}
          <Button color="primary" onClick={() => setStepAccess('register')}>
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
