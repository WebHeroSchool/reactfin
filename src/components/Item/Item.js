import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const Item = ({ value, isDone, OnClickDone, id, DeleteSelectedElement }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone

	})
}>
	<Checkbox
        checked={isDone}
		onClick ={() => OnClickDone(id)}
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />
	{ value }
	  	<div className={styles.button}>
	  	<IconButton aria-label="delete"onClick ={() => DeleteSelectedElement(id)}>
          <DeleteIcon fontSize="small" />
        </IconButton></div></span>
	)

Item.defaultProps = {
    isDone: false
  };

Item.propTypes = {
  isDone: PropTypes.bool,
  id: PropTypes.number,
  value: PropTypes.string
};


	export default Item;