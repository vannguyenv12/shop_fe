import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

interface IModalConfirmProps {
  openConfirmModal: boolean;
  handleCloseConfirmModal: () => void;
}

export default function ModalConfirm({
  openConfirmModal,
  handleCloseConfirmModal,
}: IModalConfirmProps) {
  const handleSubmit = () => {};

  return (
    <div>
      <Modal
        open={openConfirmModal}
        onClose={handleCloseConfirmModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ marginBottom: '10px' }}
          >
            Are you sure to delete product:
          </Typography>

          <Button variant='contained' fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
