import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Archive = forwardRef(
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
          transform="translate(2 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m1.5 4.5h14v7.9976807c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2zm0-3.9777832h14c.5522847 0 1 .44771525 1 1v1.9777832c0 .55228475-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1v-1.9777832c0-.55228475.44771525-1 1-1z"></path>
          <path d="m6.5 7.5h4"></path>
        </g>
      </svg>
    )
  }
)
Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Archive.displayName = 'Archive'
export default Archive