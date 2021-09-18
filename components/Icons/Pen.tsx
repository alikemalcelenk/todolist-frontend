import * as React from 'react'

function SvgPen(props: React.SVGProps<SVGSVGElement>): any {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#pen_svg__clip0)" fill="currentColor">
        <path d="M23.997 16.333a.648.648 0 00-.648.648v5.749a1.944 1.944 0 01-1.942 1.943H3.237a1.945 1.945 0 01-1.942-1.943V5.856a1.945 1.945 0 011.943-1.943h5.75a.647.647 0 100-1.295h-5.75A3.241 3.241 0 000 5.856V22.73a3.241 3.241 0 003.238 3.238h18.169a3.241 3.241 0 003.238-3.238v-5.75a.648.648 0 00-.648-.647z" />
        <path d="M24.388.952a2.914 2.914 0 00-4.12 0L8.714 12.505a.648.648 0 00-.167.284L7.03 18.274a.647.647 0 00.797.797l5.485-1.52a.647.647 0 00.285-.165L25.148 5.832a2.917 2.917 0 000-4.121l-.76-.76zM10.126 12.925L19.58 3.47l3.05 3.05-9.455 9.455-3.05-3.05zm-.61 1.223l2.437 2.436-3.37.934.934-3.37zm14.716-9.23l-.686.686-3.05-3.05.687-.686a1.619 1.619 0 012.29 0l.76.76a1.621 1.621 0 010 2.29z" />
      </g>
      <defs>
        <clipPath id="pen_svg__clip0">
          <path fill="#fff" d="M0 0h26v26H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgPen
