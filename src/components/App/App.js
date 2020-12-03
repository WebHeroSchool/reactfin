import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.module.css';

const Todo1 = 'Выполнить домашнюю работу';

const App = () => {
	const items = [
		{	
			value: 'Выполнить домашнюю работу',
			isDone: true
		},
		{
			value: 'Убраться',
			isDone: true
		},
		{
			value: 'Прогуляться по набережной',
			isDone: false
		}	
	];

	return (
	<div className={styles.wrap}>
		<h1 className={styles.title}>Задачи на сегодня</h1>
		<ItemList items = { items }/>
		<Footer count = {3} />
  	</div>);
  }

export default App;
