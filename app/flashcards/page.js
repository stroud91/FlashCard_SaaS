'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function Flashcards() {
  const [flashcardSets, setFlashcardSets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getFlashcardSets() {
      setFlashcardSets(flashcardSets);
    }

    getFlashcardSets();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcardSets.map((flashcardSet, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcardSet.id)}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {flashcardSet.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
