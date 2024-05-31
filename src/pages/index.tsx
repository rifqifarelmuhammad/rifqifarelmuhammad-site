import { HomePageAnimation } from '@elements'
import { useEffect, useState } from 'react'
import { HomeModule } from '@modules'
import { GetStaticProps } from 'next'

export default function Home() {
  const [animation, setAnimation] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false)
    }, 2950)
  }, [])

  return (
    <div className="w-full">
      <div className="align-middle">
        {animation ? <HomePageAnimation /> : <HomeModule />}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const META_TITLE = 'Passionate Software Engineer | Rifqi Farel Muhammad'
  const META_DESCRIPTION =
    'CS student at UI, passionate in software engineering. Experienced in building responsive websites and RESTful APIs.'

  return {
    props: {
      canonical: 'https://rifqifarelmuhammad.com/',
      title: META_TITLE,
      description: META_DESCRIPTION,
      openGraph: {
        type: 'website',
        title: META_TITLE,
        description: META_DESCRIPTION,
        url: 'https://rifqifarelmuhammad.com/',
      },
    },
  }
}
