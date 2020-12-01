import React from 'react';
import Item from '../Item/Item';

const ItemList = ({Todo1}) => (
  <ol>
  <li><Item Todo1 = { Todo1 }/></li>
  <li><Item Todo1 = { 'Убраться' }/></li>
  <li><Item Todo1 = { 'Прогуляться по набережной' }/></li>
  </ol>
)

export default ItemList;