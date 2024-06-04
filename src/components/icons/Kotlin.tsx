import { COLORLESS_PRIMARY_COLOR, COLORLESS_SECONDARY_COLOR } from './constant'
import { IconProps } from './interface'

export const Kotlin = ({
  size,
  fill = 'none',
  stroke,
  className,
  colorless,
}: IconProps): JSX.Element => (
  <svg
    className={`${className} ${stroke} ${size}`}
    viewBox="0 0 32 32"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 28.9999L16.0433 15.9565L29 28.9999H3Z"
      fill={colorless ? COLORLESS_PRIMARY_COLOR : 'url(#paint0_linear_87_8183)'}
    />
    <path
      d="M3 3H16.0433L3 16.75V3Z"
      fill={colorless ? COLORLESS_PRIMARY_COLOR : 'url(#paint1_linear_87_8183)'}
    />
    <path
      d="M16.0433 3L3 16.7367V29L16.0433 15.9567L29 3H16.0433Z"
      fill={colorless ? COLORLESS_PRIMARY_COLOR : 'url(#paint2_linear_87_8183)'}
    />
    <defs>
      <linearGradient
        id="paint0_linear_87_8183"
        x1="9.91557"
        y1="35.0726"
        x2="22.1997"
        y2="22.7889"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0.097"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#0095D5'}
        />
        <stop
          offset="0.301"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#238AD9'}
        />
        <stop
          offset="0.621"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#557BDE'}
        />
        <stop
          offset="0.864"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#7472E2'}
        />
        <stop
          offset="1"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#806EE3'}
        />
      </linearGradient>
      <linearGradient
        id="paint1_linear_87_8183"
        x1="4.8239"
        y1="8.22556"
        x2="11.9583"
        y2="1.09116"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0.118"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#0095D5'}
        />
        <stop
          offset="0.418"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#3C83DC'}
        />
        <stop
          offset="0.696"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#6D74E1'}
        />
        <stop
          offset="0.833"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#806EE3'}
        />
      </linearGradient>
      <linearGradient
        id="paint2_linear_87_8183"
        x1="-1.37753"
        y1="26.9044"
        x2="22.8167"
        y2="2.71007"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0.107"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#C757BC'}
        />
        <stop
          offset="0.214"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#D0609A'}
        />
        <stop
          offset="0.425"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#E1725C'}
        />
        <stop
          offset="0.605"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#EE7E2F'}
        />
        <stop
          offset="0.743"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#F58613'}
        />
        <stop
          offset="0.823"
          stop-color={colorless ? COLORLESS_SECONDARY_COLOR : '#F88909'}
        />
      </linearGradient>
    </defs>
  </svg>
)
