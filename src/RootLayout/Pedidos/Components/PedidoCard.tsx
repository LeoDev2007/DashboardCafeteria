import { useState } from "react";
import { Field, Button } from "@chakra-ui/react";
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import styles from "../Pedido.module.css";
import SelectComponent from "../../../Components/SelectComponent";
import { useModalStore } from "@/Zustand/useModalStore";
import PedidoDetalhes from "@/Components/PedidoDetalhes";
import EditarPedido from "./EditarPedido";

type Props = {
  nome: string;
  total: number;
  status: string;
};

const PedidoCard = ({ nome, total, status }: Props) => {
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value);
    setIsEditingStatus(false);
  };

  const getStatusClass = (statusText: string) => {
    switch (statusText) {
      case "Pendente":
        return styles.statusPendente;
      case "Concluído":
        return styles.statusConcluido;
      case "Cancelado":
        return styles.statusCancelado;
      default:
        return "";
    }
  };

  const onOpen = useModalStore((state) => state.onOpen);

  return (
    <div
      className={styles.pedidoCard}
      onClick={() => onOpen("Pedido X", <PedidoDetalhes />)}
    >
      <div className={styles.pedidoCardInfo}>
        <Field.Root>
          <Field.Label>Nome:</Field.Label>
          <h2>{nome}</h2>
        </Field.Root>
        <Field.Root>
          <Field.Label>Total:</Field.Label>
          <h2>R$ {total.toFixed(2)}</h2>
        </Field.Root>

        <Field.Root>
          <Field.Label>Status:</Field.Label>
          {isEditingStatus ? (
            <SelectComponent
              value={currentStatus}
              onChange={handleStatusChange}
              onBlur={() => setIsEditingStatus(false)}
            >
              <option value="Pendente">Pendente</option>
              <option value="Concluído">Concluído</option>
              <option value="Cancelado">Cancelado</option>
            </SelectComponent>
          ) : (
            <h2
              onClick={() => setIsEditingStatus(true)}
              style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              className={getStatusClass(currentStatus)}
            >
              {currentStatus} <span style={{ fontSize: "10px" }}>▼</span>
            </h2>
          )}
        </Field.Root>
      </div>
      <div className={styles.pedidoCardAcoes}>
        <Button
          colorPalette="black"
          variant="solid"
          onClick={(e) => {
            e.stopPropagation();
            onOpen("Editar Pedido", <EditarPedido />);
          }}
        >
          <GoPencil />
        </Button>
        <Button colorPalette="red" variant="solid">
          <CiTrash />
        </Button>
      </div>
    </div>
  );
};

export default PedidoCard;
