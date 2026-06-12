import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { ContactForm } from '../conversion/ContactForm.tsx';
import { PhoneButton } from '../conversion/PhoneButton.tsx';
import { WhatsAppButton } from '../conversion/WhatsAppButton.tsx';
import { business, hero } from '../../data/landingPageData.ts';
import { whatsAppOnDarkSx } from '../../theme/surfaces.ts';

const HERO_LOCATION = 'hero';

export function HeroSection() {
  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="hero-heading"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#0F172A',
        color: 'primary.contrastText',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(17, 24, 39, 0.94) 55%, rgba(31, 41, 55, 0.92) 100%), url(${hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: { xs: '10%', md: '15%' },
          left: { xs: '50%', md: '8%' },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          width: { xs: 320, md: 520 },
          height: { xs: 320, md: 520 },
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(196, 122, 26, 0.14) 0%, rgba(196, 122, 26, 0.04) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          py: { xs: 4, sm: 5, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={{ xs: 2, md: 2.25 }} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <Box
                component="img"
                src={hero.logo}
                alt={business.name}
                width={hero.logoWidth}
                height={hero.logoHeight}
                sx={{
                  width: { xs: 100, md: 170 },
                  height: 'auto',
                  display: 'block',
                  mx: { xs: 'auto', md: 0 },
                  mb: { xs: 2, md: 2.5 },
                }}
              />

              <Typography
                id="hero-heading"
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '1.625rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                {hero.h1}
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontSize: { xs: '0.9375rem', sm: '1.0625rem', md: '1.125rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.88)',
                  maxWidth: { md: 520 },
                }}
              >
                {hero.subtitle}
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{ pt: 0.25 }}
              >
                <PhoneButton location={HERO_LOCATION} fullWidth={false} />
                <WhatsAppButton
                  location={HERO_LOCATION}
                  fullWidth={false}
                  variant="contained"
                  sx={whatsAppOnDarkSx}
                />
              </Stack>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                  listStyle: 'none',
                  display: { xs: 'none', md: 'grid' },
                  gap: 1,
                  pt: 0.5,
                }}
              >
                {hero.trustBullets.map((bullet) => (
                  <Box
                    component="li"
                    key={bullet}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <CheckCircleOutlinedIcon
                      fontSize="small"
                      sx={{ color: 'accent.main', flexShrink: 0 }}
                    />
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.92)' }}>
                      {bullet}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Box
              component="ul"
              sx={{
                m: 0,
                p: 0,
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 1.25,
                textAlign: 'start',
                pt: 0.5,
              }}
            >
              {hero.trustBullets.map((bullet) => (
                <Box
                  component="li"
                  key={bullet}
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
                >
                  <CheckCircleOutlinedIcon
                    fontSize="small"
                    sx={{ color: 'accent.main', flexShrink: 0, mt: 0.25 }}
                  />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.92)' }}>
                    {bullet}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
