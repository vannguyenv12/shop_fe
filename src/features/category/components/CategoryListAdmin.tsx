import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useCategoriesQuery from '../hooks/useCategoriesQuery';
import categoryIcons from '@/contants/category-icon';
import { Button } from '@mui/material';

interface ICategoryAdminListProps {
  handleOpenConfirmModal: () => void;
  handleOpenAddOrUpdateModal: () => void;
  setSelectedCategory: (category: ICategory) => void;
}

export default function CategoryAdminList({
  handleOpenConfirmModal,
  handleOpenAddOrUpdateModal,
  setSelectedCategory,
}: ICategoryAdminListProps) {
  const { data: category, isLoading, error } = useCategoriesQuery();
  const { data } = category;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const handleDelete = (category: ICategory) => {
    handleOpenConfirmModal();
    setSelectedCategory(category);
  };

  const handleUpdate = (category: ICategory) => {
    setSelectedCategory(category);
    handleOpenAddOrUpdateModal();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Icon</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{categoryIcons[row.icon]}</TableCell>
              <TableCell align='right'>
                <Button
                  variant='contained'
                  color='warning'
                  sx={{
                    marginRight: '10px',
                  }}
                  onClick={() => handleUpdate(row)}
                >
                  Update
                </Button>
                <Button
                  variant='contained'
                  color='error'
                  onClick={() => handleDelete(row)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
