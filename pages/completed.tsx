import { FunctionComponent } from 'react'
import Head from 'next/head'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/PageContents/Completed'

const CompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>Completed Tasks | Todolist</title>
      </Head>

      <Header selectedPage="completed" />
      <Content />
      <Footer />
    </Layout>
  )
}

export default CompletedPage
