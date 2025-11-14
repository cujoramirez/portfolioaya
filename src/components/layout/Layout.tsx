import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000000',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: 1,
          pt: { xs: '64px', sm: '72px', md: '80px' },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
