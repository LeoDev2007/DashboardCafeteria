
import ProdutoItem from "./ProdutoItem";
import styles from "../../Estoque.module.css";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  tipo: string;
  status: string;
};

type Props = {
  produtos: Produto[];
};

const ProdutoLista = ({ produtos }: Props) => {
  return (
    <div className={styles.produtoLista}>
      <Pagination.Root count={20} pageSize={2} defaultPage={1}>
        <ButtonGroup gap="4" size="sm" variant="ghost">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>
          <Pagination.PageText />
          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ProdutoLista;
