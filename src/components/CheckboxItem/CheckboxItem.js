import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxItem = () => (<div>
	<Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
    />
</div>);

export default CheckboxItem;