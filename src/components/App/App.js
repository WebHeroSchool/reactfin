import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'

const Todo1 = 'Выполнить домашнюю работу';

const App = () => (<div>
  <h1>Задачи на сегодня</h1>
  <ItemList Todo1 = { Todo1 }/>
  <Footer count = {3} />
  </div>);

export default App;
