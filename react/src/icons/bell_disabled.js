import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const BellDisabled = forwardRef(
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
          transform="matrix(-1 0 0 -1 18 19)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2.5 3.5h10.0845241c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 .2743851-.0276272.5423176-.0802516.8011674m-1.2832087 2.207002c-.7039698.6174972-1.62653961.9918306-2.6365397.9918306h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.23818692-.39697819-.29005196-.85383979-.18103675-1.26881839"></path>
          <path d="m1 1.929 13 13.071"></path>
          <path d="m5 2c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5"></path>
        </g>
      </svg>
    )
  }
)
BellDisabled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BellDisabled.displayName = 'BellDisabled'
export default BellDisabled