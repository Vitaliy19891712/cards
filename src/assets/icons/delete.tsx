import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    ref={ref}
    {...props}
  >
    <path
      fill="#FFF"
      d="M19 5h-5V3.33A2.42 2.42 0 0 0 11.5 1h-3A2.42 2.42 0 0 0 6 3.33V5H1a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7h1a1 1 0 1 0 0-2ZM8 3.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V5H8V3.33ZM16 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h12v11Z"
      transform="scale(0.7,0.7)"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
export const Delete = memo(ForwardRef)
