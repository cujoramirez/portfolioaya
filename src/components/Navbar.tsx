import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, Container } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToId, scrollToTop } from '../utils/scroll';

type NavItem = {
  label: string;
  path: string;
  target?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', target: 'home-section', path: '/' },
  { label: 'ABOUT', target: 'about-section', path: '/' },
  { label: 'EXPERIENCE', target: 'experience-section', path: '/' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'CONTACT', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home-section');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const currentTarget = location.hash ? location.hash.replace('#', '') : 'home-section';
      setActive(currentTarget);
      return;
    }

    setActive(location.pathname);
  }, [location]);

  const handleNavigate = (item: NavItem) => {
    const activeKey = item.target ?? item.path;

    if (item.path === location.pathname) {
      if (item.target) {
        scrollToId(item.target);
      } else {
        scrollToTop();
      }
      setActive(activeKey);
      setOpen(false);
      return;
    }

    const destination = item.target ? `${item.path}#${item.target}` : item.path;
    navigate(destination);
    setActive(activeKey);

    if (window.innerWidth < 960) {
      // Delay closing the drawer briefly to allow the route transition to start, avoids jumpiness.
      window.setTimeout(() => setOpen(false), 150);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 140, 0, 0.3)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: { xs: 2, sm: 3, md: 4 } }}>
            <Box
              component="button"
              type="button"
              onClick={() => handleNavigate(NAV_ITEMS[0])}
              sx={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                p: 0,
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Box component="img" src="/logo.png" alt="AYA" sx={{ height: 48, width: 'auto' }} />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {NAV_ITEMS.map((item) => (
                <Box
                  key={`${item.label}-${item.path}`}
                  component="button"
                  type="button"
                  onClick={() => handleNavigate(item)}
                  sx={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: active === (item.target ?? item.path) ? '#FF8C00' : '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    pb: 0.5,
                    '&:hover': { 
                      color: '#FF8C00',
                      transform: 'translateY(-2px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: active === (item.target ?? item.path) ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Box>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{ 
                display: { xs: 'inline-flex', md: 'none' }, 
                color: '#FFFFFF',
                ml: 1,
                '&:hover': { color: '#FF8C00' },
              }}
            >
              <Menu size={24} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ elevation: 0 }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            backgroundColor: '#0d0d0d',
            color: '#FFFFFF',
            borderLeft: '1px solid rgba(255, 140, 0, 0.3)',
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        <Box sx={{ pt: 8, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
            <IconButton 
              onClick={() => setOpen(false)} 
              sx={{ 
                color: '#FFFFFF',
                '&:hover': { color: '#FF8C00' },
              }}
            >
              <X size={24} />
            </IconButton>
          </Box>
          <List sx={{ px: 2, flex: 1 }}>
            {NAV_ITEMS.map((item) => (
              <ListItem
                key={`${item.label}-${item.path}`}
                onClick={() => handleNavigate(item)}
                sx={{
                  cursor: 'pointer',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  py: 2,
                  color: active === (item.target ?? item.path) ? '#FF8C00' : '#FFFFFF',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#FF8C00',
                    backgroundColor: 'rgba(255, 140, 0, 0.1)',
                  },
                }}
              >
                {item.label}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
