import { useState } from 'react';
import AddCategoryModal from '../components/AddCategoryModal';
import CategoryListAdmin from '../components/CategoryListAdmin';
import ModalConfirm from '../components/ModalConfirm';

function CategoryAdminPage() {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const handleOpenConfirmModal = () => setOpenConfirmModal(true);
  const handleCloseConfirmModal = () => setOpenConfirmModal(false);

  const [selectedCategory, setSelectedCategory] = useState<ICategory>({
    id: 1,
    name: '',
    icon: '',
    status: true,
  });

  return (
    <div style={{ marginLeft: '250px' }}>
      <AddCategoryModal />
      <CategoryListAdmin
        handleOpenConfirmModal={handleOpenConfirmModal}
        setSelectedCategory={setSelectedCategory}
      />
      <ModalConfirm
        openConfirmModal={openConfirmModal}
        handleOpenConfirmModal={handleOpenConfirmModal}
        handleCloseConfirmModal={handleCloseConfirmModal}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default CategoryAdminPage;
