import { useRef } from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import experienceImage from '../../assets/experience/experience.png';

export const ExperienceToolsEducationSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const leftColumnY = useTransform(scrollYProgress, [0, 1], ['-6%', '10%']);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], ['4%', '-6%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1.08, 0.92]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.18]);

  return (
    <Box
      id="experience-section"
      ref={sectionRef}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        overflow: 'hidden',
        scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
      }}
    >
      {isDesktop ? (
        <>
          <Box
            sx={{
              position: 'absolute',
              inset: '-2.5%',
              backgroundImage: 'url(/experience/background.png)',
              backgroundSize: { xs: '180%', sm: '140%', md: 'cover' },
              backgroundPosition: { xs: 'center top', md: 'center' },
              backgroundRepeat: 'no-repeat',
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: '-2.5%',
              backgroundImage: 'url(/experience/overlay_backgroun.png)',
              backgroundSize: { xs: '200%', sm: '150%', md: 'cover' },
              backgroundPosition: { xs: 'center top', md: 'calc(50% + 14px) center' },
              backgroundRepeat: 'no-repeat',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />
          <Box
            component={motion.div}
            style={{ opacity: overlayOpacity }}
            sx={{
              position: 'absolute',
              inset: '-20% -10% auto',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.35) 0%, rgba(255, 107, 0, 0) 70%)',
              filter: 'blur(120px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <Box
            component={motion.div}
            style={{ opacity: glowOpacity, scale: glowScale }}
            sx={{
              position: 'absolute',
              inset: 'auto -25% -10%',
              height: '110%',
              background: 'radial-gradient(circle at 20% 20%, rgba(108, 198, 255, 0.4) 0%, rgba(108, 198, 255, 0) 70%)',
              filter: 'blur(140px)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              zIndex: 3,
              py: { xs: 8, md: 12 },
            }}
          >
            <Box
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
                gap: { xs: 4, md: 6 },
                alignItems: 'flex-start',
              }}
            >
              <Box
                component={motion.div}
                style={{ y: leftColumnY }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 3, md: 4 },
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -40 }}
                transition={{ type: 'spring', stiffness: 140, damping: 22 }}
              >
                <Box
                  component={motion.img}
                  src="/experience/experience.png"
                  alt="Experience heading"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 420, md: 520 },
                  }}
                  whileHover={{ scale: 1.04, rotate: -1.5 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                />
                <Box
                  component={motion.img}
                  src="/experience/experience_text.png"
                  alt="Experience details"
                  loading="lazy"
                  sx={{
                    width: '75%',
                    maxWidth: { xs: 520, md: 640 },
                  }}
                  whileHover={{ scale: 1.03, translateY: -6 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
              </Box>

              <Box
                component={motion.div}
                style={{ y: rightColumnY }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 3, md: 4 },
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 40 }}
                transition={{ type: 'spring', stiffness: 140, damping: 22, delay: 0.1 }}
              >
                <Box
                  component={motion.img}
                  src="/experience/tools.png"
                  alt="Tools heading"
                  loading="lazy"
                  sx={{
                    width: '150%',
                    maxWidth: { xs: 520, md: 1000 },
                    display: 'block',
                  }}
                  initial={{ x: -200 }}
                  animate={{ x: -200 }}
                  whileHover={{ scale: 1.05, rotate: 1.2, x: -180 }}
                  transition={{ type: 'spring', stiffness: 210, damping: 20 }}
                />
                <Box
                  component={motion.img}
                  src="/experience/tools icon.png"
                  alt="Design tools"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 520, md: 980 },
                  }}
                  initial={{ y: -55 }}
                  animate={{ y: -55 }}
                  whileHover={{ scale: 1.04, y: -75 }}
                  transition={{ type: 'spring', stiffness: 230, damping: 18 }}
                />
                <Box
                  component={motion.div}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: { xs: 420, md: 520 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: { xs: 6, md: 8 },
                  }}
                >
                  <Box
                    component={motion.img}
                    src="/experience/education_proficiency.png"
                    alt="Tools proficiency"
                    loading="lazy"
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 420, md: 520 },
                      display: 'block',
                    }}
                    variants={{
                      rest: { scale: 1, rotate: 0 },
                      hover: {
                        scale: 1.03,
                        rotate: -1,
                        transition: { type: 'spring', stiffness: 200, damping: 20 },
                      },
                    }}
                  />
                  <Box
                    component={motion.img}
                    src="/experience/education.png"
                    alt="Education details"
                    loading="lazy"
                    sx={{
                      position: 'absolute',
                      top: '34%',
                      left: '5%',
                      transform: 'translate(-50%, -50%)',
                      width: '82%',
                      maxWidth: { xs: 340, md: 420 },
                      filter: 'drop-shadow(0px 18px 44px rgba(0, 0, 0, 0.45))',
                    }}
                    variants={{
                      rest: { scale: 1, y: 0 },
                      hover: {
                        scale: 1.04,
                        y: -10,
                        transition: { type: 'spring', stiffness: 200, damping: 20 },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </>
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
            src={experienceImage}
            alt="Experience overview"
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
