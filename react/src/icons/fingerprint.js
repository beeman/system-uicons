import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Fingerprint = forwardRef(
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
          transform="translate(4.5 2.5)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 10.03c0 2.7448552-1.2554932 5.97-6 5.97-.75780542 0-1.42660143-.0822778-2.01548904-.2317346m-1.76100565-.7815476c-1.68909404-1.1706539-2.22350531-3.1659055-2.22350531-4.9567178v-4.03c0-1.56622031.65466451-2.97953554 1.70527792-3.98123005m1.67130335-1.35397567c.77973587-.42395337 1.6734516-.66479428 2.62341873-.66479428 1.75280799 0 3.49283909.72275393 4.5 2m1.2058722 1.22085393c.1906672.55804827.2941278 1.15651492.2941278 1.77914607 0-.66666667 0 .33333333 0 3"></path>
          <path d="m2.5 13.015c-.32893023-.6677284-.5-1.4021207-.5-2.1464703v-1.8685297-3c0-2.209139 1.790861-4 4-4s4 1.790861 4 4v4.03"></path>
          <path d="m6 14c-1.33333333-.6666667-2-1.6566667-2-2.97v-5.03c0-1.1045695.8954305-2 2-2s2 .8954305 2 2v4.03c0 .6666667.33333333 1 1 1s1-.3333333 1-1"></path>
          <path d="m6 6v4.03c0 1.98 1 2.97 3 2.97"></path>
        </g>
      </svg>
    )
  }
)
Fingerprint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Fingerprint.displayName = 'Fingerprint'
export default Fingerprint