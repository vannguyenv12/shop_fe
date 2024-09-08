import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UseMutationResult } from '@tanstack/react-query';

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

interface IModalConfirmProps<T> {
  openConfirmModal: boolean;
  handleCloseConfirmModal: () => void;
  selectedItem: T | undefined;
  useDelete: (
    cb: () => void
  ) => UseMutationResult<IApiResponse<undefined>, Error, number, unknown>;
  itemName: string;
  getItemName: () => string;
}
export default function ModalConfirm<T extends { id: number }>({
  openConfirmModal,
  handleCloseConfirmModal,
  useDelete,
  selectedItem,
  itemName,
  getItemName,
}: IModalConfirmProps<T>) {
  const deleteMutation = useDelete(handleCloseConfirmModal);

  const handleSubmit = () => {
    console.log('delete', selectedItem);
    if (selectedItem) {
      deleteMutation.mutate(selectedItem.id);
    }
  };

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
            Are you sure to delete {itemName}: {getItemName()}
          </Typography>

          <Button variant='contained' fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
