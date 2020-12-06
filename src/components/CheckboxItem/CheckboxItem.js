import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxItem = () => (
	<Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />);

export default CheckboxItem;