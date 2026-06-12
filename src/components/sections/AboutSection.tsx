import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { about } from '../../data/landingPageData.ts';
import { sectionHeadingSx, softSectionSx } from '../../theme/surfaces.ts';

export function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      aria-labelledby="about-heading"
      sx={softSectionSx}
    >
      <Container maxWidth="md">
        <Typography
          id="about-heading"
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {about.heading}
        </Typography>

        {about.paragraphs.map((paragraph) => (
          <Typography
            key={paragraph}
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2.5,
              textAlign: 'center',
              maxWidth: 640,
              mx: 'auto',
              lineHeight: 1.7,
              '&:last-child': { mb: 0 },
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Container>
    </Box>
  );
}
