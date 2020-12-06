import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = () => (
		<IconButton aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>);

export default DeleteButton;