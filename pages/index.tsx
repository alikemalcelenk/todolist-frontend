import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

// elements
import Box from '../components/Elements/box'

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="home" />
      <Box style={{ backgroundColor: 'blue' }} />
      <Footer />
    </Layout>
  )
}

export default HomePage
