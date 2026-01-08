import { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

// Components
import HeroButtons from './HeroButtons';
import Spacer from './Spacer';
import { API_URL } from '../config/api';

import backbg from "../assets/images/hero-bg.jpg";

interface HeroProps {
  title: string;
  description: string;
}

const Hero = (): JSX.Element => {
  const theme = useTheme();

  const [hero, setHero] = useState<HeroProps[]>([]);

  const fetchHero = () => {
    axios
      .get<HeroProps[]>(`${API_URL}/hero`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setHero(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return (
    <div id='home'>
      <Box
        sx={{
          paddingY: 20,
          paddingX: 2,
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `url(${backbg})`
        }}
        
      >
        {hero.slice(0, 1).map((item, i) => (
          <Container
            key={i}
            maxWidth='md'
            
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box marginBottom={2}>
              <Typography
                align='center'
                color={theme.palette.text.primary}
                variant='h3'
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant='h6'
                component='p'
                color={theme.palette.text.secondary}
                sx={{ fontWeight: 400 }}
              >
                {item.description}
              </Typography>
            </Box>
            <HeroButtons />
          </Container>
        ))}
      </Box>
      <Spacer sx={{ paddingTop: 6 }} />
    </div>
  );
};

export default Hero;
