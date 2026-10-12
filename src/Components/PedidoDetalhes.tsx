import React from "react";

type Props = {};

const PedidoDetalhes = (props: Props) => {
  return (
    <div style={{display: "flex", flexDirection:"column", gap: 10}}>
      <div style={{borderBottom: "2px solid #000", padding: '0.5rem'}}>
        <h2 style={{fontSize: '1rem'}}>
          <span style={{color:"#2E5697"}}>Nome:</span> Joao
        </h2>
      </div>
      <div style={{borderBottom: "2px solid #000", padding: '0.5rem'}}>
        <h2 style={{fontSize: '1rem'}}>
          <span style={{color:"#2E5697"}}>Produto(s):</span> Produto X
        </h2>
      </div>
      <div style={{borderBottom: "2px solid #000", padding: '0.5rem'}}>
        <h2 style={{fontSize: '1rem'}}>
          <span style={{color:"#2E5697"}}>Total:</span> R$ 14.00
        </h2>
      </div>
      <div style={{borderBottom: "2px solid #000", padding: '0.5rem'}}>
        <h2 style={{fontSize: '1rem'}}>
          <span style={{color:"#2E5697"}}>Quantidade:</span> 10
        </h2>
      </div>
      <div style={{borderBottom: "2px solid #000", padding: '0.5rem'}}>
        <h2 style={{fontSize: '1rem'}}>
          <span style={{color:"#2E5697"}}>Forma de Pagamento:</span> PIX
        </h2>
      </div>
      <div style={{borderBottom: "2px solid #000", padding: '0.5rem'}}>
        <h2 style={{fontSize: '1rem', color:"#2E5697"}}>Observações:</h2>
        <p style={{fontSize: '1rem', fontWeight: "300"}}>skskskksskskkskskksksks</p>
      </div>
    </div>
  );
};

export default PedidoDetalhes;
