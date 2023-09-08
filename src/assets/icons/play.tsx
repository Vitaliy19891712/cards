import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#fff"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
    />
    <path
      fill="#fff"
      d="M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 1.85-.3L16 13.18a1.6 1.6 0 0 0 0-2.36l-3.66-3.37Zm-.84 7.15V9.4l2.81 2.6-2.81 2.6Z"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
export const Play = memo(ForwardRef)
