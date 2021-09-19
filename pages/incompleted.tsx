import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'

// elements
import Box from '../components/Elements/box'

const IncompletedPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="incompleted" />
      <Box style={{ backgroundColor: 'gray' }} />
      <Box style={{ backgroundColor: 'orange' }} />
    </Layout>
  )
}

export default IncompletedPage
