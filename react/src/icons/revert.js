import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Revert = forwardRef(
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
          transform="matrix(0 -1 -1 0 18.5 18.5)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m14.5 10.379v4.242"
            transform="matrix(-.70710678 .70710678 .70710678 .70710678 15.914145 -6.591855)"
          ></path>
          <path
            d="m0 2v6c0 3.3650233 2.07760003 6.2447971 5.0200433 7.4265646.92098687.3698941 1.92670197.5734354 2.9799567.5734354 4.418278 0 8-3.581722 8-8s-3.581722-8-8-8c-1.48966767 0-3.47247085.36985163-5.09136684 1.53807623"
            transform="matrix(-1 0 0 -1 16 16)"
          ></path>
          <path
            d="m10.25 4.75v4h-3.5"
            transform="matrix(0 1 -1 0 15.25 -1.75)"
          ></path>
        </g>
      </svg>
    )
  }
)
Revert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Revert.displayName = 'Revert'
export default Revert