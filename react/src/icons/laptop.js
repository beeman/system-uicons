import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Laptop = forwardRef(
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
          <path d="m2.5.48528137h11c.5522847 0 1 .44771525 1 1v8.01471863h-13v-8.01471863c0-.55228475.44771525-1 1-1z"></path>
          <path
            d="m1.11803399 9.5h13.76393201c.5522848 0 1 .44771525 1 1 0 .1552451-.0361451.3083582-.1055728.4472136l-1.2763932 2.5527864h-13l-1.2763932-2.5527864c-.24698925-.4939785-.0467649-1.09465154.44721359-1.34164079.13885544-.06942772.2919685-.10557281.4472136-.10557281z"
            transform="matrix(1 0 0 -1 0 23)"
          ></path>
        </g>
      </svg>
    )
  }
)
Laptop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Laptop.displayName = 'Laptop'
export default Laptop
