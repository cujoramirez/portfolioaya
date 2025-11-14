import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <Box
      id="contact-section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
        px: 0,
        py: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top, rgba(255, 140, 0, 0.25), transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        component={motion.div}
        aria-label="Contact details"
        initial={{ opacity: 0.85, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          borderRadius: { xs: 0, md: 3 },
          overflow: 'hidden',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.55)',
          cursor: 'pointer',
          '@media (hover: hover)': {
            '&:hover span:first-of-type': {
              transform: 'scale(1.03)',
            },
          },
          '&:active span:first-of-type': {
            transform: 'scale(1.01)',
          },
        }}
      >
        <Box
          component="span"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/brand_identity/sub/contact.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transformOrigin: 'center',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
        />
        <Box
          component="span"
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.4) 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />
      </Box>
    </Box>
  );
};
