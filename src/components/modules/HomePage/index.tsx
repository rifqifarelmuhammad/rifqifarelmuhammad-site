import { Typescript } from 'src/components/icons'

export const HomePage = () => {
  return (
    <div className="w-full py-20 px-16 flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <h3 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1D505] to-[#F60202]">
          {`Hey there! `}
          <span className="text-white">👋</span>
        </h3>

        <h1 className="text-white text-xl">
          I am Rifqi Farel Muhammad, a Computer Science student at University of
          Indonesia. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-6xl font-bold text-white">
          {`Languages-Frameworks-Tools `}
          <span>⚒️</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-1/6">
            <Typescript size="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
