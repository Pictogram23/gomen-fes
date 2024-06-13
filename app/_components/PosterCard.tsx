import CloseIcon from '@mui/icons-material/Close'
import {
  Avatar,
  Button,
  ButtonBase,
  Grid,
  Link,
  Modal,
  TableBody,
  TableCell,
  TableRow,
  createTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'

interface PosterCardProps {
  name: string
  twitter_id: string
  roll: string
  exception: string
  others: string
  credit: string
  earning: string
  original: string
  comment: string
  best: string
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
})

const PosterCard = ({
  name,
  twitter_id,
  roll,
  exception,
  others,
  credit,
  earning,
  original,
  comment,
  best,
}: PosterCardProps) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const row_key_list = [
    '担当',
    'パロディ禁止曲',
    'ニコニコ以外への投稿',
    'クレジットの記載',
    '収益化',
    'オリジナルライセンス',
    'コメント',
    '一番パロディしてほしい曲',
  ]
  const row_content_list = [roll, exception, others, credit, earning, original, comment, best]
  const card = (
    <React.Fragment>
      <ButtonBase onClick={() => setOpen(true)}>
        <CardContent>
          <Grid container justifyContent='center'>
            <Avatar
              src={'/icons/' + twitter_id + '.jpg'}
              variant='square'
              sx={{ minWidth: 75, minHeight: 75, mr: 1 }}
            />
            <Box display='flex' alignItems='center'>
              <Box width={200}>
                <Typography variant='body1' mt={0.5}>
                  {name}
                </Typography>
                <Link sx={{ mb: 1.5 }} color={'text.secondary'}>
                  {twitter_id}
                </Link>
              </Box>
            </Box>
          </Grid>
        </CardContent>
      </ButtonBase>
    </React.Fragment>
  )
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            height: '80vh',
            overflowY: 'scroll',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ textAlign: 'right' }}>
            <ButtonBase onClick={() => setOpen(false)}>
              <CloseIcon sx={{ width: 40, height: 40 }} />
            </ButtonBase>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Grid container justifyContent='center'>
              <Avatar
                src={'/icons/' + twitter_id + '.jpg'}
                variant='square'
                sx={{
                  minWidth: 150,
                  minHeight: 150,
                  mr: { xs: 0, md: 5 },
                  mb: { xs: 3, md: 0 },
                }}
              />
              <Box display='flex' alignItems='center'>
                <Box width={{ xs: '80vw', md: '100%' }}>
                  <Typography variant='h3'>{name}</Typography>
                  {twitter_id.indexOf('@') != 0 ? (
                    <Link variant='h6' sx={{ mb: 1.5 }} color={'text.secondary'}>
                      {twitter_id}
                    </Link>
                  ) : (
                    <Link
                      variant='h6'
                      href={'https://x.com/' + twitter_id}
                      sx={{ mb: 1.5 }}
                      color={'text.secondary'}
                    >
                      {twitter_id}
                    </Link>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid container justifyContent='center' mt={5}>
              <Box width={{ xs: '100%', sm: '75%', lg: '50%' }} display='flex' alignItems='center'>
                <TableBody>
                  {row_key_list.map((value, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell width='60%' component='th' scope='row'>
                          {value}
                        </TableCell>
                        <TableCell align='center'>{row_content_list[index]}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ minWdth: 275, padding: 1 }}>
        <Card variant='outlined'>{card}</Card>
      </Box>
    </>
  )
}

export default PosterCard
