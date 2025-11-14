import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import projectImage from '../../assets/project.png';

export const BrandIdentitySection = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      id="brand-identity-section"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 'auto', md: '100vh' },
        backgroundColor: '#000000',
        overflow: 'hidden',
        scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
      }}
    >
      {isDesktop ? (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: '120vh', md: '100vh' },
            backgroundImage: "url('/brand_identity/background.png')",
            backgroundSize: { xs: '170%', sm: '140%', md: 'cover' },
            backgroundPosition: { xs: 'center top', md: 'center' },
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            component="img"
            src="/brand_identity/gradient_left.png"
            alt=""
            loading="lazy"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: 'auto',
              maxWidth: { xs: '100%', md: '50%' },
              objectFit: 'cover',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <Box
            component="img"
            src="/brand_identity/title_topright.png"
            alt="Brand Identity Design"
            loading="lazy"
            sx={{
              position: 'absolute',
              top: { xs: 20, md: 40 },
              left: { xs: '50%', md: 'auto' },
              right: { xs: 'auto', md: 60 },
              transform: { xs: 'translateX(-50%)', md: 'none' },
              width: { xs: '80%', sm: '60%', md: '45%' },
              maxWidth: 800,
              height: 'auto',
              zIndex: 2,
            }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              zIndex: 2,
              minHeight: { xs: 'auto', md: '100vh' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              py: { xs: 6, sm: 8, md: 12 },
            }}
          >
            <Box
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 4, md: 8 },
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: { xs: 400, md: 600 },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  alignItems: { xs: 'center', md: 'flex-start' },
                  position: 'relative',
                }}
              />
            </Box>
          </Container>

          <Box
            component="img"
            src="/brand_identity/ai_logo.png"
            alt="Adobe Illustrator"
            loading="lazy"
            sx={{
              position: 'absolute',
              top: { xs: 'calc(65% + 220px)', md: 'calc(45% + 300px)' },
              left: { xs: '50%', md: 'calc(55% + 50px)' },
              transform: 'translate(-50%, -50%)',
              width: { xs: 70, sm: 90, md: 140 },
              height: 'auto',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />

          <Box
            component="img"
            src="/brand_identity/text_image.png"
            alt="Project Description"
            loading="lazy"
            sx={{
              position: 'absolute',
              left: 0,
              bottom: { xs: 0, md: 8 },
              width: { xs: '135%', sm: '110%', md: '95%' },
              transform: { xs: 'translateX(-15%)', sm: 'translateX(-5%)', md: 'none' },
              maxWidth: { xs: 1000, md: 3000 },
              height: 'auto',
              zIndex: 4,
              pointerEvents: 'none',
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: { xs: 4, sm: 6 },
            px: { xs: 2, sm: 4 },
          }}
        >
          <Box
            component="img"
            src={projectImage}
            alt="Brand identity projects"
            loading="lazy"
            sx={{
              width: '100%',
              maxWidth: 720,
              borderRadius: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
            }}
          />
        </Box>
      )}
    </Box>
  );
};
