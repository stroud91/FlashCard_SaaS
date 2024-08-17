'use client';

import React from 'react';
import { 
  ClerkProvider,  
  SignedOut,
  SignedIn,
  UserButton
} from '@clerk/nextjs';
import { Container, Typography, Button } from '@mui/material';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
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
                  <SignedOut>
                    <Button href="/sign-in">Sign In</Button>
                    <Button href="/sign-up">Sign Up</Button>
                  </SignedOut>
                  <SignedIn>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/generate">Generate</a>
                    <a href="/flashcards">Flashcards</a>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                </div>
              </nav>
            </header>
            <main className="content-wrap">{children}</main>
            <footer className="footer">
              <p>&copy; 2024 Flashcard SaaS. All rights reserved.</p>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
