import React from 'react';
import Item from '../Item/Item';
import CheckboxItem from '../CheckboxItem/CheckboxItem';
import styles from './ItemList.module.css';

const ItemList = ({items}) => (
  <li className={styles.list}>
  {items.map(item =><li key = {item.value}>{<CheckboxItem />}<Item value = { item.value } isDone = { item.isDone }/></li>)}
  </li>
)

export default ItemList;