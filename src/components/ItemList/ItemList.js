import React from 'react';
import Item from '../Item/Item';
import CheckboxItem from '../CheckboxItem/CheckboxItem';

const ItemList = ({items}) => (
  <ol>
  {items.map(item =><li key = {item.value}>{<CheckboxItem />}<Item value = { item.value } isDone = { item.isDone }/></li>)}
  </ol>
)

export default ItemList;