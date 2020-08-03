import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const DisplayAlt = forwardRef(
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
          stroke={color}
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 4.5h11c1.1045695 0 2 .8954305 2 2v6.0488218c0 1.1045695-.8954305 2-2 2-.0025044 0-.0050088-.0000047-.0075132-.0000141l-10.99999997-.0413227c-1.10162878-.0041384-1.99248683-.8983493-1.99248683-1.9999859v-6.0074991c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m2.464 2.5h10.036"></path>
          <path d="m4.5.5h6"></path>
        </g>
      </svg>
    )
  }
)
DisplayAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
DisplayAlt.displayName = 'DisplayAlt'
export default DisplayAlt