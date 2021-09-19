import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/PageContents/Completed'

const CompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="completed" />
      <Content />
      <Footer />
    </Layout>
  )
}

export default CompletedPage
