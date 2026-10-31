import SelectComponent from "@/Components/SelectComponent";
import Card from "./Components/Card";
import styles from "./Dashboard.module.css";
import { useModalStore } from "../../Zustand/useModalStore";
import PedidoDetalhes from "@/Components/PedidoDetalhes";

const Dashboard = () => {
  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <div className={styles.dashboardContainer}>

    
      <div className={styles.miniContainer_1}>

        <div className={styles.faturamento_cardFluxo}>

          
          <div className={styles.faturamento}>
            <h2>Faturamento</h2>

            <SelectComponent>
              <option value="1">Hoje</option>
              <option value="2">Último mês</option>
            </SelectComponent>

            <h1>R$ 0,00</h1>

            <p>Meta: R$ 500,00</p>
          </div>

         
          <Card>
            <h2>Fluxo de Caixa</h2>

            <div className={styles.fluxo}>
              <h3>Pix: R$ 0,00</h3>
              <h3>Cartão Crédito/Débito: R$ 0,00</h3>
              <h3>Dinheiro: R$ 0,00</h3>
            </div>
          </Card>

        </div>

        
        <div className={styles.statics}>

          <Card>
            <h2>Quantidade de Produtos:</h2>
            <h1>66</h1>
          </Card>

          <Card>
            <h2>Pedidos feitos hoje:</h2>
            <h1>10</h1>
          </Card>

        </div>

      </div>

      
      <div className={styles.miniContainer_2}>

        
        <Card>
          <h2>Pedidos Pendentes</h2>

          <div className={styles.itemContainer}>

            <div
              className={styles.item}
              onClick={() =>
                onOpen("Pedido X", <PedidoDetalhes />)
              }
            >
              <h3>João</h3>
              <h3>Produto X</h3>
              <h3>R$ 7,00</h3>
              <h3>
                Status: <span>Pendente</span>
              </h3>
            </div>

            <div className={styles.item}>
              <h3>João</h3>
              <h3>Produto X</h3>
              <h3>R$ 7,00</h3>
              <h3>
                Status: <span>Pendente</span>
              </h3>
            </div>

            <div className={styles.item}>
              <h3>João</h3>
              <h3>Produto X</h3>
              <h3>R$ 7,00</h3>
              <h3>
                Status: <span>Pendente</span>
              </h3>
            </div>

          </div>
        </Card>

        {/* ESTOQUE CRÍTICO */}
        <Card>
          <h2>Estoque Crítico</h2>

          <div className={styles.itemContainer}>

            <div className={styles.item}>
              <h3>Leite</h3>
              <h3>Qtd: 2L</h3>
              <h3>
                Situação: <span>Baixo</span>
              </h3>
            </div>

            <div className={styles.item}>
              <h3>Leite</h3>
              <h3>Qtd: 2L</h3>
              <h3>
                Situação: <span>Baixo</span>
              </h3>
            </div>

            <div className={styles.item}>
              <h3>Leite</h3>
              <h3>Qtd: 2L</h3>
              <h3>
                Situação: <span>Baixo</span>
              </h3>
            </div>

          </div>
        </Card>

      </div>

    </div>
  );
};

export default Dashboard;