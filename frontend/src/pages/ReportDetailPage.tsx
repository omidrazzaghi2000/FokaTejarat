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

interface ReportDetailProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ReportDetailPage = (): JSX.Element => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [report, setReport] = useState<ReportDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = () => {
      setLoading(true);
      axios
        .get<ReportDetailProps>(`${API_URL}/reports/${id}/`, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then((response) => {
          setReport(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError('گزارش یافت نشد');
          setLoading(false);
        });
    };

    if (id) {
      fetchReport();
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

  if (error || !report) {
    return (
      <Container>
        <Box
          sx={{
            paddingY: 10,
            textAlign: 'center',
          }}
        >
          <Typography variant='h5' color='error' gutterBottom>
            {error || 'گزارش یافت نشد'}
          </Typography>
          <Button
            component={Link}
            to='/reports'
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
            بازگشت به لیست گزارش‌ها
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
          onClick={() => navigate('/reports')}
          endIcon={<ArrowBackIcon />}
          sx={{
            marginBottom: 4,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main + '20',
            },
          }}
        >
          بازگشت به لیست گزارش‌ها
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
                image={report.image}
                alt={report.name}
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
              {report.name}
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
                marginBottom: 4,
              }}
            >
              {report.description}
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
                شناسه گزارش:
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                #{report.id}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ReportDetailPage;

