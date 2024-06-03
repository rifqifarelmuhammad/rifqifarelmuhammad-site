import { ProjectsModule } from '@modules'
import { getImage } from '@utils'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'

const Projects: NextPage = () => <ProjectsModule />

export default Projects

export const getStaticProps: GetStaticProps = () => {
  const META_TITLE = 'Software Projects | Rifqi Farel Muhammad'
  const META_DESCRIPTION =
    "Showcase of Rifqi Farel Muhammad's software engineering projects, featuring web development, RESTful APIs, and microservices."

  return {
    props: {
      canonical: 'https://rifqifarelmuhammad.com/projects',
      title: META_TITLE,
      description: META_DESCRIPTION,
      openGraph: {
        type: 'website',
        title: META_TITLE,
        description: META_DESCRIPTION,
        url: 'https://rifqifarelmuhammad.com/',
        images: [
          {
            url: getImage('v1717436943/rfm_z6kius.png'),
            width: 48,
            height: 48,
            alt: 'Rifqi Farel Muhammad'
          }
        ]
      },
    },
  }
}
