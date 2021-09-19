import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'

// elements
import Box from '../components/Elements/box'

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="home" />
      <Box style={{ backgroundColor: 'blue' }} />
      <Box style={{ backgroundColor: 'orange' }} />
    </Layout>
  )
}

export default HomePage
