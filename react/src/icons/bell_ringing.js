import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const BellRinging = forwardRef(
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
          transform="matrix(-1 0 0 -1 19 19)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3.41547595 3.5h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848z"></path>
          <path
            d="m1.93933983 14.1628827c.83283405.4997018 1.39051158.9942231 1.67303261 1.4835639.28252102.4893408.43195026 1.2195643.44828773 2.1906707"
            transform="matrix(-.25881905 .96592583 .96592583 .25881905 -11.678043 8.960878)"
          ></path>
          <path
            d="m12.8509252 14.1628827c.8480897.4427672 1.413395.9088212 1.695916 1.398162.282521.4893407.4243225 1.2480316.4254044 2.2760726"
            transform="matrix(.25881905 .96592583 -.96592583 .25881905 25.766123 -1.579065)"
          ></path>
          <path d="m6 2c.66666667-1 1.5-1.5 2.5-1.5s1.8333333.5 2.5 1.5"></path>
        </g>
      </svg>
    )
  }
)
BellRinging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BellRinging.displayName = 'BellRinging'
export default BellRinging