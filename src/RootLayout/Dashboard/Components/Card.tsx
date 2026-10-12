import React from 'react'
import styles from '../Dashboard.module.css'

type Props = {
    children: React.ReactNode,
    style?: React.CSSProperties;
}

const Card = ({children, style}: Props) => {
  return (
    <div className={styles.card} style={style}>
        {children}
    </div>
  )
}

export default Card