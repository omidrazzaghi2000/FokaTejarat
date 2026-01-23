import { Link } from 'react-router-dom';

// Material UI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StormIcon from '@mui/icons-material/Storm';
import { useTheme } from '@mui/material/styles';

// Components
import CustomButton from '../components/CustomButton';

interface SidebarProps {
  onClose: () => void;
  open: boolean;
}

const Sidebar = ({ open, onClose }: SidebarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='right'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
       
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256,
          },
        }}
      >
        <Box height='100%'  style={{zIndex:10000}}>
          <Box width={1}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <StormIcon
                  sx={{
                    color: theme.palette.primary.main,
                    height: 40,
                    width: 40,
                  }}
                />
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    marginRight: 1,
                  }}
                >
                  فوکا تجارت
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box padding={2}>
            <Box paddingY={2}>
              <Box onClick={() => onClose()}>
                <CustomButton href='/products' text='پروژه‌ها' />
              </Box>
              <Box paddingY={1} onClick={() => onClose()}>
                <CustomButton href='/articles' text='مقالات' />
              </Box>
              <Box paddingY={1} onClick={() => onClose()}>
                <CustomButton href='/reports' text='گزارش‌ها' />
              </Box>
              {/* <Box paddingY={1} onClick={() => onClose()}>
                <CustomButton href='#services' text='خدمات' />
              </Box>
              <Box paddingY={1} onClick={() => onClose()}>
                <CustomButton href='#pricing' text='قیمت‌گذاری' />
              </Box> */}
              <Box paddingY={1} onClick={() => onClose()}>
                <CustomButton href='#about' text='درباره ما' />
              </Box>
              <Box paddingY={1} onClick={() => onClose()}>
                <CustomButton href='#contact' text='تماس با ما' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
