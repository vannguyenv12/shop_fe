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

const sidebarList = [
  {
    name: 'Category',
    icon: <CategoryIcon />,
  },
  {
    name: 'Product',
    icon: <InventoryIcon />,
  },
  {
    name: 'Order',
    icon: <ShoppingCartIcon />,
  },
  {
    name: 'User',
    icon: <PersonIcon />,
  },
];

export default function Sidebar() {
  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {sidebarList.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
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
