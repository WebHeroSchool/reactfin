import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({id, items, OnClickDone, DeleteSelectedElement}) => (
  <ul className={styles.list}>
  {items.map(item =><li key = {item.value}>
  	<Item 
  	value = { item.value } 
  	isDone = { item.isDone } 
  	id = { item.id }
  	OnClickDone = {OnClickDone}
  	DeleteSelectedElement = {DeleteSelectedElement} />
  	</li>)}
  </ul>
)

export default ItemList;