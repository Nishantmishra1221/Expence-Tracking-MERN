import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import UserManagement from '../components/UserManagement';
import Analytics from '../components/Analytics';
import Sidebar from '../components/AdminSidebar';
import Navbar from '../components/Navbar';
// import './styles.css';

function AdminPortal() {
  const [activeTab, setActiveTab] = useState('analytics'); // Default to Analytics

  return (
    <>
      <Navbar />
      <div style={{ marginBottom: "2rem" }}>
        <Container style={{ margin: '2rem' }}>
          <Typography variant="h4" gutterBottom align="center" style={{ color: '#03045e', margin: '20px 0' }}>
            Admin Dashboard
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} md={3}>
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </Grid>
            <Grid item xs={12} md={9}>
              {activeTab === 'analytics' ? <Analytics /> : <UserManagement />}
            </Grid>
          </Grid>
        </Container>
      </div>
    </> 
  );
}

export default AdminPortal;