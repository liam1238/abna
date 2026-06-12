import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { buildWhatsAppUrl } from '../../utils/whatsapp.ts';
import { trackWhatsAppClick } from '../../utils/tracking.ts';

const FLOATING_LOCATION = 'floating_desktop';

export function FloatingActions() {
  const handleClick = () => {
    trackWhatsAppClick(FLOATING_LOCATION);
  };

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: (theme) => theme.zIndex.fab,
      }}
    >
      <Fab
        component="a"
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="שלחו WhatsApp"
        onClick={handleClick}
        sx={{
          bgcolor: 'success.main',
          color: '#FFFFFF',
          width: 56,
          height: 56,
          boxShadow: 4,
          '&:hover': {
            bgcolor: '#1DA851',
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}
