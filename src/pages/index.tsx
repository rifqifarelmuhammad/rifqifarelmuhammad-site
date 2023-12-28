import { HomePageAnimation } from '@elements'
import { useEffect, useState } from 'react'
import { HomeModule } from '@modules'

export default function Home() {
  const [animation, setAnimation] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false)
    }, 3000)
  }, [])

  return (
    <div className="w-full">
      <div className="align-middle">
        {animation ? (
          <HomePageAnimation />
        ) : (
          <>
            <HomeModule />
          </>
        )}
      </div>
    </div>
  )
}
