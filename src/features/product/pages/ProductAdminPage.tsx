import { useState } from 'react';
import ProductListAdmin from '../components/ProductListAdmin';
import ProductModal from '../components/ProductModal';
import ModalConfirm from '../components/ModalConfirm';

function ProductAdminPage() {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleOpenConfirmModal = () => setOpenConfirmModal(true);
  const handleCloseConfirmModal = () => setOpenConfirmModal(false);

  return (
    <div style={{ marginLeft: '250px' }}>
      <ProductModal />
      <ProductListAdmin handleOpenConfirmModal={handleOpenConfirmModal} />
      <ModalConfirm
        openConfirmModal={openConfirmModal}
        handleCloseConfirmModal={handleCloseConfirmModal}
      />
    </div>
  );
}

export default ProductAdminPage;
