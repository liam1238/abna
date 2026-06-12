import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { gallery } from '../../data/landingPageData.ts';
import { sectionHeadingSx, whiteSectionSx } from '../../theme/surfaces.ts';

const SECTION_HEADING = 'גלריית עבודות';

export function GallerySection() {
  return (
    <Box
      component="section"
      id="gallery"
      aria-labelledby="gallery-heading"
      sx={whiteSectionSx}
    >
      <Container maxWidth="lg">
        <Typography
          id="gallery-heading"
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {SECTION_HEADING}
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {gallery.map((item) => (
            <Grid key={item.src} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: `${item.width} / ${item.height}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  bgcolor: 'grey.100',
                  boxShadow: '0 18px 48px rgba(15, 23, 42, 0.12)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 22px 56px rgba(15, 23, 42, 0.16)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
