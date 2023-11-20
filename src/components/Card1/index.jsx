import { Grid, Button, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Card1({ content, button }) {
  return (
    <Grid
      sx={{
        width: '100%',
        maxWidth: '774px',
        height: 'auto',
        borderRadius: '20px',
        backgroundColor: '#f1f4f6',
        padding: '40px',
        boxSizing: 'border-box',
        margin: '0 auto',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: '#000',
          letterSpacing: '-1.5px',
          width: '100%',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 800,
          fontSize: '45px',
          lineHeight: '56px',
          margin: '0.2px 0 10.8px 0',
        }}
      >
        {content.header}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          justifyContent: 'center',
          color: '#000',
          letterSpacing: '-0.4px',
          marginTop: '20px',
          maxWidth: '100%',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '27px',
        }}
      >
        {content.text}
      </Typography>
      <Button
        variant='contained'
        sx={{
          marginTop: '23.8px',
          width: '100%',
          maxWidth: '271px',
          height: '58px',
          color: '#fff',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '18px',
          borderRadius: '10px',
          backgroundColor: '#10417A',
          textTransform: 'none',
        }}
        endIcon={<ArrowRightIcon />}
      >
        {button.text}
      </Button>
    </Grid>
  );
}

export default Card1;
