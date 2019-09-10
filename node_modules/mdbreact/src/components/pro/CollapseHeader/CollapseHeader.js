import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CollapseHeader = props => {
  const { className, tagClassName, children, tag: Tag, triggerOnClick, ...attributes } = props;

  const classes = classNames("card-header", className);
  const tagClasses = classNames("mb-0", tagClassName);
  return (
    <div {...attributes} className={classes} style={{ cursor: "pointer" }}>
      <Tag className={tagClasses}>{children}</Tag>
    </div>
  );
};

CollapseHeader.defaultProps = {
  tag: "h5"
};

CollapseHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tagClassName: PropTypes.string,
  tag: PropTypes.string,
  triggerOnClick: PropTypes.func
};

export default CollapseHeader;
export { CollapseHeader as MDBCollapseHeader };
