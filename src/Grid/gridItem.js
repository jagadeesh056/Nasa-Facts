import React from 'react';
import styles from './gridItem.module.css'
import Badge from './Badge'
import Explorer from './Explorer'

const GridItem = (props) => {
  return (
    <div className={styles.card} onClick={() => props.updateClicked(props.facts.id)}>
      {props.facts.clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{props.facts.title}</h2>
      <article className={styles.fact}>{props.facts.fact}</article>
    </div>
  )
}

export default GridItem
