import styles from "../../Estoque.module.css";
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import { useModalStore } from "@/Zustand/useModalStore";
import IngredienteEdit from "./IngredienteEdit";

type Ingrediente = {
  id: number;
  nome: string;
  quantidade: number;
  unidade: string;
  status: string;
};

type Props = {
  ingrediente: Ingrediente;
};

const IngredienteItem = ({ ingrediente }: Props) => {
  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <div className={styles.ingredienteItem}>
      <h3>{ingrediente.nome}</h3>

      <div className={styles.estoqueQuantidade}>
        <span>Estoque:</span>

        <div className={styles.incrementadorContainer}>
          <Button size="xs">-</Button>

          <span className={styles.quantidadeNumero}>
            {ingrediente.quantidade}
          </span>

          <Button size="xs">+</Button>
        </div>
      </div>

      <p>Unidade: {ingrediente.unidade}</p>
      <p>Status: {ingrediente.status}</p>

      <div className={styles.ingredienteAcoes}>
        <Button
          onClick={() => onOpen("Editar Ingrediente", <IngredienteEdit />)}
          colorPalette="black"
          variant="solid"
          aria-label="Editar ingrediente"
        >
          <GoPencil />
        </Button>

        <Button
          colorPalette="red"
          variant="solid"
          aria-label="Excluir ingrediente"
        >
          <CiTrash />
        </Button>
      </div>
    </div>
  );
};

export default IngredienteItem;