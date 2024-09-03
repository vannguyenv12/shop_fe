import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {
  createTheme,
  ThemeProvider,
  styled,
  PaletteMode,
} from '@mui/material/styles';
import TemplateFrame from './TemplateFrame';
import { Link } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: 4,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

const initialFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default function SignUp() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });
  const [fields, setFields] = React.useState(initialFields);
  const [fieldErrors, setFieldErrors] = React.useState(initialFields);

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const validateInputs = () => {
    const errors = { ...initialFields };
    let isValid = true;

    if (!fields.email || !/\S+@\S+\.\S+/.test(fields.email)) {
      errors.email = 'Please provide valid email';
      isValid = false;
    } else {
      errors.password = '';
      isValid = true;
    }

    if (!fields.password || fields.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      errors.password = '';
      isValid = true;
    }

    if (!fields.firstName || fields.firstName.length < 1) {
      errors.firstName = 'First name must be at least 1 character';
      isValid = false;
    } else {
      errors.firstName = '';
      isValid = true;
    }

    if (!fields.lastName || fields.lastName.length < 1) {
      errors.lastName = 'Last name must be at least 1 character';
      isValid = false;
    } else {
      errors.lastName = '';
      isValid = true;
    }

    setFieldErrors(errors);

    return isValid;
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields((prevFields) => {
      return {
        ...prevFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <TemplateFrame>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />

        <SignUpContainer direction='column' justifyContent='space-between'>
          <Stack
            sx={{
              justifyContent: 'center',
              height: '100dvh',
              p: 2,
            }}
          >
            <Card variant='outlined'>
              <Typography
                component='h1'
                variant='h4'
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
              >
                Sign up
              </Typography>
              <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <FormControl>
                  <FormLabel htmlFor='name'>First name</FormLabel>
                  <TextField
                    autoComplete='firstName'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    placeholder='Jon'
                    onChange={handleFieldChange}
                    error={Boolean(fieldErrors.firstName)}
                    helperText={fieldErrors.firstName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='name'>Last name</FormLabel>
                  <TextField
                    autoComplete='lastName'
                    name='lastName'
                    required
                    fullWidth
                    id='lastName'
                    placeholder='Snow'
                    onChange={handleFieldChange}
                    error={Boolean(fieldErrors.lastName)}
                    helperText={fieldErrors.lastName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    placeholder='your@email.com'
                    name='email'
                    autoComplete='email'
                    variant='outlined'
                    onChange={handleFieldChange}
                    error={Boolean(fieldErrors.email)}
                    helperText={fieldErrors.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    placeholder='••••••'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    variant='outlined'
                    onChange={handleFieldChange}
                    error={Boolean(fieldErrors.password)}
                    helperText={fieldErrors.password}
                  />
                </FormControl>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  onClick={validateInputs}
                >
                  Sign up
                </Button>
                <Typography sx={{ textAlign: 'center' }}>
                  Already have an account?{' '}
                  <span>
                    <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                      Sign in
                    </Link>
                  </span>
                </Typography>
              </Box>
            </Card>
          </Stack>
        </SignUpContainer>
      </ThemeProvider>
    </TemplateFrame>
  );
}
