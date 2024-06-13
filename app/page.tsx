'use client'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  colors,
  createTheme,
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
  others: string
  credit: string
  earning: string
  original: string
  comment: string
  furigana: string
  best: string
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
  const posterlist: Poster[] = require('./gomen-fes-posterlist.json')

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
                  others={pickUp.others}
                  credit={pickUp.credit}
                  earning={pickUp.earning}
                  original={pickUp.original}
                  comment={pickUp.comment}
                  best={pickUp.best}
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
              <Link href='https://forms.gle/Hjzq8X5EYU72t8xRA' variant='h5'>
                パロディ元「応募」はこちら！
              </Link>
            </Container>
            <br />
            <Link href='https://forms.gle/q3tGoMsgwjsxYnW5A' variant='h5'>
              パロディ元「推薦」はこちら！
            </Link>
          </div>
          <div id='about'>
            <Typography variant='h4' paddingTop={10}>
              概要
            </Typography>
            <Container sx={{ width: '60vw' }}>
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
                素材を提供してくれた素敵な方たち
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
                          others={poster.others}
                          credit={poster.credit}
                          earning={poster.earning}
                          original={poster.original}
                          comment={poster.comment}
                          best={poster.best}
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
                ルール
              </Link>
            </Container>
          </div>
          <div id='faq'>
            <Container sx={{ paddingTop: 10 }}>
              <Link href='#' variant='h5'>
                FAQ
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
                  <Link href='#' variant='body1'>
                    X(旧Twitter)
                  </Link>
                  <Link href='#' variant='body1' padding={3}>
                    TwiPla
                  </Link>
                </Container>
                <Box sx={{ textAlign: 'center', paddingBottom: 3 }}>
                  <Typography>©2024 しらたま</Typography>
                </Box>
              </Container>
            </AppBar>
          </footer>
        </main>
      </ThemeProvider>
    </>
  )
}
