import { Button } from "@chakra-ui/react";
import styles from "../Goal.module.css";

type Props = {
  onNext: () => void;
};

const Welcome = ({ onNext }: Props) => {
 
  return (
    <div className={styles.WelcomeContainer}>
        <h2>(Nome do sistema...)</h2>
      <div className={styles.WelcomeInfo}>
        <h2>
          Boas-Vindas, <span>Usuário</span>
        </h2>
        <p>
          Muito obrigado por ter escolhido os serviços da (Nome do sistema...). Vamos
          prosseguir para criar sua primeira meta de seu negócio!
        </p>
      </div>
        <Button
          variant="surface"
          bg="#2E5697"
          color="#fff"
          _hover={{ bg: "#1F3D6B" }}
          mt="4"
          rounded="3x1"
          onClick={onNext}
        >
          Prosseguir
        </Button>
    </div>
  );
};

export default Welcome;
