import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, OnClickDone }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone

	})
}>
	<Checkbox
        checked={isDone}
		onClick ={() => OnClickDone(isDone)}
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />
	{ value }</span>
	)

	export default Item;