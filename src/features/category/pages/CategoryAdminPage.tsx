import { useState } from 'react';
import AddCategoryModal from '../components/AddCategoryModal';
import CategoryListAdmin from '../components/CategoryListAdmin';
import ModalConfirm from '../components/ModalConfirm';

function CategoryAdminPage() {
  // Delete
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const handleOpenConfirmModal = () => setOpenConfirmModal(true);
  const handleCloseConfirmModal = () => setOpenConfirmModal(false);

  // Add Or Update
  const [openAddOrUpdateModal, setOpenAddOrUpdateModal] = useState(false);
  const handleOpenAddOrUpdateModal = () => setOpenAddOrUpdateModal(true);

  const [selectedCategory, setSelectedCategory] = useState<ICategory>();

  return (
    <div style={{ marginLeft: '250px' }}>
      <AddCategoryModal
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        open={openAddOrUpdateModal}
        setOpenAddOrUpdateModal={setOpenAddOrUpdateModal}
      />
      <CategoryListAdmin
        handleOpenConfirmModal={handleOpenConfirmModal}
        handleOpenAddOrUpdateModal={handleOpenAddOrUpdateModal}
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
