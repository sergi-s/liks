import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Card3({content}) {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          borderRadius: '20px',
          backgroundColor: "rgba(255, 255, 255, 0.09)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 20px",
          width: "287.25px",
          height: "196px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "70px",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            loading="lazy"
            src={content.image}
            alt="Powder"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              overflow: "hidden",
            }}
          />      
          <Typography
            sx={{
              justifyContent: "center",
              color: "#fff",
              textAlign: "center",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
              fontFamily: "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              marginTop: "20px",
            }}
          >
            {content.text1}
          </Typography>
          <Typography
            sx={{
              justifyContent: "center",
              color: "#fff",
              textAlign: "center",
              letterSpacing: "-0.2px",
              fontFamily: "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
            }}
          >
            {content.text2}
          </Typography>
        </Box>       
      </Box>
    </Container>
  );
}

export default Card3;