import React from 'react';
import styles from './App.module.css';
import Todo from '../Todo/Todo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const App = () => {
	return (<Router>
				<div className={styles.wrap}>
					<Card className={styles.card}>
					<MenuList className={styles.menu}>
			          <Link to ='/' className={styles.link}><MenuItem className={styles.menuItem} >Обо мне</MenuItem></Link>
			          <Link to ='/todo'className={styles.link}><MenuItem className={styles.menuItem} >Задачи</MenuItem></Link>
			          <Link to ='/contacts'className={styles.link}><MenuItem className={styles.menuItem} >Контакты</MenuItem></Link>
			        </MenuList>
			    	</Card>
					<Card className={styles.inner}>
						<Route path ='/' exact component={About}/>
						<Route path ='/todo' component={Todo}/>
						<Route path ='/contacts' component={Contacts}/>
					</Card>
				</div>
				</Router>)
};

export default App;
