/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { Checkbox, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Person, Lock, Mail } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "../css/Animations.css";

import { registerDefaultValues, registerValidationSchema, TypeValidationRegisterData } from "./Schema/RegisterValidationSchema";
import { TextFormField } from "../../TextFormField/TextFormField";
import { Grid, Stack } from "@mui/material";
import { useAuth } from "../../../Contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { setStepAccess, setAuthenticated } = useAuth();

  const { handleSubmit, formState: { errors }, control, setValue, watch } = useForm({
    resolver: yupResolver(registerValidationSchema()),
    defaultValues: registerDefaultValues
  });

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const onSubmit = (formValues: TypeValidationRegisterData) => {

    if (!validateEmail(formValues?.email)) {
      setValue("email", "");
      return;
    }

    if (Object.values(formValues).length !== 0) {
      localStorage.setItem("username", formValues.username);
      localStorage.setItem("email", formValues.email);
      localStorage.setItem("password", formValues.password);

      navigate("/profile");
      setAuthenticated(true);
      setStepAccess('logged');
    }
  };

  const onError = (errors: any) => {
    console.log(errors);
  }

  return (
    <div className="wrapper active-popup">
      <h2 style={{ margin: 20 }}>Registro</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>

          <Grid>
            <TextFormField
              name="username"
              label="Nome de usuário"
              type="text"
              startIcon={<Person style={{ height: 20, width: 20 }} />}
              control={control}
              errors={errors.username}
            />
          </Grid>

          <Grid>
            <TextFormField
              name="email"
              label="Email"
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
        <Grid mt={1}>
          <Checkbox
            placeholder=""
            checked={watch("agreeTerms") ? true : false}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValue("agreeTerms", e.target.checked);
            }
            }
          />
          Eu concordo com os termos e condições
        </Grid>
        <p>
          Já tem uma conta?{" "}
          <Button color="primary" onClick={() => setStepAccess('login')}>
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
