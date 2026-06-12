/** Shared surface styles for icon chips, sections, and CTA buttons */

export const iconChipSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  borderRadius: '50%',
  bgcolor: '#0F172A',
  color: '#D8C7A3',
  flexShrink: 0,
} as const;

export const sectionHeadingSx = {
  fontSize: { xs: '1.625rem', md: '1.875rem' },
  fontWeight: 800,
  letterSpacing: '-0.015em',
  mb: { xs: 3.5, md: 5 },
  textAlign: 'center',
} as const;

/** Consistent vertical rhythm for content sections */
export const sectionPadding = {
  py: { xs: 7, md: 10 },
} as const;

const softSectionEdge = {
  borderTop: '1px solid rgba(15, 23, 42, 0.06)',
  borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
} as const;

/** Plain white content block */
export const whiteSectionSx = {
  ...sectionPadding,
  bgcolor: '#FFFFFF',
} as const;

/** Subtle cool-gray block — separates content-heavy sections */
export const softSectionSx = {
  ...sectionPadding,
  bgcolor: '#F8FAFC',
  ...softSectionEdge,
} as const;

/** Dark conversion band — unchanged from polish pass */
export const darkCtaSectionSx = {
  py: { xs: 6, md: 8 },
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
} as const;

export const phoneButtonContainedSx = {
  bgcolor: 'accent.main',
  color: 'accent.contrastText',
  boxShadow: '0 10px 24px rgba(196, 122, 26, 0.25)',
  '&:hover': {
    bgcolor: '#D08923',
    boxShadow: '0 12px 28px rgba(196, 122, 26, 0.32)',
  },
} as const;

/** Premium glass card for the Hero contact form */
export const contactFormCardSx = {
  background: 'rgba(255, 255, 255, 0.92)',
  border: '1px solid rgba(255, 255, 255, 0.35)',
  boxShadow: '0 24px 70px rgba(0, 0, 0, 0.28)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  borderRadius: '20px',
} as const;

/** Soft premium input styling for the Hero contact form */
export const contactFormFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    bgcolor: '#F8FAFC',
    '& fieldset': {
      borderColor: 'rgba(15, 23, 42, 0.14)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(15, 23, 42, 0.28)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C47A1A',
      borderWidth: '1px',
    },
  },
} as const;

/** Hero contact form submit — stronger shadow when enabled */
export const contactFormSubmitSx = {
  ...phoneButtonContainedSx,
  boxShadow: '0 12px 28px rgba(196, 122, 26, 0.35)',
  '&:hover': {
    bgcolor: '#D08923',
    boxShadow: '0 14px 32px rgba(196, 122, 26, 0.42)',
  },
  '&.Mui-disabled': {
    bgcolor: 'rgba(196, 122, 26, 0.45)',
    color: 'rgba(255, 255, 255, 0.75)',
    boxShadow: 'none',
    '&:hover': {
      bgcolor: '#D1D5DB',
      boxShadow: 'none',
    },
  },
} as const;

export const whatsAppContainedSx = {
  bgcolor: 'success.main',
  color: 'success.contrastText',
  border: 'none',
  boxShadow: '0 10px 24px rgba(22, 163, 74, 0.25)',
  '&:hover': {
    bgcolor: 'success.dark',
    boxShadow: '0 12px 28px rgba(22, 163, 74, 0.32)',
  },
} as const;

export const whatsAppOnDarkSx = {
  ...whatsAppContainedSx,
  boxShadow: '0 10px 24px rgba(22, 163, 74, 0.3)',
  '&:hover': {
    bgcolor: 'success.dark',
    boxShadow: '0 12px 28px rgba(22, 163, 74, 0.38)',
  },
} as const;
