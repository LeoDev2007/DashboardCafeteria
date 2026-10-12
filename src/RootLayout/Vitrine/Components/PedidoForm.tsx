import { useState } from "react";
import { Field, Input, Button } from "@chakra-ui/react";
import styles from "../Vitrine.module.css";
import SelectComponent from "@/Components/SelectComponent";

interface Produto {
  id: string;
  nomeProduto: string;
  preco: number;
}

interface Props {
  produtosSelecionados?: Produto[];
}

const PedidoForm = ({ produtosSelecionados = [] }: Props) => {
  const [nome, setNome] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const [quantidades, setQuantidades] = useState<Record<string, number>>(() => {
    const inicial: Record<string, number> = {};
    produtosSelecionados.forEach((p) => {
      inicial[p.id] = 1;
    });
    return inicial;
  });

  const alterarQuantidade = (id: string, valor: number) => {
    const atual = quantidades[id] || 1;
    const nova = atual + valor;
    if (nova >= 1) {
      setQuantidades({ ...quantidades, [id]: nova });
    }
  };

  const salvarPedido = () => {
    const dadosFinais = {
      nomeCliente: nome,
      observacoes: observacoes,
      itens: produtosSelecionados.map((p) => ({
        produto_id: p.id,
        quantidade: quantidades[p.id] || 1,
      })),
    };
    console.log(dadosFinais);
  };

  return (
    <div className={styles.formularioContainer}>
      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Nome:</Field.Label>
        <Input
          padding="0.5rem"
          placeholder="Nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Produto(s)</Field.Label>
        <div className={styles.produtosLista}>
          {produtosSelecionados.map((produto) => (
            <div key={produto.id} className={styles.produtoLinha}>
              <div className={styles.produtoInfo}>
                <span>{produto.nomeProduto}</span>
                <span className={styles.produtoPreco}>
                  R$ {produto.preco.toFixed(2)}
                </span>
              </div>
              <div className={styles.incrementadorContainer}>
                <Button
                  bg="#2E5697"
                  color="white"
                  size="xs"
                  padding="1rem"
                  onClick={() => alterarQuantidade(produto.id, -1)}
                >
                  -
                </Button>
                <span className={styles.quantidadeNumero}>
                  {quantidades[produto.id] || 1}
                </span>
                <Button
                  bg="#2E5697"
                  color="white"
                  size="xs"
                  padding="1rem"
                  onClick={() => alterarQuantidade(produto.id, 1)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>
          Forma de Pagamento
        </Field.Label>
        <SelectComponent>
          <option>PIX</option>
          <option>Dinheiro</option>
          <option>Débito</option>
          <option>Crédito</option>
        </SelectComponent>
      </Field.Root>

      <Field.Root>
        <Field.Label className={styles.labelTitulo}>Observações:</Field.Label>
        <Input
          padding="0.5rem"
          placeholder="Alguma observação?"
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
        />
      </Field.Root>

      <Button
        bg="#2E5697"
        color="white"
        _hover={{ bg: "#1F3D6B" }}
        width="full"
        className={styles.botaoSalvar}
        onClick={salvarPedido}
      >
        Salvar Pedido
      </Button>
    </div>
  );
};

export default PedidoForm;
