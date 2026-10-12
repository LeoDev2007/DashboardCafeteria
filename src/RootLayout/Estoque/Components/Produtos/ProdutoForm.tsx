import { Field, Input, Button } from "@chakra-ui/react";
import SelectComponent from "@/Components/SelectComponent";
import styles from "../../Estoque.module.css";

const ProdutoForm = () => {
  return (
    <div className={styles.formularioContainer}>
      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Nome:</Field.Label>
        <Input paddingLeft="0.5rem" placeholder="Nome do produto..." />
      </Field.Root>

      <div className={styles.linhaDupla}>
        <Field.Root style={{ flex: 1 }}>
          <Field.Label className={styles.labelTitulo}>Preço</Field.Label>
          <Input paddingLeft="0.5rem" placeholder="R$ 0,00" width="100px" />
        </Field.Root>

        <Field.Root>
          <Field.Label className={styles.labelTitulo}>Quantidade</Field.Label>
          <div className={styles.incrementadorContainer}>
            <Button
              variant="surface"
              bg="#2E5697"
              color="#fff"
              _hover={{ bg: "#1F3D6B" }}
              size="xs"
              maxW="xs"
            >
              -
            </Button>
            <span className={styles.quantidadeNumero}>1</span>
            <Button
              variant="surface"
              bg="#2E5697"
              color="#fff"
              _hover={{ bg: "#1F3D6B" }}
              size="xs"
              maxW="xs"
            >
              +
            </Button>
          </div>
        </Field.Root>
      </div>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Descrição:</Field.Label>
        <Input paddingLeft="0.5rem" placeholder="Descrição do produto..." />
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Ingredientes</Field.Label>
        <div className={styles.linhaIngrediente}>
          <div style={{ flex: 1 }}>
            <SelectComponent>
              <option value="">Ingrediente</option>
              <option value="1">Farinha de Trigo</option>
              <option value="2">Açúcar</option>
              <option value="3">Fermento</option>
            </SelectComponent>
          </div>
          <Input
            paddingLeft="0.5rem"
            placeholder="Qtd"
            className={styles.inputQtdIngrediente}
          />
        </div>
        <Button
          bg="#2E5697"
          color="white"
          size="xs"
          padding="1rem"
          className={styles.botaoAdicionar}
        >
          Adicionar Ingrediente
        </Button>
      </Field.Root>

      <div className={styles.containerBotaoSalvar}>
        <Button
          bg="#2E5697"
          color="white"
          _hover={{ bg: "#1F3D6B" }}
          className={styles.botaoSalvar}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default ProdutoForm;
