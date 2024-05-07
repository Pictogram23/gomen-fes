'use client'
import { TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import PosterCard from './_components/PosterCard'

type Poster = {
  name: string
  url: string
  comment: string
}

export default function Home() {
  const [keyword, setKeyword] = useState<string>('')
  const posterlist: Poster[] = require('./posterlist.json')
  return (
    <main>
      <h1>素材を提供してくれた素敵な人たち</h1>
      <TextField
        sx={{ mb: 5 }}
        label='Search'
        variant='outlined'
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Grid container spacing={2} justifyContent='center'>
        {posterlist.map((poster) => {
          if (poster.name.indexOf(keyword) != -1) {
            return (
              <>
                <PosterCard name={poster.name} url={poster.url} comment={poster.comment} />
              </>
            )
          }
        })}
      </Grid>
    </main>
  )
}
