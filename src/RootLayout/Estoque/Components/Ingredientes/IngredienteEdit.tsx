import { Field, Input, Button } from "@chakra-ui/react";
import SelectComponent from "../../../../Components/SelectComponent";
import styles from "../../Estoque.module.css";

const IngredienteEdit = () => {
  return (
    <div className={styles.formularioContainer}>
      <Field.Root>
        <Field.Label className={styles.labelTitulo}>
          Nome do Ingrediente:
        </Field.Label>

        <Input
          paddingLeft="0.5rem"
          placeholder="Ex: Farinha, Açúcar..."
          defaultValue="Açúcar"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>
          Unidade de Medida
        </Field.Label>

        <SelectComponent defaultValue="kg">
          <option value="">Selecione...</option>
          <option value="kg">kg (Quilograma)</option>
          <option value="g">g (Gramas)</option>
          <option value="L">L (Litros)</option>
          <option value="ml">ml (Mililitros)</option>
          <option value="un">un (Unidades)</option>
        </SelectComponent>
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

export default IngredienteEdit;