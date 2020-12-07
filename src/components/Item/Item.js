import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import CheckboxItem from '../CheckboxItem/CheckboxItem';

const Item = ({ value, isDone, OnClickDone }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone

	})
}>
	<CheckboxItem 
		checked={isDone}
		onClick ={() => OnClickDone(isDone)}
	/>
	{ value }</span>
	)

	export default Item;