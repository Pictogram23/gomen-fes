import fs from 'fs'
import Grid from '@mui/material/Grid'
import PosterCard from './_components/PosterCard'

type Poster = {
  name: string
  url: string
  comment: string
}

export default function Home() {
  const posterlist: Poster[] = JSON.parse(fs.readFileSync('./app/posterlist.json', 'utf8'))

  return (
    <main>
      <h1>素材を提供してくれた素敵な人たち</h1>
      <Grid container spacing={2} justifyContent='center'>
        {posterlist.map((poster) => {
          return (
            <>
              <PosterCard name={poster.name} url={poster.url} comment={poster.comment} />
            </>
          )
        })}
      </Grid>
    </main>
  )
}
