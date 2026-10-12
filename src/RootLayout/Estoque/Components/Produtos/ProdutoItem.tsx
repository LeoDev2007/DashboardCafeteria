import styles from "../../Estoque.module.css";
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import { useModalStore } from "@/Zustand/useModalStore";
import ProdutoEdit from "./ProdutoEdit";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  tipo: string;
  status: string;
};

type Props = {
  produto: Produto;
};

const ProdutoItem = ({ produto }: Props) => {
  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <div className={styles.produtoItem}>
      <h3>{produto.nome}</h3>

      <p>Preço: R$ {produto.preco}</p>

      <p>Estoque: {produto.quantidade}</p>
      <p>Tipo: {produto.tipo}</p>
      <p>Status: {produto.status}</p>

      <div className={styles.produtoAcoes}>
        <Button
          onClick={() => onOpen("Editar Produto", <ProdutoEdit />)}
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

export default ProdutoItem;
