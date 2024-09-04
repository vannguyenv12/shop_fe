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
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFieldsInput } from '../interfaces/AuthInterface';
import { schema } from '../schemas/AuthSchema';
import useRegisterMutation from '../hooks/useRegisterMutation';

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

export default function SignUp() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const defaultTheme = createTheme({ palette: { mode } });
  const mutation = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFieldsInput>({
    resolver: yupResolver(schema),
  });

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

  const onSubmit: SubmitHandler<IFieldsInput> = async (data) => {
    const authData = { ...data, avatar: '' } as IAuthPayload;

    mutation.mutate(authData);
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
                onSubmit={handleSubmit(onSubmit)}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <FormControl>
                  <FormLabel htmlFor='name'>First name</FormLabel>
                  <TextField
                    autoComplete='firstName'
                    fullWidth
                    id='firstName'
                    placeholder='Jon'
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                    {...register('firstName')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='name'>Last name</FormLabel>
                  <TextField
                    autoComplete='lastName'
                    fullWidth
                    id='lastName'
                    placeholder='Snow'
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                    {...register('lastName')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <TextField
                    fullWidth
                    id='email'
                    placeholder='your@email.com'
                    autoComplete='email'
                    variant='outlined'
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    {...register('email')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <TextField
                    fullWidth
                    placeholder='••••••'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    variant='outlined'
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    {...register('password')}
                  />
                </FormControl>
                <Button type='submit' fullWidth variant='contained'>
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
