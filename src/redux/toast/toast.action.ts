import { showToast } from './toast.slice';

export const toast = {
  success: (message: string) => showToast({ message, severity: 'success' }),
  error: (message: string) => showToast({ message, severity: 'error' }),
  warning: (message: string) => showToast({ message, severity: 'warning' }),
  info: (message: string) => showToast({ message, severity: 'info' }),
};
