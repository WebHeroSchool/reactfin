import React from 'react';
import Item from '../Item/Item';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './ItemList.module.css';

const ItemList = ({id, items, OnClickDone}) => (
  <ul className={styles.list}>
  {items.map(item =><li key = {item.value}>
  	<Item 
  	value = { item.value } 
  	isDone = { item.isDone } 
  	id = {item.id }
  	OnClickDone = {OnClickDone} />
  	<div className={styles.button}><DeleteButton /></div></li>)}
  </ul>
)

export default ItemList;