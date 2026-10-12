import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { PasswordInput } from "@/Components/ui/password-input";
import { useNavigate } from "react-router";
import styles from "./Auth.module.css";
import { NavLink } from "react-router";
import { ROUTES } from "../../routes/routes";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter no mínimo 3 caracteres" })
      .regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: "Apenas letras permitidas" }),
    email: z.string().email({ message: "Insira um E-mail Válido" }),
    password: z
      .string()
      .min(7, { message: "A senha deve ter no mínimo 7 caracteres" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
        message: "A senha deve conter pelo menos uma letra e um número",
      }),
    confirmpassword: z
      .string()
      .min(7, { message: "A senha deve ter no mínimo 7 caracteres" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
        message: "A senha deve conter pelo menos uma letra e um número",
      }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "As senhas não coincidem",
    path: ["confirmpassword"],
  });

type CreateUserData = z.infer<typeof registerSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: CreateUserData) => {
    try {
      alert("Usuário criado");
      navigate("/goal_definition");
    } catch (error) {
      console.error("Erro na criação do usuário");
      return;
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.welcome}>
        <h2>
          Bem vindo ao <span>(Nome ainda não definido...)</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
          arcu quis nunc vestibulum luctus. Duis tristique dolor non est
          suscipit ultrices
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={!!errors.name}>
          <Field.Label>Nome:</Field.Label>
          <Input
            padding="1rem"
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.email}>
          <Field.Label>E-mail:</Field.Label>
          <Input
            padding="1rem"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password}>
          <Field.Label>Senha:</Field.Label>
          <PasswordInput
            padding="1rem"
            type="password"
            placeholder="Digite sua senha..."
            {...register("password")}
          />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.confirmpassword}>
          <Field.Label>Confirmar Senha:</Field.Label>
          <PasswordInput
            padding="1rem"
            type="password"
            placeholder="Confirme sua senha..."
            {...register("confirmpassword")}
          />
          <Field.ErrorText>{errors.confirmpassword?.message}</Field.ErrorText>
        </Field.Root>
        <Button
          variant="surface"
          bg="#2E5697"
          color="#fff"
          _hover={{ bg: "#1F3D6B" }}
          mt="4"
          rounded="3x1"
          type="submit"
        >
          Enviar
        </Button>
        <div className={styles.link}>
          <p>
            Já possui uma conta? Então faça o seu <NavLink to={ROUTES.LOGIN}>Login</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
