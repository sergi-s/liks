import React, { useState } from 'react';
import { Grid, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      {/* Navbar for larger screens */}
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
          item
          sx={{
            alignSelf: 'center',
            alignItems: 'flex-start',
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}
        >
          {/*  */}
          <Link
            to='/about'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            About
          </Link>
          <Link
            to='/products'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Products
          </Link>
          <Link
            to='/logistics'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Logistics
          </Link>
          <Link
            to='/quality'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Quality
          </Link>
          <Link
            to='/facilities'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Facilities
          </Link>
          <Link
            to='/QHSE'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            QHSE
          </Link>
          <Link
            to='/contact'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Contact
          </Link>
        </Grid>
      </Grid>

      {/* Burger button for smaller screens */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          display: { md: 'none' },
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Drawer for smaller screens */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} sx={{ width: 300 }}>
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
                    marginLeft: '10px', // Adjusting margin for better spacing
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



const DrawerItems = () => {
  const menuItems = [
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/logistics', label: 'Logistics' },
    { to: '/quality', label: 'Quality' },
    { to: '/facilities', label: 'Facilities' },
    { to: '/QHSE', label: 'QHSE' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index}>
          <Link
            to={item.to}
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '30px',
              padding: '15px 30px',
              textDecoration: 'none',
              transition: 'background 0.3s, font-size 0.3s',
              borderBottom: '1px solid #ccc',
            }}
          >
            {item.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navbar;
