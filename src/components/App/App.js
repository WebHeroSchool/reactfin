import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.module.css';
import TextFieldItem from '../TextField/TextField';
import DeleteAllComplete from '../DeleteAllComplete/DeleteAllComplete';
import TaskFilter from '../TaskFilter/TaskFilter';

class App extends React.Component {
	state = {
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

	OnClickDone = id => {
		const NewItemList = this.state.items.map(item => {
			const NewItem = { ...item };
			if (item.id === id) {
				NewItem.isDone = !item.isDone;
			}
			return NewItem;
		});
		this.setState ({items: NewItemList});
	};

	// onClickFooter = () => this.setState(state => ({count: state.count - 1}));

	render() {
	return (
	<div className={styles.wrap}>
		<h1 className={styles.title}>Задачи на сегодня</h1>
		<TaskFilter />
		<TextFieldItem />
		<ItemList items = { this.state.items } OnClickDone={this.OnClickDone}/>
		<DeleteAllComplete />
		<Footer count = {this.state.count}/>
  	</div>)};
};

export default App;
