import { FunctionComponent } from 'react'

// components
import Layout from '../components/Layout/index'

// elements
import Box from '../components/Elements/box'

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <Box style={{ backgroundColor: 'green' }} />
      <Box style={{ backgroundColor: 'blue' }} />
      <Box style={{ backgroundColor: 'orange' }} />
    </Layout>
  )
}

export default HomePage
