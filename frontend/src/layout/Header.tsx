import { Link } from 'react-router-dom';

// Material UI
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// Material Icons
import StormIcon from '@mui/icons-material/Storm';
import MenuIcon from '@mui/icons-material/Menu';

// Components
import CustomButton from '../components/CustomButton';

interface HeaderProps {
  onSidebarOpen: () => void;
}

const Header = ({ onSidebarOpen }: HeaderProps): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        color='transparent'
        position='sticky'
        sx={{
          border: 0,
          padding: '10px 0',
          marginBottom: '5px',
          top: 'auto',
          boxShadow:
            '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <IconButton size='large' disabled>
              <StormIcon
                sx={{
                  color: theme.palette.primary.main,
                  height: 40,
                  width: 40,
                }}
              />
              <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    marginRight: '10px',
                  }}
                >
                  فوکا تجارت
                </Typography>
              </Box>
            </IconButton>
          </Link>
          
          <Box
            sx={{
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          >
            <CustomButton href='/products' text='پروژه‌ها' />
            <CustomButton href='/articles' text='مقالات' />
            <CustomButton href='/reports' text='گزارش‌ها' />
            {/* <CustomButton href='#services' text='خدمات' /> */}
            {/* <CustomButton href='#pricing' text='قیمت‌گذاری' /> */}
            <CustomButton href='#about' text='درباره ما' />
            <CustomButton href='#contact' text='تماس با ما' />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { md: 'block', lg: 'none' },
            }}
            alignItems='center'
          >
            <Button
              onClick={() => onSidebarOpen()}
              aria-label='Menu'
              variant='outlined'
              sx={{
                borderRadius: 0,
                minWidth: 'auto',
                padding: 1,
                borderColor: alpha(theme.palette.divider, 0.2),
              }}
            >
              <MenuIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
