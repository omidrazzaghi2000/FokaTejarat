import { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// Config
import { API_URL } from '../config/api';

// Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface AboutProps {
  value: number;
  suffix: string;
  description: string;
}

interface AboutTextProps{
  about_description:string
}

const About = (): JSX.Element => {
  const theme = useTheme();
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (
    isVisible: boolean | ((prevState: boolean) => boolean)
  ) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };

  const [about, setAbout] = useState<AboutProps[]>([]);
  const [abouttext, setAboutText] = useState<AboutTextProps[]>([{about_description:"..."}]);

  const fetchAbout = () => {
    axios
      .get<AboutProps[]>(`${API_URL}/about`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setAbout(response.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchAboutSubText = () =>{
    axios.get<AboutTextProps[]>(`${API_URL}/about/text`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setAboutText(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchAbout();
    fetchAboutSubText();
  }, []);

  return (
    <div id='about'>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 12,
          paddingX: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h5'
            align='center'
            color={theme.palette.text.primary}
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              textTransform: 'uppercase',
              marginBottom: 2,
            }}
          >
            درباره ما
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color={theme.palette.text.secondary}
            marginTop={theme.spacing(1)}
            gutterBottom
          >

            {abouttext[0].about_description }
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {about.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={1}
                  display='flex'
                  flexDirection='column'
                  boxShadow={0}
                >
                  <CardContent
                    sx={{
                      padding: { sm: 4 },
                    }}
                  >
                    <Box
                      marginBottom={4}
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                    >
                      <Typography variant='h4' color='primary' gutterBottom>
                        <Box fontWeight={600}>
                          <VisibilitySensor
                            onChange={(
                              isVisible:
                                | boolean
                                | ((prevState: boolean) => boolean)
                            ) => setViewPortVisibility(isVisible)}
                            delayedCall
                          >
                            <CountUp
                              duration={2}
                              end={viewPortEntered ? item.value : 0}
                              start={0}
                              suffix={item.suffix}
                            />
                          </VisibilitySensor>
                        </Box>
                      </Typography>
                      <Typography
                        component='p'
                        color={theme.palette.text.secondary}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;
