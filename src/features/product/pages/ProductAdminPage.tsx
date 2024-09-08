import { useState } from 'react';
import ProductListAdmin from '../components/ProductListAdmin';
import ProductModal from '../components/ProductModal';
import ModalConfirm from '@/components/ModalConfirm';
import useProductDelete from '../hooks/useProductDelete';

function ProductAdminPage() {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleOpenConfirmModal = () => setOpenConfirmModal(true);
  const handleCloseConfirmModal = () => setOpenConfirmModal(false);

  const [selectedProduct, setSelectedProduct] = useState<
    IProduct | undefined
  >();

  return (
    <div style={{ marginLeft: '250px' }}>
      <ProductModal />
      <ProductListAdmin
        handleOpenConfirmModal={handleOpenConfirmModal}
        setSelectedProduct={setSelectedProduct}
      />

      <ModalConfirm
        openConfirmModal={openConfirmModal}
        handleCloseConfirmModal={handleCloseConfirmModal}
        useDelete={useProductDelete}
        selectedItem={selectedProduct}
        itemName='Product'
        getItemName={() => (selectedProduct ? selectedProduct.name : '')}
      />
    </div>
  );
}

export default ProductAdminPage;
