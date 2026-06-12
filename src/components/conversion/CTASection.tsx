import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  ctaBlocks,
  type CtaBlockLocation,
} from '../../data/landingPageData.ts';
import { darkCtaSectionSx, whatsAppOnDarkSx } from '../../theme/surfaces.ts';
import { PhoneButton } from './PhoneButton.tsx';
import { WhatsAppButton } from './WhatsAppButton.tsx';

export interface CTASectionProps {
  id?: string;
  location?: CtaBlockLocation;
}

function findCtaBlock({ id, location }: CTASectionProps) {
  if (id) {
    return ctaBlocks.find((block) => block.id === id);
  }

  if (location) {
    return ctaBlocks.find((block) => block.location === location);
  }

  return undefined;
}

export function CTASection({ id, location }: CTASectionProps) {
  const block = findCtaBlock({ id, location });

  if (!block) {
    return null;
  }

  const trackingLocation = block.location;

  return (
    <Box
      component="section"
      aria-labelledby={`${block.id}-heading`}
      sx={darkCtaSectionSx}
    >
      <Container maxWidth="md">
        <Stack
          spacing={2.5}
          sx={{ textAlign: 'center', alignItems: 'center' }}
        >
          <Box>
            <Typography
              id={`${block.id}-heading`}
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.375rem', md: '1.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.015em',
                mb: block.subheading ? 1 : 0,
              }}
            >
              {block.heading}
            </Typography>
            {block.subheading && (
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.88)', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}
              >
                {block.subheading}
              </Typography>
            )}
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ width: '100%', maxWidth: 480, pt: 0.5 }}
          >
            <PhoneButton location={trackingLocation} fullWidth />
            <WhatsAppButton
              location={trackingLocation}
              fullWidth
              variant="contained"
              sx={whatsAppOnDarkSx}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
