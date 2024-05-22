import { Avatar, Grid, Link } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'

interface PosterCardProps {
  name: string
  twitter_id: string
}

const PosterCard = ({ name, twitter_id }: PosterCardProps) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Grid container justifyContent='center'>
          <Avatar
            src={'/icons/' + twitter_id + '.jpg'}
            variant='square'
            sx={{ minWidth: 75, minHeight: 75 }}
          />
          <Box display='flex' alignItems='center'>
            <Box minWidth={200}>
              <Typography variant='body1' mt={0.5}>
                {name}
              </Typography>
              <Link href={'https://x.com/' + twitter_id} sx={{ mb: 1.5 }} color={'text.secondary'}>
                {twitter_id}
              </Link>
            </Box>
          </Box>
        </Grid>
      </CardContent>
    </React.Fragment>
  )
  return (
    <>
      <Box sx={{ minWidth: 275, padding: 1 }}>
        <Card variant='outlined'>{card}</Card>
      </Box>
    </>
  )
}

export default PosterCard
