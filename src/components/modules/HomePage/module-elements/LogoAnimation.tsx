import { LogoProps } from '../interface'

export const LogoAnimation: React.FC<LogoProps> = ({ Logo, LogoColorless }) => (
    <div className="w-1/6 relative group">
        <Logo size="w-full" className='absolute opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out' />
        <LogoColorless  size="w-full" className='opacity-100 group-hover:opacity-0 duration-300 transition-all ease-in-out' />
    </div>
)