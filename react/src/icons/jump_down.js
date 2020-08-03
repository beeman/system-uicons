import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const JumpDown = forwardRef(
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
        <path
          fill="none"
          stroke={color}
          d="M3.22943808,4.22919114 C6.4938437,0.44028711 9.91736434,-0.802776603 13.5,0.5 C9.94815456,1.14579008 7.49105179,3.35549827 6.12869169,7.12912456 L8.5,9.5 L0.5,9.5 L0.5,1.5 Z"
          transform="translate(4 6)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
JumpDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
JumpDown.displayName = 'JumpDown'
export default JumpDown