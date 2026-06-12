import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { services } from '../../data/landingPageData.ts';
import { iconChipSx, sectionHeadingSx, softSectionSx } from '../../theme/surfaces.ts';
import { getMuiIcon } from '../../utils/iconMap.tsx';

const SECTION_HEADING = 'השירותים שלנו';

export function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      aria-labelledby="services-heading"
      sx={softSectionSx}
    >
      <Container maxWidth="lg">
        <Typography
          id="services-heading"
          variant="h2"
          component="h2"
          sx={sectionHeadingSx}
        >
          {SECTION_HEADING}
        </Typography>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {services.map((service) => {
            const Icon = getMuiIcon(service.icon);

            return (
              <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <Box aria-hidden="true" sx={iconChipSx}>
                        <Icon fontSize="small" />
                      </Box>
                      <Typography variant="h3" component="h3" sx={{ fontSize: '1.0625rem', fontWeight: 700 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
