import { HomeModule } from '@modules'
import { GetStaticProps } from 'next'
import { getImage } from '@utils'

export default function Home() {
  return <HomeModule />
}

export const getStaticProps: GetStaticProps = () => {
  const META_TITLE = 'Rifqi Farel Muhammad | Software Engineer'
  const META_DESCRIPTION =
    'Software Engineer at Mekari with a backend-leaning full-stack background, building production systems with Go, microservices, and modern web technologies.'

  return {
    props: {
      canonical: 'https://rifqifarelmuhammad.vercel.app/',
      title: META_TITLE,
      description: META_DESCRIPTION,
      openGraph: {
        type: 'website',
        title: META_TITLE,
        description: META_DESCRIPTION,
        url: 'https://rifqifarelmuhammad.vercel.app/',
        images: [
          {
            url: getImage('v1717436943/rfm_z6kius.png'),
            width: 48,
            height: 48,
            alt: 'Rifqi Farel Muhammad',
          },
        ],
      },
    },
  }
}
