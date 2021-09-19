import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/PageContents/Home'

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <Header selectedPage="home" />
      <Content />
      <Footer />
    </Layout>
  )
}

export default HomePage
