import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="A simple Hello World site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </div>
  )
}
