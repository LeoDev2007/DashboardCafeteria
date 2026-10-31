import styles from "../../Estoque.module.css";
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import { useModalStore } from "@/Zustand/useModalStore";
import ProdutoEdit from "./ProdutoEdit";
import { useState } from "react";

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
  const [quantidade, setQuantidade] = useState(produto.quantidade);

  return (
    <div className={styles.produtoItem}>
      <h3>{produto.nome}</h3>

      <p>Preço: R$ {produto.preco.toFixed(2)}</p>

      <div className={styles.estoqueQuantidade}>
        <span>Estoque:</span>

        <div className={styles.incrementadorContainer}>
          <Button
            size="xs"
            aria-label="Diminuir estoque"
            onClick={() => setQuantidade((atual) => Math.max(0, atual - 1))}
          >
            -
          </Button>

          <span className={styles.quantidadeNumero}>{quantidade}</span>

          <Button
            size="xs"
            aria-label="Aumentar estoque"
            onClick={() => setQuantidade((atual) => atual + 1)}
          >
            +
          </Button>
        </div>
      </div>

      <p>Tipo: {produto.tipo}</p>
      <p>Status: {produto.status}</p>

      <div className={styles.produtoAcoes}>
        <Button
          onClick={() => onOpen("Editar Produto", <ProdutoEdit />)}
          colorPalette="black"
          variant="solid"
          aria-label={`Editar ${produto.nome}`}
        >
          <GoPencil />
        </Button>

        <Button
          colorPalette="red"
          variant="solid"
          aria-label={`Excluir ${produto.nome}`}
        >
          <CiTrash />
        </Button>
      </div>
    </div>
  );
};

export default ProdutoItem;
