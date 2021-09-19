import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

// elements
import Box from '../components/Elements/box'

const IncompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="incompleted" />
      <Box style={{ backgroundColor: 'gray' }} />
      <Footer />
    </Layout>
  )
}

export default IncompletedPage
