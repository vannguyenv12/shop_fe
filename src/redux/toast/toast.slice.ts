import { createSlice } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material/Alert';

interface IToastState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const initialState: IToastState = {
  open: false,
  message: '',
  severity: 'info',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || 'info';
    },
    hideToast: (state) => {
      state.open = false;
      state.message = '';
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
