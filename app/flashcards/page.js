'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useUser } from '@clerk/nextjs';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export  function Flashcards() {
  const [flashcardSets, setFlashcardSets] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    async function getFlashcardSets() {
      if (!user) return;

      const docRef = doc(collection(db, 'users'), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcardSets || [];
        setFlashcardSets(collections);
      }
    }

    getFlashcardSets();
  }, [user]);

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" sx={{ mt: 4, mb: 2 }}>
        Your Flashcard Sets
      </Typography>
      <Grid container spacing={3}>
        {flashcardSets.map((flashcardSet, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcardSet.name)}>
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
