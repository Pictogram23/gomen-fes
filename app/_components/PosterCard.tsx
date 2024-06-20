import CloseIcon from '@mui/icons-material/Close'
import XIcon from '@mui/icons-material/X'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {
  Avatar,
  ButtonBase,
  Grid,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  createTheme,
  useMediaQuery,
} from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import NiconicoIcon from '../niconico.svg'

interface PosterCardProps {
  name: string
  twitter_id: string
  roll: string
  exception: string
  include: string
  others: string
  credit: string
  earning: string
  after: string
  original: string
  comment: string
  best: string
  best_link: string
  niconico: string
  youtube: string
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
  include,
  others,
  credit,
  earning,
  after,
  original,
  comment,
  best,
  best_link,
  niconico,
  youtube,
}: PosterCardProps) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const matches: boolean = useMediaQuery('(min-width:768px)')
  const row_key_list = [
    '担当',
    'パロディ禁止曲',
    'パロディが含まれる曲',
    'ニコニコ以外への投稿',
    'クレジットの記載',
    '収益化',
    '応募後に投稿された曲',
    'オリジナルライセンス',
    'コメント',
    '一番パロディしてほしい曲',
  ]
  const row_content_list = [
    roll,
    exception,
    include,
    others,
    credit,
    earning,
    after,
    original,
    comment,
    best,
    best_link,
    niconico,
    youtube,
  ]
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
            width: '90vw',
            height: '90vh',
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
                    <>
                      {twitter_id != '' && (
                        <IconButton href={'https://x.com/' + twitter_id} target='_blank'>
                          <XIcon sx={{ color: 'black' }} />
                        </IconButton>
                      )}
                      {niconico != '' && (
                        <IconButton href={niconico} target='_blank'>
                          <SvgIcon
                            component={NiconicoIcon}
                            sx={{ color: 'black' }}
                            inheritViewBox
                          />
                        </IconButton>
                      )}
                      {youtube != '' && (
                        <IconButton href={youtube} target='_blank'>
                          <YouTubeIcon sx={{ color: 'red' }} />
                        </IconButton>
                      )}
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid container justifyContent='center' mt={5}>
              <Box width={{ xs: '100%', sm: '95%', lg: '60%' }} display='flex' alignItems='center'>
                {matches ? (
                  <TableContainer>
                    <Table sx={{ minWidth: '100%' }}>
                      <TableBody>
                        <TableRow>
                          <TableCell align='left' width={'50%'} component='th' scope='row'>
                            {row_key_list[9]}
                          </TableCell>
                          <TableCell align='center'>
                            <Link href={best_link} target='_blank'>
                              {row_content_list[9]}
                            </Link>
                          </TableCell>
                        </TableRow>
                        {row_key_list.map((value, index) => {
                          if (index == 9) {
                            return
                          }
                          return (
                            <TableRow key={index}>
                              <TableCell align='left' width={'50%'} component='th' scope='row'>
                                {value}
                              </TableCell>
                              <TableCell align='center'>{row_content_list[index]}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <List sx={{ minWidth: '100%' }}>
                    <ListItem>
                      <ListItemText
                        primary={row_key_list[9]}
                        secondary={
                          <Link href={best_link} target='_blank'>
                            {row_content_list[9]}
                          </Link>
                        }
                      />
                    </ListItem>
                    {row_key_list.map((value, index) => {
                      if (index == 9) {
                        return
                      }
                      return (
                        <ListItem key={index}>
                          {row_content_list[index] == '' ? (
                            <ListItemText primary={value} secondary='なし' />
                          ) : (
                            <ListItemText primary={value} secondary={row_content_list[index]} />
                          )}
                        </ListItem>
                      )
                    })}
                  </List>
                )}
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
