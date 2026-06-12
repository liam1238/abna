import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { whyChooseUs } from '../../data/landingPageData.ts';
import { iconChipSx, sectionHeadingSx, whiteSectionSx } from '../../theme/surfaces.ts';
import { getMuiIcon } from '../../utils/iconMap.tsx';

const SECTION_HEADING = 'למה לבחור באבנא?';

export function WhyChooseUsSection() {
  return (
    <Box
      component="section"
      aria-labelledby="why-choose-us-heading"
      sx={whiteSectionSx}
    >
      <Container maxWidth="lg">
        <Typography
          id="why-choose-us-heading"
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {SECTION_HEADING}
        </Typography>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {whyChooseUs.map((item) => {
            const Icon = getMuiIcon(item.icon);

            return (
              <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    height: '100%',
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box aria-hidden="true" sx={iconChipSx}>
                    <Icon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="h3" component="h3" sx={{ fontSize: '1.0625rem', fontWeight: 700, mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
