import * as React from 'react'

type customType = {
  title?: string
}

function SvgLogo(props: React.SVGProps<SVGSVGElement> & customType): any {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#logo_svg__clip0)" fill="currentColor">
        <path d="M15.688 1.875H13.65A2.816 2.816 0 0011 0a2.82 2.82 0 00-2.653 1.875H6.313a.938.938 0 00-.938.938v3.75c0 .517.42.937.938.937h9.375c.517 0 .937-.42.937-.938v-3.75a.938.938 0 00-.938-.937z" />
        <path d="M20.375 3.75H18.5v2.813a2.816 2.816 0 01-2.813 2.812H6.313A2.816 2.816 0 013.5 6.562V3.75H1.625A1.878 1.878 0 00-.25 5.625v22.5C-.25 29.177.573 30 1.625 30h18.75a1.854 1.854 0 001.875-1.875v-22.5a1.854 1.854 0 00-1.875-1.875zm-9.649 16.601l-3.75 3.75a.942.942 0 01-1.327 0l-1.875-1.875a.938.938 0 011.325-1.325l1.213 1.21L9.4 19.027a.938.938 0 011.327 1.325zm0-7.5l-3.75 3.75a.942.942 0 01-1.327 0l-1.875-1.875a.938.938 0 011.325-1.325l1.213 1.21L9.4 11.527a.938.938 0 011.327 1.325zm6.836 9.649h-3.75a.938.938 0 010-1.875h3.75a.938.938 0 010 1.875zm0-7.5h-3.75a.938.938 0 010-1.875h3.75a.938.938 0 010 1.875z" />
      </g>
      <defs>
        <clipPath id="logo_svg__clip0">
          <path fill="#fff" d="M0 0h22v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

SvgLogo.defaultProps = {
  title: 'Logo'
}

export default SvgLogo
