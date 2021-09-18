import * as React from 'react'

function SvgPlus(props: React.SVGProps<SVGSVGElement>): any {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.75 5.75H8.5a.25.25 0 01-.25-.25V1.25a1.25 1.25 0 00-2.5 0V5.5a.25.25 0 01-.25.25H1.25a1.25 1.25 0 000 2.5H5.5a.25.25 0 01.25.25v4.25a1.25 1.25 0 002.5 0V8.5a.25.25 0 01.25-.25h4.25a1.25 1.25 0 000-2.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPlus
