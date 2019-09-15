import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ScrollSpyListItem = props => {
  const { className, children, active, ...attributes } = props;

  const classes = classNames("nav-link ", active ? "active" : false, className);

  return (
    <li className="nav-item">
      <a {...attributes} className={classes} role="tab">
        {children}
      </a>
    </li>
  );
};

ScrollSpyListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
};

export default ScrollSpyListItem;
export { ScrollSpyListItem as MDBScrollspyListItem };
