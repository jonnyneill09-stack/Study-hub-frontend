import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Card component
 * White background, shadow, rounded corners, padding
 * Accepts title, content, optional footer as props
 */
export default function Card({ title, content, footer }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between h-full">
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-gray-800 select-none">{title}</h3>
      )}
      <div className="flex-grow text-gray-700">{content}</div>
      {footer && <div className="mt-4 text-sm text-gray-500">{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node
};

Card.defaultProps = {
  title: '',
  footer: null
};
