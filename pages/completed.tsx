import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'

// elements
import Box from '../components/Elements/box'

const CompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="completed" />
      <Box style={{ backgroundColor: 'purple' }} />
      <Box style={{ backgroundColor: 'orange' }} />
    </Layout>
  )
}

export default CompletedPage
