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
    <div className={styles.produtoItem}>
      <h3>{ingrediente.nome}</h3>

      <p>Estoque: {ingrediente.quantidade}</p>
      <p>Unidade: {ingrediente.unidade}</p>
      <p>Stauts: {ingrediente.status}</p>

      <div className={styles.produtoAcoes}>
        <Button
          onClick={() => onOpen("Editar Ingrediente", <IngredienteEdit />)}
          colorPalette="black"
          variant="solid"
        >
          <GoPencil />
        </Button>
        <Button colorPalette="red" variant="solid">
          <CiTrash />
        </Button>
      </div>
    </div>
  );
};

export default IngredienteItem;
