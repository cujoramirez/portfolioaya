import { useEffect, useRef, useState } from 'react';
import { Box, Container } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, slideInRight, staggerContainer } from '../../utils/animations';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoActive, setVideoActive] = useState(true);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const floatingY = useTransform(scrollYProgress, [0, 1], ['-5%', '15%']);
  const floatingScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);
  const floatingOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoActive(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoActive) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isVideoActive]);

  return (
    <>
      <Box
        id="home-section"
        component="video"
        ref={videoRef}
        src="/cover-portfolio.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        sx={{
          width: '100%',
          height: { xs: '45vh', sm: '60vh', md: '80vh', lg: '95vh' },
          minHeight: { xs: 320, sm: 380 },
          maxHeight: '100vh',
          objectFit: 'cover',
          objectPosition: { xs: 'center 25%', sm: 'center 35%', md: 'center' },
          borderRadius: { xs: '0 0 32px 32px', md: '0' },
          overflow: 'hidden',
          pointerEvents: 'none',
          backgroundColor: '#000000',
          opacity: isVideoActive ? 1 : 0,
          transition: 'opacity 0.3s ease',
          scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
        }}
      />
      <Box
        id="about-section"
        ref={heroRef}
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: 1,
          scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
        }}
      >
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            width: '65%',
            height: '65%',
            x: '-50%',
            y: floatingY,
            scale: floatingScale,
            opacity: floatingOpacity,
            background: 'radial-gradient(circle, rgba(255, 140, 0, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(120px)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 0 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 6, md: 8 },
              alignItems: 'center',
              justifyItems: { xs: 'center', md: 'start' },
            }}
          >
          {/* Left Side - Text Content */}
          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.45 }}
            sx={{
              order: { xs: 2, md: 1 },
              color: '#FFFFFF',
              width: '100%',
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.03, translateY: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <Box
                  component="img"
                  src="/quotebox.png"
                  alt="Quote Box"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    mt: { xs: '32px', md: '130px' },
                    transform: {
                      xs: 'none',
                      md: 'translate(185px, 165px)',
                    },
                  }}
                />
              </motion.div>
          </Box>

          {/* Right Side - Profile Picture */}
          <Box
            component={motion.div}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.45 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              order: { xs: 1, md: 2 },
              justifySelf: { xs: 'center', md: 'start' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                maxWidth: { xs: 420, md: 'none' },
                mx: { xs: 'auto', md: 0 },
                mr: { md: 'auto' },
                pt: { xs: 14, sm: 16, md: 20 },
                mt: '150px',
              }}
            >
              <Box
                component="img"
                src="/theMindBehind.png"
                alt="The Mind Behind The Work"
                loading="lazy"
                sx={{
                  position: 'absolute',
                  top: { xs: -140, sm: -160, md: -80 },
                  left: '50%',
                  transform: {
                    xs: 'translateX(-50%)',
                    md: 'translateX(calc(-50% - 650px))',
                  },
                  width: { xs: '90%', sm: '80%', md: '100%' },
                  maxWidth: 560,
                  pointerEvents: 'none',
                  zIndex: 3,
                  filter: 'drop-shadow(0px 6px 18px rgba(0,0,0,0.6))',
                }}
              />
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ rotate: 1.5 }}
                transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '500px',
                  aspectRatio: '1/1',
                  margin: '0 auto',
                  overflow: 'visible',
                }}
              >
                {/* Border Frame Image */}
                <Box
                  component="img"
                  src="/heropic_border.png"
                  alt="Border"
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    top: { xs: '-40px', md: '-80px' },
                    left: { xs: '40px', md: '60px' },
                    width: { xs: '85%', md: '90%' },
                    height: '90%',
                    objectFit: 'contain',
                    zIndex: 1,
                  }}
                />
                {/* Profile Image */}
                <img
                  src="/aya.png"
                  alt="Fatimah Az Zahra"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </motion.div>

              {/* Bio Text with Black Blur Background */}
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.01, translateY: -4 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    mt: 4,
                  }}
                >
                  {/* Black blur background for bio */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: '100%',
                      background: '#000000',
                      filter: 'blur(30px)',
                      opacity: 0.9,
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    </>
  );
};
