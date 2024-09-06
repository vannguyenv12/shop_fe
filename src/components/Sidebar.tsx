import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const sidebarList = [
  {
    name: 'Category',
    icon: <CategoryIcon />,
    link: '/admin/category',
  },
  {
    name: 'Product',
    icon: <InventoryIcon />,
    link: '/admin/product',
  },
  {
    name: 'Order',
    icon: <ShoppingCartIcon />,
    link: '/admin/order',
  },
  {
    name: 'User',
    icon: <PersonIcon />,
    link: '/admin/user',
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    navigate(url);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {sidebarList.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={(e) => handleClick(e, item.link)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        open={true}
        hideBackdrop
        variant='persistent'
        sx={{ '& .MuiDrawer-paper': { marginTop: '64px' } }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
