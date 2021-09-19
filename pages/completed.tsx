import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

// elements
import Box from '../components/Elements/box'

const CompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="completed" />
      <Box style={{ backgroundColor: 'purple' }} />
      <Footer />
    </Layout>
  )
}

export default CompletedPage
