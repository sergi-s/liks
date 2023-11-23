import { Grid, Typography } from "@mui/material";

export const CardA7a = ({ index, title, source }) => {
    return (
        <Grid item key={index} xs={12} md={4} lg={3}
            style={{
                position: 'relative',
                borderRadius: '20px',
                border: '4px solid rgba(0, 26, 57, 0.93)',
                boxShadow: '10px 10px 0px -4px rgba(0, 26, 57, 0.93)',
                justifyContent: 'center',
                margin: '10px',
                overflow: 'hidden',
            }}
        >
            <img
                loading='lazy'
                src={source}
                alt=''
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '341px',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0, height: '70px',
                    right: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: '100%',
                        borderBottomLeftRadius: '20px',
                        borderBottomRightRadius: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(16, 65, 122, 1)',
                        fontFamily: 'Manrope',
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '25px',
                        letterSpacing: '0em',
                    }}
                >
                    {title}
                </Typography>
            </div>

        </Grid>
    );
};

