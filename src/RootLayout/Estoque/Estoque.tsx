
import { CiSearch } from "react-icons/ci";
import { Button, Group, Input } from "@chakra-ui/react";
import SelectComponent from "@/Components/SelectComponent";
import styles from "./Estoque.module.css";
import { useState } from "react";
import ProdutoLista from "./Components/Produtos/ProdutoLista";
import IngredienteLista from "./Components/Ingredientes/IngredienteLista";
import { useModalStore } from "@/Zustand/useModalStore";
import ProdutoForm from "./Components/Produtos/ProdutoForm";
import IngredienteForm from "./Components/Ingredientes/IngredienteForm";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  tipo: string,
  status: string
};

type Ingrediente = {
  id: number;
  nome: string;
  quantidade: number;
  unidade: string;
  status: string;
};

const Estoque = () => {
  const [step, setStep] = useState<number>(1);

  const [produtos, /*setProdutos*/] = useState<Produto[]>([
    {
      id: 1,
      nome: "Pão Francês",
      preco: 1.5,
      quantidade: 50,
      tipo: "Produto",
      status: "Alto"
    },
    {
      id: 2,
      nome: "Bolo de Chocolate",
      preco: 30,
      quantidade: 10,
      tipo: "Produto",
      status: "Alto"
    },
  ]);

  const [ingredientes, /*setIngredientes*/] = useState<Ingrediente[]>([
    {
      id: 1,
      nome: "Farinha",
      quantidade: 20,
      unidade: "kg",
      status: "Baixo"
    },
    {
      id: 2,
      nome: "Açúcar",
      quantidade: 10,
      unidade: "kg",
      status: "Baixo"
    },
  ]);

  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <div className={styles.estoque}>
      <div className={styles.miniContainer_1}>
        <div className={styles.title}>
          <h2>Estoque</h2>
          <Button
            variant="surface"
            bg="#2E5697"
            color="#fff"
            _hover={{ bg: "#1F3D6B" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => onOpen("Adicionar produto ao estoque", <ProdutoForm />)}
          >
            Adicionar Produto
          </Button>
          <Button
            variant="surface"
            bg="#2E5697"
            color="#fff"
            _hover={{ bg: "#1F3D6B" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => onOpen("Adicionar ingrediente ao estoque", <IngredienteForm />)}
          >
            Adicionar Ingrediente
          </Button>
        </div>
        <div className={styles.select}>
          <span>Ordenar por</span>
          <SelectComponent>
            <option value="1">X</option>
            <option value="2">Y</option>
          </SelectComponent>
        </div>
      </div>
      <div className={styles.miniContainer_2}>
        <div className={styles.searchEstoque}>
          <Group attached w="full" maxW="sm">
            <Input
              paddingLeft="1rem"
              flex="1"
              placeholder="Buscar produto de padaria..."
            />
            <Button bg="bg.subtle" variant="outline">
              <CiSearch />
            </Button>
          </Group>
        </div>
        <div className={styles.estoqueAcoes}>
          <Button
            variant="surface"
            bg="#2E5697"
            color="#fff"
            _hover={{ bg: "#1F3D6B" }}
            mt="4"
            padding="1rem 2rem"
            onClick={() => setStep(1)}
          >
            Produto
          </Button>
          <Button
            variant="surface"
            bg="#2E5697"
            color="#fff"
            _hover={{ bg: "#1F3D6B" }}
            mt="4"
            padding="1rem 2rem"
            onClick={() => setStep(2)}
          >
            Ingrediente
          </Button>
        </div>
      </div>
      <div>
        {step === 1 && <ProdutoLista produtos={produtos} />}
        {step === 2 && <IngredienteLista ingredientes = {ingredientes} />}
      </div>
    </div>
  );
};

export default Estoque;
