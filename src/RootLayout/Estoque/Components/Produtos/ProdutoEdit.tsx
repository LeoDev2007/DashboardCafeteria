import { Field, Input, Button } from "@chakra-ui/react";
import SelectComponent from "@/Components/SelectComponent";
import styles from "../../Estoque.module.css";

const ProdutoEdit = () => {
  return (
    <div className={styles.formularioContainer}>
      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Nome:</Field.Label>
        <Input
          paddingLeft="0.5rem"
          placeholder="Nome do produto..."
          defaultValue="Pão Francês Quinhentos"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Preço</Field.Label>
        <Input
          paddingLeft="0.5rem"
          placeholder="R$ 0,00"
          defaultValue="0.80"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Descrição:</Field.Label>
        <Input
          paddingLeft="0.5rem"
          placeholder="Descrição do produto..."
          defaultValue="Pão francês tradicional de 50g"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Ingredientes</Field.Label>

        <div className={styles.linhaIngrediente}>
          <div style={{ flex: 1 }}>
            <SelectComponent defaultValue="1">
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
            defaultValue="50"
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
          Atualizar
        </Button>
      </div>
    </div>
  );
};

export default ProdutoEdit;