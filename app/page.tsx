import Grid from '@mui/material/Grid'
import PosterCard from './_components/PosterCard'

export default function Home() {
  return (
    <main>
      <h1>素材を提供してくれた素敵な人たち</h1>
      <Grid container spacing={2} justifyContent='center'>
        <PosterCard name='hoge' url='hoge' comment='hoge' />
      </Grid>
    </main>
  )
}
