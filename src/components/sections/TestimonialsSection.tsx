import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { testimonials } from '../../data/landingPageData.ts';
import { sectionHeadingSx, softSectionSx } from '../../theme/surfaces.ts';

const SECTION_HEADING = 'מה הלקוחות אומרים';
const STAR_COUNT = 5;

export function TestimonialsSection() {
  return (
    <Box
      component="section"
      id="testimonials"
      aria-labelledby="testimonials-heading"
      sx={softSectionSx}
    >
      <Container maxWidth="lg">
        <Typography
          id="testimonials-heading"
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {SECTION_HEADING}
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {testimonials.map((item) => (
            <Grid key={item.quote} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flex: 1, p: { xs: 3, md: 3.5 } }}>
                  <Box
                    aria-hidden="true"
                    sx={{ display: 'flex', gap: 0.25, mb: 2, color: 'accent.main' }}
                  >
                    {Array.from({ length: STAR_COUNT }, (_, index) => (
                      <StarIcon key={index} sx={{ fontSize: 18 }} />
                    ))}
                  </Box>

                  <Typography
                    variant="body1"
                    component="blockquote"
                    sx={{
                      m: 0,
                      mb: 2.5,
                      fontStyle: 'normal',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.authorLabel}
                    {item.serviceContext ? ` · ${item.serviceContext}` : ''}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
