import{ useState } from "react";
import { Button, Group, Input } from "@chakra-ui/react";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SelectComponent from "@/Components/SelectComponent";
import CardVitrine from "./Components/CardVitrine";
import { CiSearch } from "react-icons/ci";
import styles from "./Vitrine.module.css";
import { useModalStore } from "@/Zustand/useModalStore";
import PedidoForm from "./Components/PedidoForm";

const PRODUTOS_MOCK = [
  {
    id: "1",
    nomeProduto: "Pão Francês Quinhentos",
    quantidade: 150,
    preco: 0.8,
    categoria: "Pães",
  },
  {
    id: "2",
    nomeProduto: "Croissant de Chocolate",
    quantidade: 25,
    preco: 8.5,
    categoria: "Folhados",
  },
  {
    id: "3",
    nomeProduto: "Bolo Caseiro de Fubá",
    quantidade: 8,
    preco: 18.0,
    categoria: "Bolos",
  },
  {
    id: "4",
    nomeProduto: "Pão de Queijo Mineiro",
    quantidade: 80,
    preco: 3.5,
    categoria: "Salgados",
  },
  {
    id: "5",
    nomeProduto: "Sonho de Creme",
    quantidade: 14,
    preco: 6.0,
    categoria: "Doces",
  },
];

type Props = {};

const Vitrine = (props: Props) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleToggleSelect = (id: string) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id],
    );
  };

  const temProdutosSelecionados = selectedProducts.length > 0;
  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <div className={styles.vitrine}>
      <h2>Vitrine</h2>
      <div className={styles.vitrineContainer}>
        <div className={styles.vitrineSearch}>
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
        <div className={styles.vitrineMiniContainer}>
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
          <SelectComponent>
            {PRODUTOS_MOCK.map((produto) => (
              <option value={produto.id} key={produto.id}>
                {produto.categoria}
              </option>
            ))}
          </SelectComponent>
        </div>

        <div className={styles.vitrineGrid}>
          {PRODUTOS_MOCK.map((produto) => (
            <CardVitrine
              key={produto.id}
              nomeProduto={produto.nomeProduto}
              quantidade={produto.quantidade}
              preco={produto.preco}
              categoria={produto.categoria}
              isSelected={selectedProducts.includes(produto.id)}
              onToggleSelect={() => handleToggleSelect(produto.id)}
            />
          ))}
        </div>

        {temProdutosSelecionados && (
          <div className={styles.vitrineAcoes}>
            <Button
              variant="surface"
              bg="#2E5697"
              color="#fff"
              _hover={{ bg: "#1F3D6B" }}
              mt="4"
              size="sm"
              maxW="xs"
              w="170px"
              onClick={() => {
                const produtosEscolhidos = PRODUTOS_MOCK.filter((p) =>
                  selectedProducts.includes(p.id),
                );
                onOpen("Fazer Pedido", <PedidoForm produtosSelecionados={produtosEscolhidos} />);
              }}
            >
              {`Fazer Pedido (${selectedProducts.length})`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vitrine;
