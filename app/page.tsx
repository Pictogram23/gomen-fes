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
import { YouTubeEmbed } from '@next/third-parties/google'
import { useEffect, useState } from 'react'
import FAQAccordion from './_components/FAQAccordion'
import PosterCard from './_components/PosterCard'
import 'fontsource-noto-sans-jp/500.css'

type Poster = {
  datetime: string
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
                  datetime={pickUp.datetime}
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
            <Typography display={'block'} variant='subtitle1' paddingTop={1} paddingBottom={1}>
              参加者の中からランダムに1名表示されます
            </Typography>
            <Typography variant='h4' color='red' paddingTop={10}>
              2024年12月20日(金)18:00〜29日(日)24:00開催予定！
            </Typography>
            <Typography variant='h4' paddingTop={10} paddingBottom={3}>
              告知動画
            </Typography>
            <YouTubeEmbed videoid='4rpKK1OkXzs' style='margin: auto; width: 90vw;' />
          </div>
          <div id='join'>
            <Container sx={{ paddingTop: 10 }}>
              <Typography variant='h5'>
                パロディ元の応募・推薦は受付終了致しました
                <br />
                たくさんのご応募ありがとうございました
              </Typography>
            </Container>
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
              <Typography variant='h4' paddingBottom={1} paddingTop={3}>
                素敵な参加者たち(敬称略)
              </Typography>
              <Typography display={'block'} variant='subtitle1' paddingBottom={3} paddingTop={1}>
                クリックで詳細が表示されます
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
                          datetime={poster.datetime}
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
            <Container
              sx={{
                paddingTop: 10,
                '@media screen and (min-width:1025px)': {
                  width: '70vw',
                },
              }}
            >
              <Typography variant='h4' paddingBottom={2}>
                ルール
              </Typography>
              <Typography variant='h5'>参加方法</Typography>
              <Typography variant='subtitle1' paddingTop={1} textAlign={'left'}>
                ニコニコ動画で開催します。参加方法は２つあります。
                <br />
                <span style={{ fontWeight: 'bold' }}>①パロディされる側として参加する。</span>
                <br />
                <span style={{ fontWeight: 'bold' }}>②パロディをする側として参加する。</span>
                <br />
                <br />
                ①の場合、パロディ元募集期間中にフォームに入力していただきます。
                <br />
                <br />
                ②の場合、この投稿祭は性質上ちょこっとルール（詳細は後述）が厳しくなります。
                <br />
                ボカロPさんや絵師さん、動画師さん…ごとに別途オリジナルライセンスがあることもありますので、きちんと確認してから投稿しましょう！（上記公式サイトに記載）
                <br />
                <br />
                イベント期間中にタグ「ごめんなさい投稿祭」をタグロックしてください。
                <br />
                曲数の制限はございません。
                <br />
                TwiPlaで参加表明するのは必須ではありません（運営が何人くらい参加するかを確認するためのものです）。
                <br />
                <br />
                全曲巡回生放送を実施する予定ですので、奮ってご参加ください。
              </Typography>
              <Typography variant='h5' paddingTop={3}>
                ルール
              </Typography>
              <Typography variant='subtitle1' paddingTop={1} textAlign={'left'}>
                ①ニコニコ動画に初投稿のオリジナル楽曲(もしくは替え歌)であること。
                <br />
                <br />
                ②「合成音声ソフトウェア」(VOCALOID, CeVIO, Synthesizer V, UTAU,
                VOICEROIDなど)を用いること。合成音声ソフトウェア以外の歌声やハモり・朗読などが含まれても構わない。
                <br />
                <br />
                ③ごめんなさい投稿祭が許可を取った方のパロディを1つ以上含むこと。(自分自身のパロディを除く)
                <br />
                <br />
                ④ごめんなさい投稿祭が許可を取った方の動画のうち、パロディを行ってよいものは、ボカロオリジナル曲(広義)及びボカロ曲(広義)の替え歌ボカロ曲(広義)(パロディ曲判定)のみである。カバー曲やREMIXは対象外である。
                <br />
                <br />
                ⑤何人ものパロディをしても構わないが、事前にパロディ元に許可を取ったボカロP以外(一般アーティストなど含む)のパロディをした場合、万が一トラブルが起こっても運営は責任を負わない。
                <br />
                <br />
                ⑥フリー素材やフリー音楽、二次創作がOKとされている曲など、ごめんなさい投稿祭がなくとも完全に合法的にパロディが可能であるものも、当然パロディを行ってよい。ただし、③も遵守すること。
                <br />
                <br />
                ⑦絵師のパロディを行う場合、トレスをしてはならない。
                <br />
                <br />
                ⑧パロディはパクリではない。全体を通して本家様と全く同じ、もしくはほとんど同じ曲(音程・歌詞等)・絵・動画を作ってはならない(替え歌の場合はメロディなどは同一で良い)。
                <br />
                <br />⑨
                <span style={{ fontWeight: 'bold' }}>
                  素材が配布されている場合を除き本家様の素材は使用しないこと。原則は自力で再現すること。
                </span>
                ただし、使用したい場合は、運営経由（Twitter(X)のDM）で素材利用の許可を取りに行くことができる。（許可取りを保証できるものではない）
                <br />
                <br />
                ⑩パロディはパロディ元へのリスペクトがあることが前提である。間違っても
                <span style={{ fontWeight: 'bold' }}>
                  パロディ元の誹謗中傷やパロディ元のイメージを損ねるものを作ってはならない。その他良識の範囲でパロディを行うこと。万が一パロディ元が不適切と判断した場合や削除要請が送られた場合はすぐに削除すること。（一ヶ月経っても削除を行わなかった場合、万が一トラブルが起こっても運営は責任を負わない）
                </span>
                <br />
                <br />
                ⑪動画概要欄には、出来るだけパロディ元の名前とURLを貼ること。ただし、パロディ元を当てることを目的にしている曲などで、クレジットが必要でないとしているボカロPならば貼らなくてもよい。
                <br />
                <br />
                ⑫収益化はパロディ元の規約で許可されていればしてもよい。ただし、
                <span style={{ fontWeight: 'bold' }}>
                  ニコニコ動画のクリエイター奨励プログラムとYouTubeの収益化プログラム以外では収益化を行ってはならない。
                </span>
                （別途パロディ元に許可を取っている場合を除く）
                <br />
                <br />
                ⑬タグには「○○さんごめんなさいシリーズ」というタグを付けるとパロディをされたボカロPは嬉しい。ただし、任意である。
                <br />
                <br />
                ⑭自分自身のパロディは当然いくらでもしてよい。ただし、自分自身のパロディのみの作品は投稿しないこと。
                <br />
                <br />
                ⑮ここで投稿された楽曲は全て「ごめんなさい投稿祭」内のみでパロディが可能とする。「ごめんなさい投稿祭2」に準ずるものが開催される場合も、パロディ元が可とした場合はパロディを可とする。
                <br />
                <br />
                ⑯その他ニコニコの利用規約などを遵守すること。
              </Typography>
              <Typography variant='h5' paddingTop={3}>
                ごめんなさい投稿祭パロディ元規約
              </Typography>
              <Typography variant='subtitle1' paddingTop={1} textAlign={'left'}>
                ①「契約」は本フォームに記載の事項に関する契約を指します。「契約者」は契約を結び、本規約を守る義務を持つ人を指します。
                <br />
                <br />
                ②本フォームで書いた内容は後日の運営によるTwitter(X)のダイレクトメッセージなどでの同意の上、契約されるものとします。
                <br />
                <br />
                ③未成年の方は、本規約への同意に関して、事前に親権者等の法定代理人の同意を得てください。運営は、未成年の方がご応募したことをもって法定代理人の同意を得ているものとみなします。
                <br />
                <br />
                ④この契約は
                <span style={{ fontWeight: 'bold' }}>
                  ごめんなさい投稿祭終了時まで原則解除することができません
                </span>
                。（契約開始時からパロディ製作者が作品を作り始める可能性があるためです。細かい内容の変更は要相談ですが原則変更できます。どうしても契約を解除したい時はお問い合わせください。）
                <br />
                <br />
                ⑤この契約で対象となる曲は、ボカロオリジナル曲(広義)及びボカロ曲(広義)の替え歌ボカロ曲(広義)(パロディ曲判定)のみです。カバー曲やREMIXは対象外です。契約者は別に対象外とする曲を本フォームで挙げることができます。
                <br />
                <br />
                ⑥パロディに関しては、上記ルールを遵守した曲が投稿されます。そちらもご覧ください。
                <br />
                <br />
                ⑦パロディ曲はニコニコ動画にてごめんなさい投稿祭期間中に投稿されます。なお、ニコニコ動画以外の投稿を許可した場合はその限りではない他、許可していなくとも、予告など常識の範囲内で期間外にニコニコ動画以外(Twitter(X)等)で投稿される可能性があります(ごめんなさい投稿祭期間中にニコニコ動画で投稿された曲以外は、ニコニコ動画以外で投稿されることはありません)。
                <br />
                <br />
                ⑧契約者はごめんなさい投稿祭に投稿された自分のパロディ作品または自分のパロディ作品と思われる曲に対して、正当な理由があれば削除要請を送ることができます。ただし、削除要請の権利は乱用してはならず、
                <span style={{ fontWeight: 'bold' }}>
                  削除要請から1ヶ月経っても削除されない場合を除き、著作権侵害で訴えるなどの行為をしてはなりません
                </span>
                。
                <br />
                <br />
                ⑨この規約は事前の予告なく変更する可能性があります。明らかに重要な規約の変更(契約者にとって著しく不利になる変更)があった場合は契約者に運営からその旨を伝えます。その際に契約者は契約を解除することができます。
                <br />
                <br />
                ⑩ここで集めた個人情報やダイレクトメッセージでのやり取りなどは、事前に明示した目的以外では絶対に使用しません。契約者もダイレクトメッセージでのやり取りを公開してはなりません。
                <br />
                <br />
                ⑪ごめんなさい投稿祭はニコニコ動画で開催されます。その他Twitter(X)も使用するので、ニコニコの利用規約やTwitter(X)の利用規約も遵守すること。
              </Typography>
            </Container>
          </div>
          <div id='faq'>
            <Container sx={{ paddingTop: 10 }}>
              <Typography variant='h4' paddingBottom={2}>
                FAQ
              </Typography>
              <Grid display={'flex'} justifyContent={'center'} alignContent={'center'}>
                <Box
                  sx={{
                    width: '90vw',
                    '@media screen and (min-width:1025px)': {
                      width: '70vw',
                    },
                  }}
                >
                  <Typography variant='h6' paddingBottom={2}>
                    パロディをされる側
                  </Typography>
                  <FAQAccordion
                    summary='未成年ですが、参加していいの？'
                    details='本規約への同意に関して、事前に親権者等の法定代理人の同意を得てください。運営は、未成年の方がご応募したことをもって法定代理人の同意を得ているものとみなします。'
                  />
                  <FAQAccordion
                    summary='パロディ元に応募したけど、やっぱりやめたい！どうすればいいの？'
                    details='原則不可とさせていただいております。ただし、どうしてもの場合は、理由をお聞きした上でやめることは不可能ではありません。お気軽にお問い合わせください。'
                  />
                  <FAQAccordion
                    summary='パロディ元に応募したけど、規約変更したい！どうすればいいの？'
                    details='細かい規約の変更は要相談ですが原則可能です。お気軽にお問い合わせください。'
                  />
                  <FAQAccordion
                    summary='パロディ元にはなりたいけど、パロディしてほしくない曲もあるんだけど、どうすればいいの？'
                    details='応募フォームにて、そのような曲を列記することができます。また逆に、この曲だけパロディの対象といった風に指定することもできます。'
                  />
                  <FAQAccordion
                    summary='私のパロディ曲が明らかに不適切！どうすればいいの？'
                    details='大変ご迷惑をおかけしております。至急運営にご連絡ください。運営から削除要請を行います。大変申し訳ございませんが、削除要請から1ヶ月経っても削除されない場合を除き、著作権侵害で訴えるなどの行為は行わないでください。'
                  />
                  <Typography variant='h6' paddingY={2}>
                    パロディをする側
                  </Typography>
                  <FAQAccordion
                    summary='過去作品で参加していいの？'
                    details='ニコニコ動画に過去に投稿したことがある作品では、原則参加できません。'
                  />
                  <FAQAccordion
                    summary='人の声が入っていても大丈夫？'
                    details='大丈夫です。ただし、「合成音声ソフトウェア」(VOCALOID, CeVIO, Synthesizer V, UTAU, VOICEROIDなど)も用いてください。'
                  />
                  <FAQAccordion
                    summary='とりあえずパロディ曲であれば何でもOK？'
                    details='今回のごめんなさい投稿祭では、運営が事前に許可を取った方のパロディを最低でも1人以上(自分自身除く)行う必要があります。それ以外のパロディは自己責任ならば可です。'
                  />
                  <FAQAccordion
                    summary='曲は作る時間がないから、替え歌で参加してもOK？'
                    details='可です。'
                  />
                  <FAQAccordion
                    summary='パロディ元の方のカバーやREMIXのパロディをしてもいいの？'
                    details='してはいけません。カバーやREMIXの原作者のパロディという部分が強いため、一律不可としています。'
                  />
                  <FAQAccordion
                    summary='フリー素材やフリー音楽、二次創作がOKとされている曲のパロディはしていいの？'
                    details='それぞれの規約に則った利用・パロディは可です。ただし、ごめんなさい投稿祭のパロディ元のパロディを1つはしてください。'
                  />
                  <FAQAccordion
                    summary='piaproの素材は使っていいの？'
                    details='piaproの規約に則った利用は可です。ただし、許可を得られていない方の作品の場合、再現に関するパロディの対象外です。'
                  />
                  <FAQAccordion
                    summary='パロディ対象外でも自己責任でパロディをしてもいいの？'
                    details='自己責任ならば可です。ただし、ごめんなさい投稿祭のパロディ元で不可とされている曲はパロディを控え、ごめんなさい投稿祭のパロディ元のパロディを1つはしてください。'
                  />
                  <FAQAccordion
                    summary='パロディ元の曲でパロディしたい曲があるけど、絵師動画師には運営が許可を取っていない！どうすればいいの？'
                    details='この場合、絵や動画のパロディは不可です。どうしてもパロディを行いたい場合は、お気軽にお問い合わせください。運営の方からパロディの許可取りを行います。(許可取りは保証できません)'
                  />
                  <FAQAccordion
                    summary='パロディをしたいので、動画からスクリーンショットで撮った画像を素材として使っていい？'
                    details='GB素材など良識で認められるケースもありますが、原則使ってはいけません。原則自力で再現してください。どうしても使いたい場合は、お気軽にお問い合わせください。運営の方から素材使用の許可取りを行います。(許可取りは保証できません)'
                  />
                  <FAQAccordion
                    summary='絵のパロディをしたいので、トレスをしてもいい？'
                    details='当投稿祭では、絵のトレスは一律禁止します。'
                  />
                  <FAQAccordion
                    summary='ごめんなさい投稿祭以外でもボカロPさんごとの規約は適用されるの？'
                    details='されません。ごめんなさい投稿祭でパロディを不可としている曲でも、普段は別途規約を守ればパロディ可というパターンも存在します。'
                  />
                  <FAQAccordion
                    summary='規約の「ほとんど同じ曲・絵・動画を作ってはならない」ってどこまでがほとんど同じ？'
                    details='あえてぼかした表現にしてあります。基本的には個々のパロディ元さんの判断によります。'
                  />
                  <FAQAccordion
                    summary='有名ボカロPさんのパクリをごめんなさい投稿祭に乗じて量産し、バズってやる！！！'
                    details='このような方がいないと信じていますが、パロディとパクリは全く別者であり、パクリはいかなる場合でも許されません。'
                  />
                  <FAQAccordion
                    summary='あるパロディ元を恨んでいるので、皮肉を込めてその人をディスったパロディ曲を作ってやる！！！'
                    details='このような方もいないと信じていますが、いかなる場合でも誹謗中傷は許されません。パロディはパロディ元へのリスペクトが必須です。'
                  />
                  <FAQAccordion
                    summary='誹謗中傷しているわけではないけど、ちょっとパロディ元をからかうようなパロディを入れたい！いいですか？'
                    details='自己責任でお願いします。万が一パロディ元が不適切と判断した場合や削除要請が送られた場合はすぐに削除を行ってください。（一ヶ月経っても削除を行わなかった場合、万が一トラブルが起こっても運営は責任を負いません）'
                  />
                  <FAQAccordion
                    summary='動画概要欄に書かなきゃいけないこととかありますか？'
                    details='パロディ元の方の「クレジット」の規約等に沿って、クレジットを記載してください。クレジットは「パロディ元の名前」と「パロディ元のURL(Twitter(X)やニコニコ動画など)」を貼ればいいでしょう。可能ならば「パロディをした曲のURL」なども貼るといいでしょう。'
                  />
                  <FAQAccordion
                    summary='パロディ元が誰なのか当てるクイズ形式の曲なので、動画概要欄にクレジットを書きたくないんですが、いいですか？'
                    details='基本的にクレジットは記載してください。ただし、パロディ元の方の「クレジット」の規約が「記載しなくてよい」ならば記載しなくて構いません。'
                  />
                  <FAQAccordion
                    summary='親作品に何か登録しなくちゃいけませんか？'
                    details='パロディ元の方の「クレジット」の規約等に沿って、親作品にパロディの元ネタの曲を登録してください。パロディ元が作りそうな曲などのように、はっきりとある曲のパロディというわけではない場合も、親作品の登録が必須の場合は、代表曲など1曲は登録するようにしてください。'
                  />
                  <FAQAccordion
                    summary='ごめんなさい投稿祭に投稿した曲をYouTubeやbilibili等に投稿していいの？'
                    details='パロディ元の方の「ニコニコ以外への投稿」の規約等に沿って、許可されていれば投稿することが可能です。ごめんなさい投稿祭期間内にニコニコ動画に投稿されていれば、ごめんなさい投稿祭の期間以降でも投稿が可能です。'
                  />
                  <FAQAccordion
                    summary='告知動画をTwitter(X)等にあげてもいい？'
                    details='良識の範囲であれば、パロディ元の方の「ニコニコ以外への投稿」の規約にかかわらず可能です。ただし、「ニコニコ以外への投稿」の規約が「許可しない」の場合、告知等の目的に留め、万が一パロディ元が不適切と判断した場合や削除要請が送られた場合はすぐに削除を行ってください。（一ヶ月経っても削除を行わなかった場合、万が一トラブルが起こっても運営は責任を負いません）'
                  />
                  <FAQAccordion
                    summary='パロディ曲で収益化ってしていいの？'
                    details='パロディ元の方の「収益化」の規約等に沿って、収益化をすることが可能です。ただし、ニコニコ動画のクリエイター奨励プログラムとYouTubeの収益化プログラム以外では収益化を行ってはいけません。（別途パロディ元に許可を取っている場合を除く）'
                  />
                  <FAQAccordion
                    summary='付けなきゃいけないタグってありますか？'
                    details='「ごめんなさい投稿祭」をタグロックしてください。これを忘れると公式巡回生放送の巡回対象外になります。また、任意ですが、「○○(パロディ元の方の名前)ごめんなさいシリーズ」というタグも推奨しています。'
                  />
                  <FAQAccordion
                    summary='自分のパロディってしていいの？'
                    details='可です。ただし、ごめんなさい投稿祭のパロディ元のパロディを1つはしてください。'
                  />
                  <FAQAccordion
                    summary='ごめんなさい投稿祭が始まってから、急いでごめんなさい投稿祭で投稿された楽曲のパロディを作って投稿していいの？'
                    details='可です。ごめんなさい投稿祭の期間は10日間と比較的長い期間開催されるため、ぜひぜひ始まってからもパロディを制作してください！ただし、ごめんなさい投稿祭の期間内に投稿してください。'
                  />
                  <FAQAccordion
                    summary='パロディ曲は作りたいけど、その曲でパロディされたくないです…。'
                    details='ごめんなさい投稿祭参加作品は強制的にごめんなさい投稿祭内でのパロディ対象曲となります。これはパロディの輪を広げてほしいためのものです。ご了承くださいませ。'
                  />
                  <FAQAccordion
                    summary='ごめんなさい投稿祭以外でもパロディってしていいの？'
                    details='ごめんなさい投稿祭は一切関わりませんが、基本していいのです。特に今回パロディ元としてご応募くださった方々は、普段もパロディに対して寛容な姿勢であるはずです。ごめんなさい投稿祭の目的の一つは「パロディの推進」です。普段からみんなが笑い合えるようなパロディ曲をみなさんが作ってくれることを心から願っています。'
                  />
                </Box>
              </Grid>
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
