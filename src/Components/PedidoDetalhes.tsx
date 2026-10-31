import styles from "./Modal.module.css";

const PedidoDetalhes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoRow}>
        <span className={styles.label}>Nome</span>
        <span className={styles.value}>João</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.label}>Produto(s)</span>
        <span className={styles.value}>Produto X</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.label}>Total</span>
        <span className={styles.total}>R$ 14,00</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.label}>Quantidade</span>
        <span className={styles.value}>10</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.label}>Forma de Pagamento</span>
        <span className={styles.value}>Pix</span>
      </div>

      <div className={styles.observacoes}>
        <span className={styles.label}>Observações</span>
        <div className={styles.observacoesTexto}>
          skskskksskskkskskksksks
        </div>
      </div>
    </div>
  );
};

export default PedidoDetalhes;