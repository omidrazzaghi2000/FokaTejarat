import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Config
import { API_URL } from '../config/api';

// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

// Material Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ProductDetailProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductDetailPage = (): JSX.Element => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      axios
        .get<ProductDetailProps>(`${API_URL}/products/${id}/`, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError('محصول یافت نشد');
          setLoading(false);
        });
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Container>
        <Box
          sx={{
            paddingY: 10,
            textAlign: 'center',
          }}
        >
          <Typography variant='h5' color='error' gutterBottom>
            {error || 'محصول یافت نشد'}
          </Typography>
          <Button
            component={Link}
            to='/products'
            variant='contained'
            endIcon={<ArrowBackIcon />}
            sx={{
              marginTop: 2,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            بازگشت به لیست محصولات
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        paddingTop: 5,
        paddingBottom: 10,
        paddingX: 2,
        backgroundColor: theme.palette.background.default,
        minHeight: '80vh',
      }}
    >
      <Container maxWidth='lg'>
        <Button
          onClick={() => navigate('/products')}
          endIcon={<ArrowBackIcon />}
          sx={{
            marginBottom: 4,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main + '20',
            },
          }}
        >
          بازگشت به لیست محصولات
        </Button>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            gap: 4,
          }}
        >
          <Box
            sx={{
              flex: { xs: 1, md: '0 0 50%' },
            }}
          >
            <Card
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: `0 8px 24px ${theme.palette.primary.main}20`,
              }}
            >
              <CardMedia
                component='img'
                image={product.image}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Box>

          <Box
            sx={{
              flex: { xs: 1, md: '0 0 50%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h3'
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                marginBottom: 3,
              }}
            >
              {product.name}
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                marginBottom: 4,
              }}
            >
              {product.description}
            </Typography>

            <Box
              sx={{
                padding: 3,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                border: `1px solid ${theme.palette.primary.main}40`,
              }}
            >
              <Typography
                variant='body2'
                sx={{
                  color: theme.palette.text.secondary,
                  marginBottom: 1,
                }}
              >
                شناسه محصول:
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                #{product.id}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;

