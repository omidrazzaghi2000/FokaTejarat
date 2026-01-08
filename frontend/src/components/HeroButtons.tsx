// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Material Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';

const HeroButtons = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent='center'
        marginTop={4}
      >
        <Button
          variant='contained'
          size='large'
          fullWidth={isMd ? false : true}
          href='#about'
          startIcon={<ArrowForwardIcon />}
          disableElevation={true}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: '15px 30px',
            marginLeft: '15px',
            fontSize: '16px',
            textTransform: 'uppercase',
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: `0 4px 14px 0 ${theme.palette.primary.main}40`,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              border: `2px solid ${theme.palette.primary.dark}`,
              boxShadow: `0 6px 20px 0 ${theme.palette.primary.main}60`,
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          بیشتر بدانید
        </Button>
        {/* <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginRight={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            variant='outlined'
            size='large'
            fullWidth={isMd ? false : true}
            href='#'
            endIcon={<PlayIcon />}
            disableElevation={true}
            sx={{
              padding: '15px 30px',
              marginLeft: '15px',
              fontSize: '16px',
              textTransform: 'uppercase',
              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 4px 14px 0 ${theme.palette.primary.main}40`,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            تماشای دمو
          </Button>
        </Box> */}
      </Box>
    </>
  );
};

export default HeroButtons;
