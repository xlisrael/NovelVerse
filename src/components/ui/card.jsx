import React from "react";
import PropTypes from "prop-types";

export function Card({ children }) {
  return <div className="p-4 border rounded-lg shadow">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}

// ✅ Add PropTypes for better validation
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
