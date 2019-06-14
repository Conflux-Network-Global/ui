import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconLink = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.882 5.163a3.564 3.564 0 0 0-5.084 0l-2.542 2.578a.566.566 0 0 0 0 .793.547.547 0 0 0 .782 0l2.542-2.578a2.454 2.454 0 0 1 1.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 0 1-3.52 0 .547.547 0 0 0-.782 0 .566.566 0 0 0 0 .793 3.563 3.563 0 0 0 5.084 0l3.324-3.371a3.645 3.645 0 0 0 1.05-2.578 3.65 3.65 0 0 0-1.05-2.578z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.73 5.094a3.66 3.66 0 0 1 5.22 0 3.744 3.744 0 0 1 1.077 2.647 3.743 3.743 0 0 1-1.077 2.647l-3.324 3.37a3.654 3.654 0 0 1-2.61 1.095c-.945 0-1.89-.365-2.61-1.094a.665.665 0 0 1 0-.931.643.643 0 0 1 .918 0c.933.945 2.45.945 3.384 0l3.323-3.372c.45-.455.698-1.064.698-1.715 0-.65-.248-1.26-.698-1.715a2.358 2.358 0 0 0-1.691-.707c-.642 0-1.242.25-1.692.706l-2.542 2.578a.643.643 0 0 1-.918 0 .665.665 0 0 1 0-.931l2.542-2.578zm.85.862a2.454 2.454 0 0 1 1.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 0 1-3.52 0 .548.548 0 0 0-.782 0 .566.566 0 0 0 0 .793 3.563 3.563 0 0 0 5.084 0l3.324-3.371a3.645 3.645 0 0 0 1.05-2.578 3.65 3.65 0 0 0-1.05-2.578 3.564 3.564 0 0 0-5.084 0l-2.542 2.578a.566.566 0 0 0 0 .793.547.547 0 0 0 .782 0l2.542-2.578z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.626 15.864l-2.151 2.181a2.453 2.453 0 0 1-1.76.736 2.454 2.454 0 0 1-1.76-.736 2.552 2.552 0 0 1 0-3.569l3.129-3.173a2.454 2.454 0 0 1 1.76-.735c.667 0 1.291.261 1.759.735a.548.548 0 0 0 .782 0 .566.566 0 0 0 0-.793 3.564 3.564 0 0 0-5.084 0l-3.128 3.173a3.646 3.646 0 0 0-1.05 2.578c0 .976.373 1.891 1.05 2.577a3.544 3.544 0 0 0 2.542 1.064c.962 0 1.865-.378 2.541-1.064l2.151-2.18a.566.566 0 0 0 0-.794.547.547 0 0 0-.781 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.233 10.441a3.66 3.66 0 0 1 5.22 0 .665.665 0 0 1 0 .931.643.643 0 0 1-.918 0 2.359 2.359 0 0 0-1.691-.706c-.643 0-1.243.251-1.692.706l-3.129 3.173a2.453 2.453 0 0 0 0 3.431c.45.456 1.05.707 1.692.707.642 0 1.242-.251 1.692-.707l2.15-2.18a.642.642 0 0 1 .918 0 .665.665 0 0 1 0 .93l-2.15 2.181A3.64 3.64 0 0 1 7.714 20a3.64 3.64 0 0 1-2.61-1.093 3.743 3.743 0 0 1-1.078-2.646c0-1.002.383-1.942 1.078-2.647l3.128-3.173zm-3.06 3.242L8.3 10.51a3.564 3.564 0 0 1 5.084 0 .566.566 0 0 1 0 .793.547.547 0 0 1-.782 0 2.454 2.454 0 0 0-1.76-.735c-.667 0-1.292.261-1.76.735l-3.128 3.173a2.552 2.552 0 0 0 0 3.57 2.454 2.454 0 0 0 1.76.735c.667 0 1.292-.262 1.76-.736l2.15-2.18a.547.547 0 0 1 .782 0 .566.566 0 0 1 0 .792l-2.15 2.181a3.544 3.544 0 0 1-2.542 1.064 3.544 3.544 0 0 1-2.542-1.064 3.645 3.645 0 0 1-1.05-2.577c0-.976.373-1.892 1.05-2.578z"
        clipRule="evenodd"
      />
    </svg>
  )
}

IconLink.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconLink