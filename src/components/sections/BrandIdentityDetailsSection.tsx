import { Box } from '@mui/material';

export const BrandIdentityDetailsSection = () => {
  // Define all images in sequence
  const bdImages = [
    '/brand_identity/sub/bd/brand1.png',
    '/brand_identity/sub/bd/brand2.png',
    '/brand_identity/sub/bd/brand3.png',
    '/brand_identity/sub/bd/brand4.png',
    '/brand_identity/sub/bd/brand5.png',
    '/brand_identity/sub/bd/brand6.png',
  ];

  const visualImages = [
    '/brand_identity/sub/visual/visual.png',
    '/brand_identity/sub/visual/visual1.png',
    '/brand_identity/sub/visual/visual2.png',
    '/brand_identity/sub/visual/visual3.png',
    '/brand_identity/sub/visual/visual4.png',
    '/brand_identity/sub/visual/visual5.png',
    '/brand_identity/sub/visual/visual6.png',
    '/brand_identity/sub/visual/visual7.png',
    '/brand_identity/sub/visual/visual8.png',
  ];

  const digitalImages = [
    '/brand_identity/sub/digital/digital.png',
    '/brand_identity/sub/digital/digital1.png',
    '/brand_identity/sub/digital/digital2.png',
  ];

  const interactiveImages = [
    '/brand_identity/sub/interactive/interactive.png',
    '/brand_identity/sub/interactive/interactive1.png',
    '/brand_identity/sub/interactive/interactive2.png',
    '/brand_identity/sub/interactive/interactive3.png',
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* BD Section Images */}
      {bdImages.map((src, index) => (
        <Box
          key={`bd-${index}`}
          component="img"
          src={src}
          alt={`Brand Detail ${index + 1}`}
          loading="lazy"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      ))}

      {/* Visual Section Images */}
      {visualImages.map((src, index) => (
        index === 0 ? (
          <Box
            key={`visual-${index}`}
            id="visual-section"
            component="img"
            src={src}
            alt={`Visual ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
            }}
          />
        ) : (
          <Box
            key={`visual-${index}`}
            component="img"
            src={src}
            alt={`Visual ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        )
      ))}

      {/* Digital Section Images */}
      {digitalImages.map((src, index) => (
        index === 0 ? (
          <Box
            key={`digital-${index}`}
            id="digital-section"
            component="img"
            src={src}
            alt={`Digital ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
            }}
          />
        ) : (
          <Box
            key={`digital-${index}`}
            component="img"
            src={src}
            alt={`Digital ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        )
      ))}

      {/* Interactive Section Images */}
      {interactiveImages.map((src, index) => (
        index === 0 ? (
          <Box
            key={`interactive-${index}`}
            id="interactive-section"
            component="img"
            src={src}
            alt={`Interactive ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              scrollMarginTop: { xs: '72px', sm: '84px', md: '104px' },
            }}
          />
        ) : (
          <Box
            key={`interactive-${index}`}
            component="img"
            src={src}
            alt={`Interactive ${index + 1}`}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        )
      ))}

    </Box>
  );
};
