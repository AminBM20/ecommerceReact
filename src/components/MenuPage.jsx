
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { Nav } from 'react-bootstrap';
import '../MenuPage.css';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const MenuPage = () => {
  const {cartCount}=useShoppingCart()
  return (
    <Nav className="justify-content-center flex-grow-1">
      <Menu
        menuButton={
          <MenuButton className="custom-menu-button">Menu</MenuButton>
        }
        transition
      >
        <MenuItem
          className="custom-menu-item"
          href="http://127.0.0.1:3000/articles"
        >
          Articles
        </MenuItem>
        <MenuItem
          className="custom-menu-item"
          href="http://127.0.0.1:3000/categories"
        >
          Categories
        </MenuItem>
        <MenuItem
          className="custom-menu-item"
          href="http://127.0.0.1:3000/scategories"
        >
          Sous Categories
        </MenuItem>
        <MenuItem
          className="custom-menu-item"
          href="http://127.0.0.1:3000/client"
        >
          Client
        </MenuItem>
        <MenuItem
          className="custom-menu-item"
          href="http://127.0.0.1:3000/cart"
        >
          <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>&nbsp;&nbsp;&nbsp;Panier
        </MenuItem>
        

      </Menu>
    </Nav>
  );
};

export default MenuPage;
