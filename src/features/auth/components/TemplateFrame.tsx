import * as React from 'react';

import Box from '@mui/material/Box';

interface TemplateFrameProps {
  children: React.ReactNode;
}

export default function TemplateFrame({ children }: TemplateFrameProps) {
  return (
    <>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </>
  );
}
