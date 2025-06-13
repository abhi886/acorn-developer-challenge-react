'use client'; // Error components must be Client Components in Next js

import { Container, Box, Typography, Button } from '@mui/material';
import { FunctionComponent, useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary: FunctionComponent<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: 384, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 6,
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Oops, Something went wrong!
        </Typography>
        <Button variant="outlined" color="primary" onClick={() => reset()}>
          Try Again
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorBoundary;
