import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Users = forwardRef(
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
          transform="translate(1 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v1c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-1c0-1.65685425 1.34314575-3 3-3zm7 14c0-.2427251 0-.4854502 0-.7281753 0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"></path>
          <path
            d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8231657 2.40189702-1.9755891 2.82054652.6579909-.79913412.9865095-1.90625342.9855555-3.32135789s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z"
            fill={color}
          ></path>
        </g>
      </svg>
    )
  }
)
Users.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Users.displayName = 'Users'
export default Users