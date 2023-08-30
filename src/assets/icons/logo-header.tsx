import { LegacyRef, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: LegacyRef<SVGSVGElement> | undefined
) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={157} height={36} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M70.99 24.716c-1.285 0-2.45-.277-3.494-.83a6.426 6.426 0 0 1-2.449-2.33c-.588-.998-.882-2.123-.882-3.375 0-1.251.294-2.37.882-3.357a6.253 6.253 0 0 1 2.449-2.329c1.044-.565 2.215-.848 3.511-.848 1.093 0 2.077.192 2.953.577a5.919 5.919 0 0 1 2.233 1.661l-1.873 1.733c-.852-.987-1.908-1.48-3.169-1.48-.78 0-1.476.174-2.088.523a3.652 3.652 0 0 0-1.441 1.426c-.336.614-.504 1.312-.504 2.094 0 .782.168 1.48.504 2.094a3.779 3.779 0 0 0 1.44 1.444c.613.337 1.309.506 2.09.506 1.26 0 2.316-.5 3.168-1.498l1.873 1.732a5.839 5.839 0 0 1-2.233 1.68c-.888.384-1.878.577-2.97.577Zm12.667 0c-1.8 0-3.205-.5-4.213-1.498-.996-1-1.495-2.425-1.495-4.279v-7.076h2.917v6.968c0 2.263.937 3.394 2.81 3.394.912 0 1.608-.27 2.088-.813.48-.553.72-1.413.72-2.58v-6.969h2.881v7.076c0 1.854-.504 3.28-1.512 4.279-.996.998-2.395 1.498-4.196 1.498Zm17.846-6.787c.721.228 1.285.613 1.693 1.155.408.53.612 1.185.612 1.968 0 1.107-.432 1.961-1.296 2.563-.853.59-2.101.884-3.746.884h-6.518V11.863h6.158c1.537 0 2.713.295 3.529.885.829.59 1.243 1.39 1.243 2.4a3.04 3.04 0 0 1-.45 1.643c-.288.482-.697.86-1.225 1.138Zm-6.356-3.863v2.978h2.899c.72 0 1.266-.126 1.639-.379.372-.253.558-.626.558-1.12 0-.493-.186-.86-.558-1.1-.373-.253-.919-.38-1.639-.38h-2.899Zm3.403 8.231c.769 0 1.345-.126 1.729-.379.396-.253.594-.644.594-1.173 0-1.047-.774-1.57-2.323-1.57h-3.403v3.122h3.403Zm15.767-.505h-5.852l-1.116 2.707h-2.989l5.618-12.636h2.881l5.636 12.636h-3.061l-1.117-2.707Zm-.918-2.22-1.999-4.838-1.998 4.837h3.997Zm8.382-5.326h-4.034v-2.383h10.984v2.383h-4.033V24.5h-2.917V14.246Zm14.448 10.47c-1.309 0-2.491-.283-3.547-.849a6.385 6.385 0 0 1-2.467-2.328c-.588-.999-.883-2.118-.883-3.358 0-1.24.295-2.352.883-3.34a6.343 6.343 0 0 1 2.467-2.346c1.056-.565 2.238-.848 3.547-.848 1.308 0 2.485.283 3.529.848a6.35 6.35 0 0 1 2.467 2.347c.6.987.9 2.1.9 3.34 0 1.239-.3 2.358-.9 3.357a6.392 6.392 0 0 1-2.467 2.328c-1.044.566-2.221.849-3.529.849Zm0-2.491c.744 0 1.416-.169 2.017-.506.6-.349 1.068-.83 1.404-1.444.348-.613.522-1.311.522-2.094 0-.782-.174-1.48-.522-2.094a3.563 3.563 0 0 0-1.404-1.426 3.942 3.942 0 0 0-2.017-.523 3.94 3.94 0 0 0-2.017.523 3.69 3.69 0 0 0-1.422 1.426c-.336.614-.505 1.312-.505 2.094 0 .782.169 1.48.505 2.094a3.817 3.817 0 0 0 1.422 1.444 4.05 4.05 0 0 0 2.017.506Zm17.119 2.275-2.43-3.52h-2.683v3.52h-2.917V11.862h5.456c1.116 0 2.082.187 2.899.56.828.373 1.464.902 1.908 1.588.444.686.666 1.499.666 2.437 0 .939-.228 1.751-.684 2.437-.444.674-1.08 1.192-1.908 1.553l2.827 4.061h-3.134Zm-.054-8.052c0-.71-.228-1.251-.684-1.624-.456-.385-1.122-.578-1.999-.578h-2.376v4.405h2.376c.877 0 1.543-.193 1.999-.578.456-.385.684-.927.684-1.625ZM0 11.878h2.912v12.594H0V11.878Zm8.506 2.375H4.479v-2.375h10.966v2.375h-4.027v10.22H8.506v-10.22Zm25.235-2.375h2.917v12.594H33.74V11.878Zm17.466 0v12.594h-2.395l-6.283-7.646v7.646h-2.88V11.878h2.412l6.265 7.647v-7.647h2.88Z"
    />
    <path
      fill="#FF0808"
      fillRule="evenodd"
      d="M34.987 6.535a1.96 1.96 0 1 1 0 3.921 1.96 1.96 0 0 1 0-3.921Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19.492 16.037c1.116 0 2.02.878 2.02 1.96 0 1.084-.904 1.961-2.02 1.961s-2.02-.877-2.02-1.96.904-1.96 2.02-1.96ZM42.478 34.5c9.112 0 16.5-7.387 16.5-16.5S51.59 1.5 42.478 1.5c-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5Zm0 1.5c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const LogoHeader = memo(ForwardRef)
