import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const VolumeAdd = forwardRef(
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
          transform="translate(3 2)"
        >
          <path d="m1.5 5.5h3l5-5v16l-5-5h-3c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"></path>
          <g transform="matrix(.70710678 .70710678 -.70710678 .70710678 12.914304 5.828111)">
            <path d="m.889 2.889 2.829-2.828"></path>
            <path d="m3.82842712 3-2.93933982-2.93933983z"></path>
          </g>
        </g>
      </svg>
    )
  }
)
VolumeAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
VolumeAdd.displayName = 'VolumeAdd'
export default VolumeAdd
