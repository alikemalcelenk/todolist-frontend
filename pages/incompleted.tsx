import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/PageContents/Incompleted'

const IncompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="incompleted" />
      <Content />
      <Footer />
    </Layout>
  )
}

export default IncompletedPage
