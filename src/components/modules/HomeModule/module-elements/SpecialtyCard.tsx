import { SpecialtyCardProps } from '../../types/homeModule'

export const SpecialtyCard = ({ Icon, content }: SpecialtyCardProps) => (
  <div className="rounded-lg bg-white flex flex-row items-center gap-4 p-4 w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
    <Icon className="w-5 md:w-6 h-5 md:h-6" />
    <span className="font-bold text-xl text-sm md:text-base">{content}</span>
  </div>
)
