import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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

export default function ProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   Image
  const [selectedImage, setSelectedImage] = React.useState<string | null>('');

  //   Select
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      setSelectedImage(null);
      return;
    }

    const objectUrl = URL.createObjectURL(event.target.files[0]); // blob

    setSelectedImage(objectUrl);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Button variant='contained' onClick={handleOpen}>
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ marginBottom: 2 }}
          >
            Product
          </Typography>

          <Grid2 container columnSpacing={2}>
            <Grid2 size={6}>
              <TextField
                label='Name'
                variant='outlined'
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label='Long Description'
                variant='outlined'
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid2>
          </Grid2>

          <Grid2 container columnSpacing={2}>
            <Grid2 size={6}>
              <TextField
                label='Short Description'
                variant='outlined'
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label='Quantity'
                variant='outlined'
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid2>
          </Grid2>

          <Grid2 container columnSpacing={2}>
            <Grid2 size={6}>
              <TextField
                label='Price'
                variant='outlined'
                fullWidth
                sx={{ marginBottom: 2 }}
              />
            </Grid2>
            <Grid2 size={6}>
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  label='Age'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>

          <Button
            component='label'
            role={undefined}
            variant='contained'
            color='warning'
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ marginBottom: 2 }}
          >
            Upload files
            <VisuallyHiddenInput
              type='file'
              onChange={handleImagePreview}
              multiple
            />
          </Button>

          <div>
            {' '}
            {selectedImage ? (
              <img
                src={selectedImage}
                style={{ width: '150px', height: '150px' }}
              />
            ) : null}{' '}
          </div>

          <Button type='submit' variant='contained' fullWidth>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
