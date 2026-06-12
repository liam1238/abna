import type { ReactNode } from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';
import { buildWhatsAppUrl } from '../../utils/whatsapp.ts';
import { trackWhatsAppClick } from '../../utils/tracking.ts';

export interface WhatsAppButtonProps {
  location: string;
  children?: ReactNode;
  fullWidth?: boolean;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  sx?: SxProps<Theme>;
  message?: string;
}

export function WhatsAppButton({
  location,
  children = 'שלחו WhatsApp',
  fullWidth = false,
  variant = 'outlined',
  size = 'large',
  sx,
  message,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    trackWhatsAppClick(location);
  };

  return (
    <Button
      component="a"
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={handleClick}
      sx={sx}
    >
      {children}
    </Button>
  );
}
