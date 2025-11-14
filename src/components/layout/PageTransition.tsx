import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100%', overflow: 'hidden' }}>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: '-10% 0 0',
          background: 'radial-gradient(circle at 20% 10%, rgba(255, 140, 0, 0.3), transparent 65%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Box>{children}</Box>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ x: '-100%' }}
        animate={{ x: '-100%' }}
        exit={{ x: 0 }}
        transition={{ duration: 0.5, ease: [0.6, 0, 0.4, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(255, 140, 0, 0.75), rgba(255, 69, 0, 0.45) 70%, rgba(0,0,0,0))',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};
