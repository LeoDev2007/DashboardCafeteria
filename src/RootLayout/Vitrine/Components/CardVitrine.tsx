import React from "react";
import { Checkbox } from "@chakra-ui/react";
import styles from '../Vitrine.module.css'

type Props = {
  nomeProduto: string
  quantidade: number
  preco: number
  categoria: string
  isSelected?: boolean
  onToggleSelect: () => void
};

const CardVitrine = ({ nomeProduto, quantidade, preco, categoria, isSelected, onToggleSelect }: Props) => {
  return (
    <div className={styles.cardVitrine}>
      <div className={styles.imageCard}>Image</div>
      <div className={styles.titleCheckBox}>
        <h2>{nomeProduto}</h2>
        <Checkbox.Root colorPalette="blue" checked={isSelected} onCheckedChange={onToggleSelect}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </div>
      <div className={styles.info}>
        
        <h3>R$ {preco}</h3>
        <h3>{quantidade} un</h3>
        <h3>Categoria: {categoria}</h3>
      </div>
    </div>
  );
};

export default CardVitrine;
