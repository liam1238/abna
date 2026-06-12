import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { whatsAppContainedSx } from '../../theme/surfaces.ts';
import { PhoneButton } from './PhoneButton.tsx';
import { WhatsAppButton } from './WhatsAppButton.tsx';

const STICKY_LOCATION = 'sticky_mobile';

export function StickyMobileCTA() {
  return (
    <Paper
      component="nav"
      aria-label="יצירת קשר מהירה"
      elevation={8}
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        flexDirection: 'row',
        gap: 1,
        px: 1.5,
        py: 1,
        pb: 'calc(8px + env(safe-area-inset-bottom, 0px))',
        borderRadius: 0,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <PhoneButton location={STICKY_LOCATION} fullWidth size="medium">
          התקשר עכשיו
        </PhoneButton>
      </Box>
      <Box sx={{ flex: 1 }}>
        <WhatsAppButton
          location={STICKY_LOCATION}
          fullWidth
          size="medium"
          variant="contained"
          sx={whatsAppContainedSx}
        />
      </Box>
    </Paper>
  );
}
