import { Hero } from 'components/layouts/Hero'
import { BlogContainer } from 'components/ui-parts/BlogContainer'
import { Layout } from 'components/layouts/Layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <BlogContainer />
    </Layout>
  )
}
