import * as React from 'react'

type customType = {
  title?: string
}

function SvgWastebasket(
  props: React.SVGProps<SVGSVGElement> & customType
): any {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#wastebasket_svg__clip0)" fill="currentColor">
        <path d="M14.586 9.42a.609.609 0 00-.609.609v11.508a.609.609 0 001.218 0V10.029a.609.609 0 00-.609-.61zM7.401 9.42a.609.609 0 00-.609.609v11.508a.609.609 0 001.218 0V10.029a.609.609 0 00-.609-.61z" />
        <path d="M2.165 7.74v15.002c0 .887.325 1.72.893 2.317.565.6 1.352.94 2.176.94h11.52a2.997 2.997 0 002.176-.94c.568-.597.893-1.43.893-2.317V7.74a2.326 2.326 0 00-.597-4.574H16.11v-.76A2.392 2.392 0 0013.697 0H8.29a2.392 2.392 0 00-2.41 2.405v.761H2.761a2.326 2.326 0 00-.597 4.574zm14.59 17.042H5.233c-1.042 0-1.851-.894-1.851-2.04V7.794h15.222v14.948c0 1.146-.81 2.04-1.85 2.04zM7.096 2.405A1.172 1.172 0 018.29 1.218h5.407a1.173 1.173 0 011.194 1.187v.761H7.097v-.76zm-4.335 1.98h16.464a1.096 1.096 0 010 2.191H2.762a1.096 1.096 0 110-2.192z" />
        <path d="M10.994 9.42a.609.609 0 00-.61.609v11.508a.609.609 0 001.219 0V10.029a.609.609 0 00-.61-.61z" />
      </g>
      <defs>
        <clipPath id="wastebasket_svg__clip0">
          <path fill="#fff" d="M0 0h22v26H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

SvgWastebasket.defaultProps = {
  title: 'Wastebasket'
}

export default SvgWastebasket
