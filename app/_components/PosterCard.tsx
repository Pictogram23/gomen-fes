import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'

interface PosterCardProps {
  name: string
  url: string
  comment: string
}

const PosterCard = ({ name, url, comment }: PosterCardProps) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {url}
        </Typography>
        <Typography variant='body2'>{comment}</Typography>
      </CardContent>
    </React.Fragment>
  )
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant='outlined'>{card}</Card>
      </Box>
    </>
  )
}

export default PosterCard
