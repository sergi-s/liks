import React from "react";
import { Box, Typography } from "@mui/material";

export default function Card9({ content }) {
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
        padding: "20px",
        minHeight: "200px",
        textAlign: "center",
      }}
    >
      <img
        loading="lazy"
        src={content.image}
        alt="Rheometer"
        style={{
          width: "75%",
          maxWidth: "100%",
          marginBottom: "20px",
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
          marginTop: "10px",
        }}
      >
        {content.header}
      </Typography>
    </Box>
  );
}
