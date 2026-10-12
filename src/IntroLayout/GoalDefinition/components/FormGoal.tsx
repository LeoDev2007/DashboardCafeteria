import { Input, InputGroup } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import styles from "../Goal.module.css";
import { NavLink } from "react-router";
import { ROUTES } from "../../../routes/routes";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

const goalSchema = z.object({
  goal: z
    .string()
    .min(1, { message: "O campo é obrigatório" })
    .regex(/^\d+$/, { message: "Apenas números permitidos" }),
});

type CreateGoalData = z.infer<typeof goalSchema>;

const FormGoal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGoalData>({
    resolver: zodResolver(goalSchema),
  });

   const navigate = useNavigate();

  const onSubmit = (/*data: CreateGoalData*/) => {
    try {
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro na criação da meta");
      return;
    }
  };

  return (
    <div className={styles.FormGoalContainer}>
      <div className={styles.FormGoalInfo}>
        <h2>Meta de Negócio</h2>
        <p>
          Neste campo, você irá definir a meta de lucro de seu negócio, onde
          será contada cada despesa e ganho.
        </p>
        <p>
          Não há tempo limite para o atingimento da meta, sendo que quando
          concluída, o sistema irá lhe requisitar uma nova meta!
        </p>
      </div>
      <form className={styles.FormGoal_Form} onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={!!errors.goal}>
          <Field.Label>Meta de Negócio:</Field.Label>
          <InputGroup
            startElement={<span style={{ marginLeft: "1rem" }}>R$</span>}
          >
            <Input padding="1rem" placeholder="0.00" type="number" {...register("goal")} />
          </InputGroup>
          <Field.ErrorText>{errors.goal?.message}</Field.ErrorText>
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
      </form>
      <div className={styles.link}>
        <p>
          Caso não queira criar uma meta agora, prossiga para o{" "}
          <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
        </p>
      </div>
    </div>
  );
};

export default FormGoal;
