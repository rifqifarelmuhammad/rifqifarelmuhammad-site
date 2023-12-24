import { IconProps } from './interface'

export const FlutterColorless: React.FC<IconProps> = ({
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
    <polyline
      points="15.383 18.316 18.744 15.042 27.093 15.042 19.697 22.438 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316"
      fill="#1C3646"
    />
    <polygon
      points="4.907 16.125 9.106 20.424 27.093 2.287 18.744 2.287 4.907 16.125"
      fill="#1C3646"
    />
    <polygon
      points="11.176 22.479 15.435 26.675 19.697 22.438 15.383 18.316 11.176 22.479"
      fill="#1C3646"
    />
    <polygon
      points="15.435 26.675 19.697 22.438 26.989 29.813 18.593 29.813 15.435 26.675"
      fill="#1C3646"
    />
    <polygon
      points="15.435 26.675 19.406 25.354 18.068 24.057 15.435 26.675"
      fill="#1C3646"
    />
  </svg>
)
