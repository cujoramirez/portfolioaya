import { Box, Container, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <Box
      component={motion.footer}
      sx={{
        backgroundColor: '#1A1A1A',
        py: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(224, 224, 224, 1)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © 2024 Fatimah Az Zahra (Aya). All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/fatimah-az-zahra-032956386/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#FFFFFF',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#FF8C42' },
              }}
            >
              <Linkedin size={24} />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:ayafatimah11@gmail.com"
              sx={{
                color: '#FFFFFF',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#FF8C42' },
              }}
            >
              <Mail size={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
