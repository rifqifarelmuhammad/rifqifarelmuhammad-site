import { ANIMATION_WORDS } from './constant'

export const HomePageAnimation = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="overflow-hidden h-20">
      <div className="animate-scroll-up">
        {ANIMATION_WORDS.map((word) => (
          <p
            className={`text-[56px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-br ${word.color}`}
          >
            {word.word}
          </p>
        ))}
      </div>
    </div>
  </div>
)
