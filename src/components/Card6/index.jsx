import React from 'react'
import { Grid, Typography } from '@mui/material'

import Image from '../src/assets/images/drilling1.png'
const content = {
  shadowColor1: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
  shadowColor2: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
  image: Image,
  header: 'Lost-Circulation Materials',
  text: 'It is employed to manage and prevent lost circulation arising from fractures and broken formations. Lost-circulation materials encompass any substance that seals or forms a bridge against permeable or fractured formations to impede the loss of the entire drilling fluid. A wide array of materials has been utilized to bridge, mat, and/or plug voids to address the challenge of circulation loss. These materials can be categorized into four groups: fibrous materials, flake materials, granular materials, and combinations that include fibrous, flake, and granular components.'
}

export default function Card6 ({ content }) {
  return (
    <Grid
      sx={{
        color: '#F1F4F6',
        justifyContent: 'center',
        borderRadius: '20px',
        boxShadow: `${content.shadowColor}`,
        backgroundColor: '#f1f4f6',
        padding: '50px',
        width: '1613px',
        height: '440px'
      }}
    >
      <Grid
        container
        sx={{
          gap: '20px',
          display: 'flex'
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            padding: '10px',
            width: '433.84px',
            height: '320px'
          }}
        >
          <img
            loading='lazy'
            src={content.image}
            style={{
              overflow: 'hidden',
              borderRadius: '15px'
            }}
            alt='Lost Circulation Materials'
          />
        </Grid>
        <Grid
          item
          sx={{
            marginLeft: '20px',
            width: '1039px',
            height: '320px'
          }}
        >
          <div
            sx={{
              display: 'flex',
              marginTop: '64px',
              flexDirection: 'column'
            }}
          >
            <Typography
              variant='h2'
              sx={{
                justifyContent: 'center',
                color: '#000',
                whiteSpace: 'nowrap',
                fontFamily:
                  'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '32px'
              }}
            >
              {content.header}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                justifyContent: 'center',
                color: '#000',
                marginTop: '24px',
                fontFamily:
                  'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              {content.text}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
