import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
// import styles from './CheckboxItem.module.css';

const CheckboxItem = () => (
	<Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />);

export default CheckboxItem;