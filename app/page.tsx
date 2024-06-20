'use client'
import DehazeIcon from '@mui/icons-material/Dehaze'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  colors,
  createTheme,
  useMediaQuery,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import PosterCard from './_components/PosterCard'
import 'fontsource-noto-sans-jp/500.css'

type Poster = {
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
  furigana: string
  best: string
  best_link: string
  niconico: string
  youtube: string
}

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontSize: 18,
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
  },
  components: {
    MuiTextField: {
      variants: [{ props: { variant: 'outlined' }, style: {} }],
    },
    MuiCheckbox: {
      variants: [{ props: { color: 'primary' }, style: {} }],
    },
    MuiRadio: {
      variants: [{ props: { color: 'primary' }, style: {} }],
    },
    MuiSwitch: {
      variants: [{ props: { color: 'primary' }, style: {} }],
    },
    MuiList: {
      variants: [{ props: { dense: true }, style: {} }],
    },
    MuiTable: {
      variants: [{ props: { size: 'small' }, style: {} }],
    },
  },
  palette: {
    primary: colors.blue,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
})

export default function Home() {
  const [keyword, setKeyword] = useState<string>('')
  const [pickUp, setPickUp] = useState<Poster>()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const posterlist: Poster[] = require('./gomen-fes-posterlist.json')
  const matches: boolean = useMediaQuery('(min-width:600px)')

  useEffect(() => {
    if (pickUp == null) {
      const rand = Math.floor(Math.random() * posterlist.length)
      setPickUp(posterlist[rand])
    }
  }, [setPickUp, pickUp, posterlist])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <nav>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar>
                <Toolbar>
                  <Box sx={{ fontWeight: 'bold' }}>
                    <Typography variant='h6' color='inherit'>
                      ごめんなさい投稿祭
                    </Typography>
                  </Box>
                  <div style={{ flexGrow: 1 }}></div>
                  {matches ? (
                    <>
                      <Button color='inherit' href='#home'>
                        HOME
                      </Button>
                      <Button color='inherit' href='#join'>
                        JOIN
                      </Button>
                      <Button color='inherit' href='#about'>
                        ABOUT
                      </Button>

                      <Button color='inherit' href='#member'>
                        MEMBER
                      </Button>
                      <Button color='inherit' href='#rule'>
                        RULE
                      </Button>
                      <Button color='inherit' href='#faq'>
                        FAQ
                      </Button>
                    </>
                  ) : (
                    <>
                      <IconButton onClick={() => setDrawerOpen(true)}>
                        <DehazeIcon sx={{ color: 'white' }} />
                      </IconButton>
                      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
                          {[
                            ['HOME', '#home'],
                            ['JOIN', '#join'],
                            ['ABOUT', '#about'],
                            ['MEMBER', '#member'],
                            ['RULE', '#rule'],
                            ['FAQ', '#faq'],
                          ].map((props) => (
                            <ListItem key={props[0]} disablePadding>
                              <ListItemButton href={props[1]}>
                                <ListItemText primary={props[0]} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </Box>
                      </Drawer>
                    </>
                  )}
                </Toolbar>
              </AppBar>
            </Box>
          </nav>
        </header>
        <main>
          <div id='home'>
            <Toolbar />
            <Typography variant='h3' paddingTop={5}>
              ごめんなさい投稿祭
            </Typography>
            <Typography variant='h5' paddingTop={1}>
              ーパロディ曲を気軽に作ろう！ー
            </Typography>
            <Typography variant='h4' paddingTop={10} paddingBottom={1}>
              パロディおみくじ
            </Typography>
            <Container sx={{ width: 382 }}>
              {pickUp ? (
                <PosterCard
                  name={pickUp.name}
                  twitter_id={pickUp.twitter_id}
                  roll={pickUp.roll}
                  exception={pickUp.exception}
                  include={pickUp.include}
                  others={pickUp.others}
                  credit={pickUp.credit}
                  earning={pickUp.earning}
                  after={pickUp.after}
                  original={pickUp.original}
                  comment={pickUp.comment}
                  best={pickUp.best}
                  best_link={pickUp.best_link}
                  niconico={pickUp.niconico}
                  youtube={pickUp.youtube}
                />
              ) : (
                <></>
              )}
            </Container>
            <Typography variant='h4' color='red' paddingTop={10}>
              2024年9月20日〜23日開催予定！
            </Typography>
            <Typography variant='h4' paddingTop={10}>
              告知動画
            </Typography>
          </div>
          <div id='join'>
            <Container sx={{ paddingTop: 10 }}>
              <Link href='https://forms.gle/Hjzq8X5EYU72t8xRA' target='_blank' variant='h5'>
                パロディ元「応募」はこちら！
              </Link>
            </Container>
            <br />
            <Link href='https://forms.gle/q3tGoMsgwjsxYnW5A' target='_blank' variant='h5'>
              パロディ元「推薦」はこちら！
            </Link>
          </div>
          <div id='about'>
            <Typography variant='h4' paddingTop={10}>
              概要
            </Typography>
            <Container
              sx={{
                '@media screen and (min-width:1025px)': {
                  width: '60vw',
                },
              }}
            >
              <Typography variant='subtitle1' paddingTop={1}>
                投稿祭の運営が
                <span style={{ fontWeight: 'bold' }}>
                  事前にボカロPさんら(絵師さん等も含む)の方々に許可を取り
                </span>
                、 許可を取れた
                <span style={{ fontWeight: 'bold' }}>
                  ボカロPさんの曲のパロディをボカロP、絵師、動画師、調声師など みんなで行おう
                </span>
                という投稿祭です。よって、
                <span style={{ fontWeight: 'bold' }}>
                  著作権侵害などで訴えられる心配は
                  ありません。パロディは些細なもの含めどんな形でも構いません！
                </span>
              </Typography>
            </Container>
          </div>
          <div id='member'>
            <Toolbar />
            <Container>
              <Typography variant='h4' paddingBottom={3} paddingTop={3}>
                素敵な参加者たち
              </Typography>
              <TextField
                sx={{ mb: 5 }}
                label='Search'
                variant='outlined'
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Container>
            <Container>
              <Grid container spacing={2} justifyContent='center'>
                {posterlist.map((poster, index) => {
                  if (
                    poster.name.indexOf(keyword) != -1 ||
                    poster.twitter_id.indexOf(keyword) != -1 ||
                    poster.furigana.indexOf(keyword) != -1
                  ) {
                    return (
                      <Grid key={index}>
                        <PosterCard
                          name={poster.name}
                          twitter_id={poster.twitter_id}
                          roll={poster.roll}
                          exception={poster.exception}
                          include={poster.include}
                          others={poster.others}
                          credit={poster.credit}
                          earning={poster.earning}
                          after={poster.after}
                          original={poster.original}
                          comment={poster.comment}
                          best={poster.best}
                          best_link={poster.best_link}
                          niconico={poster.niconico}
                          youtube={poster.youtube}
                        />
                      </Grid>
                    )
                  }
                })}
              </Grid>
            </Container>
          </div>
          <div id='rule'>
            <Container sx={{ paddingTop: 10 }}>
              <Link href='#' variant='h5'>
                ルール(準備中)
              </Link>
            </Container>
          </div>
          <div id='faq'>
            <Container sx={{ paddingTop: 10 }}>
              <Link href='#' variant='h5'>
                FAQ(準備中)
              </Link>
            </Container>
          </div>
          <footer>
            <AppBar
              component='footer'
              position='static'
              sx={{ backgroundColor: 'black', marginTop: 10 }}
            >
              <Container maxWidth='md'>
                <Container sx={{ padding: 3 }}>
                  <Link href='https://x.com/gomennasai_fes' target='_blank' variant='body1'>
                    X(旧Twitter)
                  </Link>
                  <Link
                    href='https://twipla.jp/events/612120'
                    target='_blank'
                    variant='body1'
                    padding={3}
                  >
                    TwiPla
                  </Link>
                </Container>
                <Box sx={{ textAlign: 'center', paddingBottom: 3 }}>
                  <Typography>©2024 しらたま(蛮族P)</Typography>
                </Box>
              </Container>
            </AppBar>
          </footer>
        </main>
      </ThemeProvider>
    </>
  )
}
