import { LegacyRef, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { className?: string },
  ref: LegacyRef<SVGSVGElement> | undefined
) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path fill="#fff" d="M10.27 11.06 7.22 8l3.05-3.06L9.33 4l-4 4 4 4 .94-.94Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const KeyboardArrowLeft = memo(ForwardRef)
