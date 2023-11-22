import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { menuItems } from ".";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function DrawerItems() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = () => {
        setAnchorEl(!anchorEl)
    };

    return <>
        {menuItems.flatMap((item, index) => (item.subMenu
            ?
            <>
                <ListItem key={index}>
                    <Link
                        onClick={handleClick}
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
                            borderBottom: '1px solid #ccc'
                        }}
                    >
                        Products
                        {anchorEl ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
                    </Link>
                </ListItem>
                {anchorEl ? item.subMenu.map((e, i) => renderMenuItem(e, i, true)) : ''}
            </>
            : renderMenuItem(item, index)))}
    </>
};

const renderMenuItem = (item, index, isSubItem = false) => (
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
                marginLeft: isSubItem ? '25px' : '0',
            }}
        >
            {item.label}
        </Link>
    </ListItem>
);