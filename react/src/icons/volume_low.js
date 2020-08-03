import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const VolumeLow = forwardRef(
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
          <path d="m1.5 4.5h3l5-4v14l-5-4h-3c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"></path>
          <path d="m11.5 5.5v4"></path>
        </g>
      </svg>
    )
  }
)
VolumeLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
VolumeLow.displayName = 'VolumeLow'
export default VolumeLow