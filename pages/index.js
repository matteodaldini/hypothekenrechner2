
import Head from 'next/head'
import Hypothekenrechner from '../components/Hypothekenrechner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hypothekenrechner</title>
      </Head>
      <main>
        <Hypothekenrechner />
      </main>
    </div>
  )
}
