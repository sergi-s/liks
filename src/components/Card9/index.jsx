import React from "react";
import { Box, Typography } from "@mui/material";

// import SVG from '../src/assets/svg/SVG.svg'
// const content={
//   shadowColor: "10px 10px 0px -2px rgba(255, 179, 34, 0.52)",
//   image: SVG,
//   header: 'HP/HT Rheometer',
// }

export default function Card9({content}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: "20px",
        boxShadow: `${content.shadowColor}`,
        backgroundColor: "#f1f4f6",
        padding: "50px",
        height:"170px"
      }}
    >
      <img
        loading="lazy"
        src={content.image}
        alt="Rheometer"
        style={{
          width: "95px",
        }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#000",
          fontFamily: "Manrope, -apple-system, Roboto, Helvetica, sans-serif",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "24px",
          marginTop: "20px"
        }}
      >
        {content.header}
      </Typography>
    </Box>
  );
}