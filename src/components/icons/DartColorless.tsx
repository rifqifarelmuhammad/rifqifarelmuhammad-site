import { IconProps } from './interface'

export const DartColorless: React.FC<IconProps> = ({
  size,
  fill = 'none',
  stroke,
  className,
}) => (
  <svg
    className={`${className} ${stroke} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill={fill}
  >
    <path
      fill="#1C3646"
      d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"
    />
    <path
      fill="#1C3646"
      d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"
    />
    <path
      fill="#1C3646"
      d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"
    />
    <polygon fill="#1C3646" points="35,37 13,37 19,43 35,43" />
  </svg>
)