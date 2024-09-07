import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useProductsQuery from '../hooks/useProductsQuery';

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
  },
  {
    field: 'categoryId',
    headerName: 'Category ID',
    sortable: false,
    width: 160,
  },
  {
    field: 'shopId',
    headerName: 'Shop ID',
    sortable: false,
    width: 160,
  },
];

export default function ProductListAdmin() {
  const { data, isLoading, error } = useProductsQuery();

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
