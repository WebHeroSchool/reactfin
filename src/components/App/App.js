import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.module.css';
import TextFieldItem from '../TextField/TextField';
import DeleteAllComplete from '../DeleteAllComplete/DeleteAllComplete';
import TaskFilter from '../TaskFilter/TaskFilter';

class App extends React.Component {
	render() {
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
		<TaskFilter />
		<TextFieldItem />
		<ItemList items = { items }/>
		<DeleteAllComplete />
		<Footer count = {3} />
  	</div>)};
};

// const App = () => {
// 	const items = [
// 		{	
// 			value: 'Выполнить домашнюю работу',
// 			isDone: true
// 		},
// 		{
// 			value: 'Убраться',
// 			isDone: true
// 		},
// 		{
// 			value: 'Прогуляться по набережной',
// 			isDone: false
// 		}	
// 	];

// 	return (
// 	<div className={styles.wrap}>
// 		<h1 className={styles.title}>Задачи на сегодня</h1>
// 		<TaskFilter />
// 		<TextFieldItem />
// 		<ItemList items = { items }/>
// 		<DeleteAllComplete />
// 		<Footer count = {3} />
//   	</div>);
//   }

export default App;
