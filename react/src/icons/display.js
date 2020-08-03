import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Display = forwardRef(
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
          transform="translate(3 3)"
        >
          <path d="m2 .5h11c1.1045695 0 2 .8954305 2 2v6.04882185c0 1.1045695-.8954305 1.99999995-2 1.99999995-.0025044 0-.0050088-.0000047-.0075132-.0000141l-10.99999997-.0413227c-1.10162878-.0041384-1.99248683-.89834933-1.99248683-1.99998589v-6.00749911c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m2.464 12.5h10.036"></path>
          <path d="m4.5 14.5h6"></path>
        </g>
      </svg>
    )
  }
)
Display.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Display.displayName = 'Display'
export default Display
