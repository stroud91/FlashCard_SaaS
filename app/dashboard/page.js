'use client';

import { useRouter } from 'next/navigation';
import { Container, Grid, Typography, Card, CardActionArea, CardContent } from '@mui/material';

export default function Dashboard() {
  const router = useRouter();

  const handleNewSet = () => {
    router.push('/generate');
  };

  const handleViewHistory = () => {
    router.push('/history');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to your Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea onClick={handleNewSet}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Create New Flashcard Set
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea onClick={handleViewHistory}>
              <CardContent>
                <Typography variant="h5" component="div">
                  View History & Statistics
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
