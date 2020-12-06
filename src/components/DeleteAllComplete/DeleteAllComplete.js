import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteAllComplete = () => (
	<Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Удалить выполненное
      </Button>
	)

	export default DeleteAllComplete;