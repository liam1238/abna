import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { areas, business } from '../../data/landingPageData.ts';
import { iconChipSx, sectionHeadingSx, whiteSectionSx } from '../../theme/surfaces.ts';

const SECTION_HEADING = 'אזורי שירות';

export function AreasSection() {
  return (
    <Box
      component="section"
      id="areas"
      aria-labelledby="areas-heading"
      sx={whiteSectionSx}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
          <Typography id="areas-heading" variant="h2" component="h2" sx={{ ...sectionHeadingSx, mb: 0 }}>
            {SECTION_HEADING}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 720, mx: 'auto', lineHeight: 1.7, textAlign: 'center', alignSelf: 'center'}}
          >
            {business.name} מספקת שירותי עבודות עפר, חפירות ותשתיות ב
            {business.serviceAreas.join(', ')}. בחרו את האזור הרלוונטי או צרו קשר
            לקבלת הצעת מחיר.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: 'wrap', justifyContent: 'center', pt: 0.5 }}
          >
            {business.serviceAreas.map((area) => (
              <Chip
                key={area}
                icon={<LocationOnOutlinedIcon aria-hidden="true" />}
                label={area}
                variant="outlined"
              />
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {areas.map((area) => (
            <Grid key={area.heading} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box aria-hidden="true" sx={iconChipSx}>
                      <LocationOnOutlinedIcon fontSize="small" />
                    </Box>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{ fontSize: '1.0625rem', fontWeight: 700 }}
                    >
                      {area.heading}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {area.description}
                  </Typography>
                  <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {area.keywords.map((keyword) => (
                      <Chip
                        key={keyword}
                        label={keyword}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
