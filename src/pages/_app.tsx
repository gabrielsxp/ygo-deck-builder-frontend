/* eslint-disable react/no-unescaped-entities */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import GlobalStyles from 'styles/global'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from 'lib/gtag'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Head>
          <title>Yu-Gi-Oh! Duel Links Packs</title>
          <link rel="shortcut icon" href="/img/icon-192.png" />
          <link rel="apple-touch-icon" href="/img/icon-192.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A tool that allows to open Duel Links for fun"
          />
        </Head>
        <NextSeo>
          title="Duel Links Packs" description="Yu-Gi-Oh! Duel Links Packs allow
          you to open Yu-Gi-Oh! Duel Links packs of all boxes released in the
          game. Updated on released of every box !"
          canonical="https://duellinkspacks.com" openGraph=
          {{
            url: 'https://duellinkspacks.com',
            title:
              'Duel Links Packs - Open packs of all released box in the game just for fun.',
            description:
              'Yu-Gi-Oh! Duel Links Packs allow you to open Yu-Gi-Oh! Duel Links packs of all boxes released in the game. Updated on released of every box !',
            images: [{ url: 'https://duellinks.com/img/cover.webp' }],
            site_name: 'Duel Links Packs',
            locale: 'pt_BR'
          }}
        </NextSeo>
        <GlobalStyles />
        <Component {...pageProps} />
      </DndProvider>
    </ThemeProvider>
  )
}

export default App
