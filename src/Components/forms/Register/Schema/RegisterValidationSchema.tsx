import { string, object, boolean, InferType } from "yup";

export const registerValidationSchema = () => {
    return object({
        username: string().required("Por favor, insira um nome de usuário."),
        email: string().required("Por favor, insira um endereço de e-mail.").email("Por favor, insira um endereço de e-mail válido."),
        password: string().required("Por favor, insira uma senha."),
        agreeTerms: boolean()
    })
};

const registerObjectValidation = registerValidationSchema();
export type TypeValidationRegisterData = InferType<typeof registerObjectValidation>;

export const registerDefaultValues = {
    username: "",
    email: "",
    password: "",
    agreeTerms: false
}; 