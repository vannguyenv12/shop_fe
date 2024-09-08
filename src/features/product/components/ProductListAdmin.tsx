import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useProductsQuery from '../hooks/useProductsQuery';
import useCategoriesQuery from '@/features/category/hooks/useCategoriesQuery';
import { Button } from '@mui/material';

interface IProductListAdminProps {
  handleOpenConfirmModal: () => void;
  setSelectedProduct: (product: IProduct) => void;
}

export default function ProductListAdmin({
  handleOpenConfirmModal,
  setSelectedProduct,
}: IProductListAdminProps) {
  const columns: GridColDef<IProduct>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'shortDescription',
      headerName: 'Short Description',
      width: 150,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'main_image',
      headerName: 'Image',
      sortable: false,
      width: 160,
      renderCell(params) {
        return (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/products/${
              params.value
            }`}
            width={50}
            height={50}
          />
        );
      },
    },
    {
      field: 'categoryId',
      headerName: 'Category Name',
      sortable: false,
      width: 160,
      renderCell(params) {
        const categoryId = params.value;
        const category = getCategoryName(categoryId);

        return category ? category.name : '';
      },
    },
    {
      field: 'shopId',
      headerName: 'Shop ID',
      sortable: false,
      width: 50,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 250,
      renderCell(params) {
        const product = params.row;
        const handleDelete = () => {
          setSelectedProduct(product);
          handleOpenConfirmModal();
        };

        return (
          <>
            <Button variant='contained' color='warning' sx={{ marginRight: 1 }}>
              Update
            </Button>
            <Button variant='contained' color='error' onClick={handleDelete}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const { data, isLoading, error } = useProductsQuery();
  const { data: categoriesData } = useCategoriesQuery();

  const getCategoryName = (categoryId: number) => {
    const categories = categoriesData.data;

    return categories.find((cat) => cat.id === categoryId);
  };

  const products = data.data;

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error...</>;

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
