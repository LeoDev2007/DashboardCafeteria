
import IngredienteItem from "./IngredienteItem";
import styles from "../../Estoque.module.css";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type Ingrediente = {
  id: number;
  nome: string;
  quantidade: number;
  unidade: string;
  status: string;
};


type Props = {
  ingredientes: Ingrediente[];
};

const IngredienteLista = ({ ingredientes }: Props) => {
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
      {ingredientes.map((ingrediente) => (
        <IngredienteItem key={ingrediente.id} ingrediente={ingrediente} />
      ))}
    </div>
  );
};

export default IngredienteLista;
