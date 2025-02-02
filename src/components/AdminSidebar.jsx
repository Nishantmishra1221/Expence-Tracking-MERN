import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { BarChart, People, ExpandLess, ExpandMore } from '@mui/icons-material';

function Sidebar({ activeTab, setActiveTab }) {
    const [open, setOpen] = useState(true); // Sidebar expanded by default

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <List style={{ color: '#03045e' }}>
            <ListItem button onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    <BarChart />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={() => handleClick('analytics')} selected={activeTab === 'analytics'}>
                        <ListItemText primary="Sales Analytics" style={{ paddingLeft: '30px' }} />
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('userManagement')} selected={activeTab === 'userManagement'}>
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText primary="User Management" />
            </ListItem>
        </List>
    );
}

export default Sidebar;

Sidebar.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func
}