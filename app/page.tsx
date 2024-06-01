'use client'
import { Container, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import PosterCard from './_components/PosterCard'

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

export default function Home() {
  const [keyword, setKeyword] = useState<string>('')
  const posterlist: Poster[] = require('./gomen-fes-posterlist.json')
  return (
    <main>
      <Container>
        <h1>素材を提供してくれた素敵な人たち</h1>
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
    </main>
  )
}
