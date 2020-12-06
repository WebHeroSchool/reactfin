import React from 'react';
import Item from '../Item/Item';
import CheckboxItem from '../CheckboxItem/CheckboxItem';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './ItemList.module.css';

const ItemList = ({items}) => (
  <ul className={styles.list}>
  {items.map(item =><li key = {item.value}>{<CheckboxItem />}<Item value = { item.value } isDone = { item.isDone }/><div className={styles.button}><DeleteButton /></div></li>)}
  </ul>
)

export default ItemList;