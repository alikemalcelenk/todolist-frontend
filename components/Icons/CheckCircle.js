import * as React from 'react'

function SvgCheckCircle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.736 11.927v1.08a11.736 11.736 0 11-6.96-10.727"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.736 3.611L13 15.36l-3.52-3.52"
        stroke="#1ED760"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgCheckCircle
