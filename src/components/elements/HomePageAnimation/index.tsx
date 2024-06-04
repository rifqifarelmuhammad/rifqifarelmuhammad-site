import { ANIMATION_WORDS } from './constant'

export const HomePageAnimation = (): JSX.Element => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="overflow-hidden h-[52px] md:h-[85px]">
      <div className="animate-scroll-up">
        {ANIMATION_WORDS.map((word) => (
          <h2
            key={word.word}
            className={`text-[32px] md:text-[56px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-br ${word.color}`}
          >
            {word.word}
          </h2>
        ))}
      </div>
    </div>
  </div>
)
