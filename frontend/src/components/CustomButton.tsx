import { Link, useLocation, useNavigate } from 'react-router-dom';

// Material UI
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface Props {
  href: string;
  text: string;
}

const CustomButton = ({ href, text }: Props): JSX.Element => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if href is a route (starts with /) or a hash link
  const isRoute = href.startsWith('/');
  const isHashLink = href.startsWith('#');
  const isOnHomePage = location.pathname === '/';

  const handleHashLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (isOnHomePage) {
      // If already on home page, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home first
      navigate('/');
      // Set hash in URL and wait for navigation to complete, then scroll
      setTimeout(() => {
        window.location.hash = href;
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  if (isHashLink) {
    return (
      <Button
        onClick={handleHashLinkClick}
        color='primary'
        variant='text'
        sx={{
          color: theme.palette.text.primary,
          textTransform: 'uppercase',
          marginX: 1.5,
          marginRight: '15px',
          '&:active': {
            color: theme.palette.primary.main,
          },
          '&:hover': {
            color: theme.palette.primary.main,
          },
        }}
      >
        {text}
      </Button>
    );
  }

  return (
    <Button
      component={isRoute ? Link : 'a'}
      to={isRoute ? href : undefined}
      href={!isRoute ? href : undefined}
      color='primary'
      variant='text'
      sx={{
        color: theme.palette.text.primary,
        textTransform: 'uppercase',
        marginX: 1.5,
        marginLeft: '15px',
        '&:active': {
          color: theme.palette.primary.main,
        },
        '&:hover': {
          color: theme.palette.primary.main,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
