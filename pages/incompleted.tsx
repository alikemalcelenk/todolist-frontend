import { FunctionComponent } from 'react'
import Head from 'next/head'

// components
import Layout from '@components/Layout'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Content from '@components/PageContents/Incompleted'

const IncompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>Incompleted Tasks | Todolist</title>
      </Head>

      <Header selectedPage="incompleted" />
      <Content />
      <Footer />
    </Layout>
  )
}

export default IncompletedPage
