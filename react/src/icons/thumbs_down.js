import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ThumbsDown = forwardRef(
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
          transform="matrix(1 0 0 -1 2 18)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m11.602322 13.7410886-3.10337429-1.2410885h-4v-7.00000002h2l2.80105246-5.5c.57989907 0 1.07487363.2050252 1.48492373.61507546.4100508.41005058.6150761.90502516.6150755 1.48492425l-.8999994 2.40000029 4.0310597 1.34368655c1.0478866.34929555 1.6142066 1.48193549 1.264911 2.52982213-.0078047.02341425-.0160422.04668201-.0247082.06979135l-1.5536355 4.14302809c-.3878403 1.0342407-1.5406646 1.5582517-2.5749053 1.1704115-.0135227-.005071-.02699-.0102884-.0403997-.0156511z"></path>
          <path d="m1.5 4.5h2c.55228475 0 1 .44771525 1 1v8c0 .5522847-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1v-8c0-.55228475.44771525-1 1-1z"></path>
        </g>
      </svg>
    )
  }
)
ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ThumbsDown.displayName = 'ThumbsDown'
export default ThumbsDown