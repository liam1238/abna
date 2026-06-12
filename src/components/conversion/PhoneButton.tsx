import type { ReactNode } from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';
import { buildTelLink } from '../../utils/phone.ts';
import { trackPhoneClick } from '../../utils/tracking.ts';
import { phoneButtonContainedSx } from '../../theme/surfaces.ts';

export interface PhoneButtonProps {
  location: string;
  children?: ReactNode;
  fullWidth?: boolean;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  sx?: SxProps<Theme>;
  phone?: string;
}

export function PhoneButton({
  location,
  children = 'התקשרו עכשיו',
  fullWidth = false,
  variant = 'contained',
  size = 'large',
  sx,
  phone,
}: PhoneButtonProps) {
  const handleClick = () => {
    trackPhoneClick(location);
  };

  return (
    <Button
      component="a"
      href={buildTelLink(phone)}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={handleClick}
      sx={{
        ...(variant === 'contained' ? phoneButtonContainedSx : {}),
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
