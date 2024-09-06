import AddCategoryModal from '../components/AddCategoryModal';
import CategoryListAdmin from '../components/CategoryListAdmin';

function CategoryAdminPage() {
  return (
    <div style={{ marginLeft: '250px' }}>
      <AddCategoryModal />
      <CategoryListAdmin />
    </div>
  );
}

export default CategoryAdminPage;
