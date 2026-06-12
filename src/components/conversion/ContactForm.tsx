import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { isValidIsraeliPhone } from '../../utils/phone.ts';
import {
  contactFormCardSx,
  contactFormFieldSx,
  contactFormSubmitSx,
} from '../../theme/surfaces.ts';
import {
  trackFormError,
  trackFormSubmit,
  trackFormSuccess,
} from '../../utils/tracking.ts';

const FORM_LOCATION = 'contact_form';

const LABELS = {
  fullName: 'שם מלא',
  phone: 'טלפון',
  message: 'הודעה',
  submit: 'השאירו פרטים ונחזור אליכם בהקדם',
  success: 'הפרטים התקבלו בהצלחה. נחזור אליכם בהקדם.',
  genericError: 'יש לבדוק את השדות ולנסות שוב.',
  apiError: 'שגיאה בשליחת הטופס. נסו שוב או צרו קשר בטלפון או WhatsApp.',
  fullNameRequired: 'יש להזין שם מלא',
  phoneRequired: 'יש להזין מספר טלפון',
  phoneInvalid: 'יש להזין מספר טלפון ישראלי תקין',
  incompleteHint: 'יש למלא שם מלא ומספר טלפון תקין',
} as const;

type FormStatus = 'initial' | 'loading' | 'success' | 'error';
type ValidatableField = 'fullName' | 'phone';

interface FormFields {
  fullName: string;
  phone: string;
  message: string;
  website: string;
}

interface FieldErrors {
  fullName?: string;
  phone?: string;
}

interface TouchedFields {
  fullName?: boolean;
  phone?: boolean;
}

interface ContactApiResponse {
  ok: boolean;
  message?: string;
}

function validateFields(fields: FormFields): {
  errors: FieldErrors;
  reason?: string;
} {
  const errors: FieldErrors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = LABELS.fullNameRequired;
  }

  const phoneValue = fields.phone.trim();

  if (!phoneValue) {
    errors.phone = LABELS.phoneRequired;
  } else if (!isValidIsraeliPhone(phoneValue)) {
    errors.phone = LABELS.phoneInvalid;
  }

  if (Object.keys(errors).length > 0) {
    const reason = errors.fullName
      ? 'full_name_required'
      : errors.phone === LABELS.phoneRequired
        ? 'phone_required'
        : 'phone_invalid';

    return { errors, reason };
  }

  return { errors };
}

function isFormValid(fields: FormFields): boolean {
  const phoneValue = fields.phone.trim();

  return (
    fields.fullName.trim().length > 0 &&
    phoneValue.length > 0 &&
    isValidIsraeliPhone(phoneValue) &&
    !fields.website.trim()
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    fullName: '',
    phone: '',
    message: '',
    website: '',
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<FormStatus>('initial');
  const [statusMessage, setStatusMessage] = useState('');

  const formIsValid = isFormValid(fields);

  const showFieldError = (name: ValidatableField): string | undefined => {
    if (!touched[name] && !submitAttempted) {
      return undefined;
    }

    return fieldErrors[name];
  };

  const updateField =
    (name: keyof FormFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((current) => ({ ...current, [name]: event.target.value }));

      if (name !== 'website' && fieldErrors[name as keyof FieldErrors]) {
        setFieldErrors((current) => ({ ...current, [name]: undefined }));
      }

      if (status === 'error') {
        setStatus('initial');
        setStatusMessage('');
      }
    };

  const handleBlur =
    (name: ValidatableField) =>
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTouched((current) => ({ ...current, [name]: true }));
      setFieldErrors((currentErrors) => {
        const nextFields = { ...fields, [name]: event.target.value };
        const { errors } = validateFields(nextFields);
        return { ...currentErrors, [name]: errors[name] };
      });
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackFormSubmit(FORM_LOCATION);
    setSubmitAttempted(true);

    if (fields.website.trim()) {
      return;
    }

    const { errors, reason } = validateFields(fields);

    if (reason) {
      setFieldErrors(errors);
      setStatus('error');
      setStatusMessage(LABELS.genericError);
      trackFormError(FORM_LOCATION, reason);
      return;
    }

    setFieldErrors({});
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fields.fullName.trim(),
          phone: fields.phone.trim(),
          message: fields.message.trim(),
          website: fields.website,
        }),
      });

      const data = (await response.json()) as ContactApiResponse;

      if (!response.ok || !data.ok) {
        setStatus('error');
        setStatusMessage(data.message ?? LABELS.apiError);
        trackFormError(FORM_LOCATION, 'api_error');
        return;
      }

      setStatus('success');
      setStatusMessage(LABELS.success);
      trackFormSuccess(FORM_LOCATION);
    } catch {
      setStatus('error');
      setStatusMessage(LABELS.apiError);
      trackFormError(FORM_LOCATION, 'api_error');
    }
  };

  const isSubmitting = status === 'loading';
  const isSuccess = status === 'success';
  const fullNameError = showFieldError('fullName');
  const phoneError = showFieldError('phone');

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      noValidate
      elevation={0}
      sx={{
        ...contactFormCardSx,
        p: { xs: 2.5, sm: 3, md: 3.5 },
        maxWidth: 480,
        mx: 'auto',
        textAlign: 'start',
      }}
    >
      <Box
        aria-live="polite"
        aria-atomic="true"
        sx={{ mb: statusMessage ? 2 : 0, minHeight: statusMessage ? 'auto' : 0 }}
      >
        {statusMessage && (
          <Typography
            role={isSuccess ? 'status' : 'alert'}
            color={isSuccess ? 'success.main' : 'error.main'}
            variant="body2"
          >
            {statusMessage}
          </Typography>
        )}
      </Box>

      <TextField
        label={LABELS.fullName}
        name="fullName"
        value={fields.fullName}
        onChange={updateField('fullName')}
        onBlur={handleBlur('fullName')}
        fullWidth
        required
        margin="normal"
        error={Boolean(fullNameError)}
        helperText={fullNameError}
        disabled={isSubmitting || isSuccess}
        autoComplete="name"
        sx={contactFormFieldSx}
      />

      <TextField
        label={LABELS.phone}
        name="phone"
        type="tel"
        value={fields.phone}
        onChange={updateField('phone')}
        onBlur={handleBlur('phone')}
        fullWidth
        required
        margin="normal"
        error={Boolean(phoneError)}
        helperText={phoneError}
        disabled={isSubmitting || isSuccess}
        autoComplete="tel"
        sx={contactFormFieldSx}
        slotProps={{
          htmlInput: { inputMode: 'numeric', dir: 'ltr' },
        }}
      />

      <TextField
        label={LABELS.message}
        name="message"
        value={fields.message}
        onChange={updateField('message')}
        fullWidth
        multiline
        minRows={3}
        margin="normal"
        disabled={isSubmitting || isSuccess}
        sx={contactFormFieldSx}
      />

      <Box
        component="input"
        type="text"
        name="website"
        value={fields.website}
        onChange={updateField('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        sx={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        disabled={!formIsValid || isSubmitting || isSuccess}
        sx={{
          mt: 2,
          ...contactFormSubmitSx,
        }}
      >
        {isSubmitting ? 'שולח...' : LABELS.submit}
      </Button>

      {!formIsValid && !isSubmitting && !isSuccess && (
        <Typography
          variant="caption"
          sx={{
            mt: 1,
            display: 'block',
            textAlign: 'center',
            color: 'rgba(15, 23, 42, 0.62)',
          }}
        >
          {LABELS.incompleteHint}
        </Typography>
      )}
    </Paper>
  );
}
