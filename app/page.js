import Link from 'next/link';
import { Container, Button, Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box className="hero">
        <Typography variant="h2" component="h1" gutterBottom>
          Learn Smarter, Not Harder
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Generate and manage your flashcards with ease, and optimize your study sessions.
        </Typography>
        <Button variant="contained" color="primary" href="/get-started">
          Get Started
        </Button>
      </Box>

      <Box id="features" className="features">
        <Box className="feature">
          <Typography variant="h4" component="h2">
            AI-Powered Flashcards
          </Typography>
          <Typography variant="body1" component="p">
            Transform your notes into flashcards using advanced AI technology.
          </Typography>
          <Button variant="outlined" href="/learn-more">
            Learn More
          </Button>
        </Box>
        <Box className="feature">
          <Typography variant="h4" component="h2">
            Track Your Progress
          </Typography>
          <Typography variant="body1" component="p">
            Monitor your study habits and improve over time with detailed analytics.
          </Typography>
          <Button variant="outlined" href="/learn-more">
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
