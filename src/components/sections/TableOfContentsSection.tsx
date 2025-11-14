import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToId, scrollToTop } from '../../utils/scroll';

export const TableOfContentsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const useCarousel = !isMobile && isTablet;

  type TocItem = {
    id: number;
    image: string;
    target?: string;
    label: string;
    path: string;
  };

  const tocItems: TocItem[] = [
    {
      id: 1,
      image: '/toc/PORTFOLIO AYA TOC 1.png',
      target: 'experience-section',
      label: 'Experience',
      path: '/',
    },
    {
      id: 2,
      image: '/toc/PORTFOLIO AYA TOC 2.png',
      target: 'brand-identity-section',
      label: 'Brand Identity Design',
      path: '/projects',
    },
    {
      id: 3,
      image: '/toc/PORTFOLIO AYA TOC 3.png',
      target: 'visual-section',
      label: 'Illustrative Visual Communication',
      path: '/projects',
    },
    {
      id: 4,
      image: '/toc/PORTFOLIO AYA TOC 4.png',
      target: 'digital-section',
      label: 'Digital Imaging',
      path: '/projects',
    },
    {
      id: 5,
      image: '/toc/PORTFOLIO AYA TOC 5.png',
      target: 'interactive-section',
      label: 'Interactive Motion Design',
      path: '/projects',
    },
    {
      id: 6,
      image: '/toc/PORTFOLIO AYA TOC 6.png',
      target: 'contact-section',
      label: 'Contact',
      path: '/contact',
    },
  ];

  const handleNavigate = (path: string, targetId?: string) => {
    if (path === location.pathname) {
      if (targetId) {
        scrollToId(targetId);
      } else {
        scrollToTop();
      }
      return;
    }

    const destination = targetId ? `${path}#${targetId}` : path;
    navigate(destination);
  };

  const handleMouseEnter = (index: number) => {
    if (isMobile) {
      return;
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (isMobile) {
      return;
    }
    setHoveredIndex(null);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 'auto', md: '100vh' },
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: "url('/toc/PORTFOLIO AYA TOC.png')",
            backgroundSize: { xs: '220%', sm: '160%', md: 'cover' },
            backgroundPosition: { xs: 'center top', md: 'center' },
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
        }}
      />

      {/* TOC Items Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: { xs: 'auto', md: '100vh' },
          display: 'flex',
          flexDirection: useCarousel ? 'row' : 'column',
          justifyContent: useCarousel ? 'flex-start' : 'center',
          alignItems: 'center',
          gap: useCarousel ? 2 : { xs: 2, md: 3 },
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 8 },
          width: '100%',
          overflowX: useCarousel ? 'auto' : 'hidden',
          overflowY: 'hidden',
          scrollSnapType: useCarousel ? 'x mandatory' : undefined,
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {tocItems.map((item, index) => (
          <Box
            key={item.id}
            onClick={() => handleNavigate(item.path, item.target)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            sx={{
              cursor: 'pointer',
              width: isMobile
                ? '100%'
                : useCarousel
                  ? 'auto'
                  : { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              minWidth: isMobile ? '100%' : useCarousel ? '85vw' : 'auto',
              maxWidth: isMobile ? '100%' : useCarousel ? '85vw' : 900,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform:
                hoveredIndex === index && !isMobile
                  ? 'scale(1.08) translateY(-8px)'
                  : 'scale(1) translateY(0)',
              filter:
                hoveredIndex === index && !isMobile
                  ? 'brightness(1.2) drop-shadow(0 20px 40px rgba(255, 140, 0, 0.4))'
                  : 'brightness(1) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))',
              opacity: hoveredIndex === null || hoveredIndex === index || isMobile ? 1 : 0.7,
              scrollSnapAlign: useCarousel ? 'center' : undefined,
              flexShrink: 0,
              '&:active': {
                transform: isMobile ? 'scale(0.97)' : 'scale(1.03) translateY(-4px)',
              },
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.label}
              loading="lazy"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 2,
                transition: 'all 0.3s ease',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
