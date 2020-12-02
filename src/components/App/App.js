import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import './App.css';

const Todo1 = 'Выполнить домашнюю работу';

const App = () => {
	const items = [
		{	
			value: 'Выполнить домашнюю работу'
		},
		{
			value: 'Убраться'
		},
		{
			value: 'Прогуляться по набережной'
		}	
	];

	return (
	<div className='wrap'>
		<h1 className='wrap__title'>Задачи на сегодня</h1>
		<ItemList items = { items }/>
		<Footer count = {3} />
  	</div>);
  }

export default App;
