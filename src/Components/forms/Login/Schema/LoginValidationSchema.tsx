import { string, object, InferType } from "yup";

export const loginValidationSchema = () => {
    return object({
        email: string().required("Por favor, insira um endereço de e-mail.").email("Por favor, insira um endereço de e-mail válido."),
        password: string().required("Por favor, insira uma senha."),
    })
};

const loginObjectValidation = loginValidationSchema();
export type TypeValidationloginData = InferType<typeof loginObjectValidation>;

export const loginDefaultValues = {
    email: "",
    password: "",
}; 