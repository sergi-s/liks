import React, { useState } from 'react';
import { Grid, IconButton, Drawer, List, ListItem, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DrawerItems from './Drawer';

export const menuItems = [
  { to: '/about', label: 'About' },
  {
    label: 'Products', subMenu: [
      { to: '/drillingAdditives', label: 'Drilling Additives' },
      { to: '/industrialChemicals', label: 'Industrial Chemicals' },
      { to: '/agroChemicals', label: 'Agro Chemicals' },
    ]
  },
  { to: '/logistics', label: 'Logistics' },
  { to: '/quality', label: 'Quality' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/QHSE', label: 'QHSE' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        sx={{
          height: '72.34px',
          borderRadius: 80,
          border: '2px solid rgba(237, 238, 241, 0.36)',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          marginTop: '240px',
          display: { xs: 'none', md: 'flex' }

        }}
      >
        <LinkContainer to={'/'}>
          <Grid
            item
            md={12}
            sx={{
              display: 'flex',
              marginLeft: '41.37px',
              cursor: 'pointer',
              marginRight: { xs: 'none', md: '150px' }
            }}
          >
            <img
              alt=""
              src={Logo}
              style={{
                width: '53.448px',
                height: '40px',
              }}
            />
            <div
              style={{
                color: '#F8B232',
                fontFamily:
                  'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '47.414px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: '43.103px',
              }}
            >
              Liks
            </div>
          </Grid>
        </LinkContainer>
        <Grid
          container
          columnSpacing={3}
          item
          sx={{
            paddingRight: '2rem',
            alignSelf: 'center',
            alignItems: 'flex-start',
            maxWidth: '100%',
            flexWrap: 'nowrap',
          }}
        >
          {menuItems.map((menuItem, index) => (
            <Grid item key={index}>
              {menuItem.subMenu ? (
                <>
                  <Link
                    aria-controls="dropdown-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#000',
                      fontFamily:
                        'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                      fontWeight: 600,
                      fontSize: '13px',
                      lineHeight: '20px',
                      textDecoration: 'none',
                    }}
                  >
                    {menuItem.label}
                    {anchorEl ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
                  </Link>
                  <ProductsDropDown anchorEl={anchorEl} handleClose={handleClose} products={menuItem.subMenu} />
                </>
              ) : (
                <Link
                  to={menuItem.to}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#000',
                    alignSelf: 'start',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: '20px',
                    textDecoration: 'none',
                  }}
                >
                  {menuItem.label}
                </Link>
              )}
            </Grid>
          ))}
        </Grid>

      </Grid>

      <IconButton
        onClick={toggleDrawer}
        sx={{
          display: { md: 'none' },
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '10px',
          background: '#888484'
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem>
            <LinkContainer to={'/'}>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: 'flex',
                  marginLeft: '20px',
                  cursor: 'pointer',
                  borderBottom: '2px solid #F8B232',
                  paddingBottom: '10px',
                  width: '225px'
                }}
              >
                <img
                  alt=""
                  src={Logo}
                  style={{
                    width: '53.448px',
                    height: '40px',
                  }}
                />
                <div
                  style={{
                    color: '#F8B232',
                    fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '30px',
                    marginLeft: '10px',
                  }}
                >
                  Liks
                </div>
              </Grid>
            </LinkContainer>
          </ListItem>
          <DrawerItems />
        </List>
      </Drawer>
    </Grid>
  );
}




export const ProductsDropDown = ({ anchorEl, handleClose, products }) => {
  return <>
    <Menu
      id="dropdown-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{ sx: { borderRadius: '20px' } }}
    >
      {products.map(({ to, label }) => (
        <MenuItem onClick={handleClose} sx={{
          justifyContent: 'start',
          color: '#000',
          alignSelf: 'start',
          fontFamily:
            'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '20px',
          textDecoration: 'none',
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            '&:visited': { color: 'inherit' },
          },
        }}>
          <Link to={to}> {label}</Link>
        </MenuItem>
      ))}
    </Menu>
  </>
}

export default Navbar;
