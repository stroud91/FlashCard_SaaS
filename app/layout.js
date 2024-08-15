'use client';

import React, { useState } from 'react';
import { 
  ClerkProvider,  
  SignIn,
  SignUp
} from '@clerk/nextjs';
import { Container, Typography, Button, Modal, Box } from '@mui/material';
import '../styles/global.css';



export default function RootLayout({ children }) {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="page-container">
            <header>
              <nav>
                <div className="logo">
                  <a href="/">Flashcard SaaS</a>
                </div>
                <div className="menu">
                  <a href="/features">Features</a>
                  <a href="/pricing">Pricing</a>
                  <a href="/contact">Contact</a>
                  <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                  <Button onClick={() => setOpenSignUp(true)}>Sign Up</Button>
                </div>
              </nav>
            </header>
            <main className="content-wrap">{children}</main>
            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
            <Box 
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: '8px',
              }}
            >
                <SignIn />
              </Box>
            </Modal>
            <Modal open={openSignUp} onClose={() => setOpenSignUp(false)}>
            <Box 
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: '8px',
              }}
            >
                <SignUp />
              </Box>
            </Modal>
            <footer className="footer">
              <p>&copy; 2024 Flashcard SaaS. All rights reserved.</p>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
