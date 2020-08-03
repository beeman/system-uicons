import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const BatteryCharging = forwardRef(
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
          transform="translate(2 4)"
        >
          <path d="m10 2.5 2.5000003-.00147233c1.1045687-.00182804 2.0005264.89307496 2.0011769 1.99764427.0000002.00039262.0000003.00078524-.0011772.00117786v3c0 1.1045695-.8954305 2-2 2h-2.5m-4 .0026502h-3.51261486c-1.1045695 0-2-.8954305-2-2v-3c0-1.1045695.8954305-2 2-2h2.51261486"></path>
          <path d="m8.5 5.5h2.5l-3.6 6.5.1-5.5h-3l4-6z"></path>
          <path d="m16.5 4.5v3"></path>
        </g>
      </svg>
    )
  }
)
BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BatteryCharging.displayName = 'BatteryCharging'
export default BatteryCharging
