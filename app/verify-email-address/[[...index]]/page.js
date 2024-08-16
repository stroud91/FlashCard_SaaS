'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box, Typography, Button } from '@mui/material';
import { useClerk, useUser } from '@clerk/nextjs';

export default function VerifyEmailAddress() {
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const { sendEmailVerification } = useClerk();

  useEffect(() => {
    if (user && !user.emailAddresses[0]?.verified) {
      sendEmailVerification();
      setEmailSent(true);
    }
  }, [user]);

  const handleResendVerification = async () => {
    try {
      await sendEmailVerification();
      alert('Verification email sent!');
    } catch (error) {
      console.error('Failed to resend verification email:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4">Verify Your Email Address</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {emailSent
            ? 'We have sent a verification email to your address. Please check your inbox.'
            : 'Please verify your email address to continue.'}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleResendVerification}
      >
        Resend Verification Email
      </Button>
      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={() => router.push('/')}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
