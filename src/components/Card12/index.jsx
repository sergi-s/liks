import { Grid, Typography } from "@mui/material";

export default function CardA7a(content, index = 0) {
  const boxShadow = `10px 10px 0px -2px ${(index % 2) ? 'rgba(90, 165, 255, 0.53)' : 'rgba(255, 179, 34, 0.52)'}`

  return (
    <Grid
      container
      item
      key={content.id}
      sx={{
        display: 'flex',
        width: '100%',
        padding: '3.125rem 1.25rem',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '1.25rem',
        background: `#F1F4F6`,
        boxShadow,
        marginBottom: '25px',
      }}
    >
      <Grid item xs={12} md={3} >
        <img
          loading='lazy'
          src={content.image}
          alt='logo'
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '0.9375rem',
          }}
        />
      </Grid>

      <Grid item xs={12} md={9} container spacing={2} sx={{ padding: "0px 30px" }}>
        <Grid item xs={12}>
          <Typography
            sx={{
              justifyContent: 'center',
              textAlign: ['center', 'left'],
              font: '800 28px Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              overflowWrap: 'break-word',
            }}
          >
            {content.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              justifyContent: 'center',
              color: '#10417a',
              alignSelf: 'stretch',
              maxWidth: '100%',
              margin: '20px 0 30px',
              font: '500 14px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            }}
          >
            {content.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

} 