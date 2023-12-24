import { IconProps } from './interface'

export const Tailwind: React.FC<IconProps> = ({
  size,
  fill = 'none',
  stroke,
  className,
}) => (
    <svg 
        className={`${className} ${stroke} ${size}`}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
    >
        <path 
            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" 
            fill="#44a8b3"
        />
    </svg>
    )
