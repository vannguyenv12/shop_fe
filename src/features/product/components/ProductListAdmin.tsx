import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useProductsQuery from '../hooks/useProductsQuery';
import useCategoriesQuery from '@/features/category/hooks/useCategoriesQuery';

export default function ProductListAdmin() {
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
      width: 160,
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
