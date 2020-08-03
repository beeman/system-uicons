import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const FolderOpen = forwardRef(
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
          transform="translate(2 4)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15.5 4.5c.000802-1.10737712-.8946285-2.00280762-1.999198-2.00280762l-5.000802.00280762-2-2h-4c-.55228475 0-1 .44771525-1 1v.99719238 2.00280762"></path>
          <path d="m.81056316 5.74177845 1.31072322 5.24326075c.22257179.8903496 1.02254541 1.5149608 1.94029301 1.5149608h8.87667761c.9177969 0 1.7178001-.6246768 1.9403251-1.5150889l1.3108108-5.24508337c.1339045-.53580596-.1919011-1.07871356-.727707-1.21261805-.079341-.0198283-.1608148-.02984896-.2425959-.02983748l-13.43852073.00188665c-.55228474.00007754-.99993713.44785564-.99985959 1.00014038.00001147.08170931.01003737.16310922.02985348.24237922z"></path>
        </g>
      </svg>
    )
  }
)
FolderOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
FolderOpen.displayName = 'FolderOpen'
export default FolderOpen