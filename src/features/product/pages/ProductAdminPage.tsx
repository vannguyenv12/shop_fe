import ProductListAdmin from '../components/ProductListAdmin';
import ProductModal from '../components/ProductModal';

function ProductAdminPage() {
  return (
    <div style={{ marginLeft: '250px' }}>
      <ProductModal />
      <ProductListAdmin />
    </div>
  );
}

export default ProductAdminPage;
