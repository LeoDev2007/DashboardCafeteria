import SelectComponent from '@/Components/SelectComponent'
import styles from './Pedido.module.css'
import PedidoCard from './Components/PedidoCard'


const pedidosIniciais = [
  { id: 1, nome: "Joao", total: 5.00, status: "Pendente" },
  { id: 2, nome: "Maria", total: 12.50, status: "Concluído" },
  { id: 3, nome: "Carlos", total: 8.00, status: "Cancelado" }
];

const Pedidos = () => {
  return (
    <div className={styles.pedidosContainer}>
      <div className={styles.pedidosMiniContainer}>
        <h2>Pedidos</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Ordenar por</span>
          <SelectComponent>
            <option value="todos">Todos</option>
            <option value="Pendente">Pendente</option>
            <option value="Concluído">Concluído</option>
            <option value="Cancelado">Cancelado</option>
          </SelectComponent>
        </div>
      </div>
      
      <div className={styles.pedidosLista}>
      
        {pedidosIniciais.map((pedido) => (
          <PedidoCard 
            key={pedido.id}
            nome={pedido.nome} 
            total={pedido.total} 
            status={pedido.status} 
          />
        ))}
      </div>
    </div>
  )
}

export default Pedidos
