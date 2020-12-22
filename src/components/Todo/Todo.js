import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import TextFieldItem from '../TextField/TextField';
import DeleteAllComplete from '../DeleteAllComplete/DeleteAllComplete';
import TaskFilter from '../TaskFilter/TaskFilter';
import PropTypes from 'prop-types';

const Todo = () => {
	const initalState = {
		items: [
			{	
				value: 'Выполнить домашнюю работу',
				isDone: true,
				id: 1
			},
			{
				value: 'Убраться',
				isDone: true,
				id: 2
			},
			{
				value: 'Прогуляться по набережной',
				isDone: false,
				id: 3
			}	
		],
		count: 3
	};

	const [items, setItems] = useState(initalState.items);
	const [count, setCount] = useState(initalState.count);

	const OnClickDone = id => {
		const NewItemList = items.map(item => {
			const NewItem = { ...item };
			if (item.id === id) {
				NewItem.isDone = !item.isDone;
			}
			return NewItem;
		});
		setItems(NewItemList)
	};

	const DeleteSelectedElement = id => {
		const deleteItem = items.filter(item => item.id !==id);
		setItems(deleteItem)
		setCount(count - 1)
	};

	const OnClickAdd = value =>{
		 setItems(
		 	[...items,
		 		{
		 			value,
		 			isDone: false,
		 			id: count + 1
		 		}]);
		 setCount(count + 1)
	}

	return (<div><h1 className={styles.title}>Задачи на сегодня</h1>
		<TaskFilter />
		<TextFieldItem  OnClickAdd={OnClickAdd}/>
		<ItemList items = { items } OnClickDone={OnClickDone} DeleteSelectedElement={DeleteSelectedElement}/>
		<DeleteAllComplete />
		<Footer /></div>)
};

Todo.propTypes = {
  isDone: PropTypes.bool,
  id: PropTypes.number,
  value: PropTypes.string

};

export default Todo;