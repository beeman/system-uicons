import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Newspaper = forwardRef(
  ({ color = 'currentColor', size = 21, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(1 4)"
        >
          <path d="m3.5 3.165h9"></path>
          <path d="m4.48122025 6.20339509 1-.01878307c.55218735-.01037177 1.00823163.42885655 1.01860339.9810439.00011757.00625923.00017636.01251942.00017636.01877975v.98327989c0 .54496455-.4363518.98958934-.98122025.99982364l-1 .01878306c-.55218735.01037177-1.00823163-.42885654-1.01860339-.98104389-.00011757-.00625923-.00017636-.01251942-.00017636-.01877975v-.98327989c0-.54496455.4363518-.98958935.98122025-.99982364z"></path>
          <path d="m2.5.1507576h11c1.1045695 0 2 .8954305 2 2v10.0147186h-13c-1.1045695 0-2-.8954305-2-2v-8.0147186c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m8.5 6.165h4"></path>
          <path d="m8.5 9.165h4"></path>
          <path d="m15 12.1654762c1.3807119 0 2.5-1.1192881 2.5-2.49999998v-6.5h-2"></path>
        </g>
      </svg>
    )
  }
)
Newspaper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Newspaper.displayName = 'Newspaper'
export default Newspaper
