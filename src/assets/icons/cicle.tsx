import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm10-90a10 10 0 1 1-10-10 10.01 10.01 0 0 1 10 10Zm48 0a10 10 0 1 1-10-10 10.01 10.01 0 0 1 10 10Zm-96 0a10 10 0 1 1-10-10 10.01 10.01 0 0 1 10 10Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const Cicle = memo(ForwardRef)
