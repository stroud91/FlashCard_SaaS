'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { useUser } from '@clerk/nextjs';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import './flashcardStyles.css';  

export default function Flashcard() {
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const searchParams = useSearchParams();
  const setId = searchParams.get('id');
  const { user } = useUser();

  useEffect(() => {
    if (!setId || !user) return;

    async function getFlashcards() {
      const colRef = collection(doc(collection(db, 'users'), user.id), setId);
      const docs = await getDocs(colRef);

      const flashcards = [];
      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });

      setFlashcards(flashcards);
    }

    getFlashcards();
  }, [setId, user]);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ mt: 4, mb: 2 }}>
        Flashcards
      </Typography>
      <Grid container spacing={3}>
        {flashcards.map((flashcard) => (
          <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                <CardContent>
                  <Box className={`flashcard ${flipped[flashcard.id] ? 'flipped' : ''}`}>
                    <div className="flashcard-inner">
                      <div className="flashcard-front">
                        <Typography variant="h6">Front:</Typography>
                        <Typography>{flashcard.front}</Typography>
                      </div>
                      <div className="flashcard-back">
                        <Typography variant="h6">Back:</Typography>
                        <Typography>{flashcard.back}</Typography>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
