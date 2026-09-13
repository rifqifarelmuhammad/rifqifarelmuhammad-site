import { ProjectsModule } from '@modules'
import { getImage } from '@utils'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'

const Projects: NextPage = () => <ProjectsModule />

export default Projects

export const getStaticProps: GetStaticProps = () => {
  const META_TITLE = 'Software Projects | Rifqi Farel Muhammad'
  const META_DESCRIPTION =
    'Explore software engineering projects by Rifqi Farel Muhammad across backend, full-stack, cloud, and systems development.'

  return {
    props: {
      canonical: 'https://rifqifarelmuhammad.vercel.app/projects',
      title: META_TITLE,
      description: META_DESCRIPTION,
      openGraph: {
        type: 'website',
        title: META_TITLE,
        description: META_DESCRIPTION,
        url: 'https://rifqifarelmuhammad.vercel.app/projects',
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
