import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Config
import { API_URL } from '../config/api';

// Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface ProductsProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Products = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductsProps[]>([]);

  const fetchProducts = () => {
    axios
      .get<ProductsProps[]>(`${API_URL}/products`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id='products'>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          paddingX: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h5'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'uppercase',
            }}
          >
            پروژه‌ها
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}
          >
            مجموعه‌ای از پروژه‌های ما را بررسی کنید
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {products.map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box
                  component={Card}
                  padding={4}
                  width={1}
                  height={1}
                  bgcolor={theme.palette.background.paper}
                  onClick={() => navigate(`/products/${item.id}`)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: theme.palette.background.default,
                      color: theme.palette.common.white,
                      transform: 'translateY(-8px)',
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <Box display='flex' flexDirection='column'>
                    <Typography
                      variant='h6'
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography color='inherit'>{item.description}</Typography>
                  </Box>
                  <Box display='block' width={1} height={1}>
                    <Card
                      sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: 'none',
                        bgcolor: 'transparent',
                        backgroundImage: 'none',
                      }}
                    >
                      <CardMedia
                        title=''
                        image={item.image}
                        sx={{
                          position: 'relative',
                          height: 320,
                          overflow: 'hidden',
                          borderRadius: 2,
                          filter: 'brightness(0.7)',
                          marginTop: 4,
                          '&:hover': {
                            filter: 'brightness(1)',
                            transform: 'scale(1.05)',
                            transition: 'all 0.3s ease-in-out',
                          },
                        }}
                      />
                    </Card>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
