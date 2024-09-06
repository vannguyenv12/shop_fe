import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useCategoryMutation from '../hooks/useCategoryMutation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { categoryCreateSchema } from '../schemas/CategorySchema';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IInputFields {
  name: string;
  icon: string;
}

export default function AddCategoryModal() {
  const categoryMutation = useCategoryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputFields>({
    resolver: yupResolver(categoryCreateSchema),
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<IInputFields> = (data) => {
    console.log('submit data', data);

    categoryMutation.mutate(data);
  };

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>
        Add Category
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ marginBottom: '10px' }}
          >
            Category
          </Typography>
          <TextField
            label='Name'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '10px' }}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            {...register('name')}
          />
          <TextField
            label='Icon'
            variant='outlined'
            fullWidth
            sx={{ marginBottom: '10px' }}
            error={Boolean(errors.icon)}
            helperText={errors.icon?.message}
            {...register('icon')}
          />
          <Button type='submit' variant='contained' fullWidth>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
