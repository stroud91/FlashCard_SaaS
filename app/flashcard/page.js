'use client';
import { useState, useEffect } from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import './flashcardStyles.css';  

const Flashcard = ({ front, back }) =>  {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);  
    };

    return (
        <Container maxWidth="sm">
            <Card>
                <CardActionArea onClick={handleCardClick}>
                    <CardContent>
                        <Box className={`flashcard ${flipped ? 'flipped' : ''}`}>
                            <div className="flashcard-inner">
                                <div className="flashcard-front">
                                    <Typography variant="h6">Front:</Typography>
                                    <Typography>{front}</Typography>
                                </div>
                                <div className="flashcard-back">
                                    <Typography variant="h6">Back:</Typography>
                                    <Typography>{back}</Typography>
                                </div>
                            </div>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}

export default Flashcard;