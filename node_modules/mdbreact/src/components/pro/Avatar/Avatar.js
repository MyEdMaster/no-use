import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Avatar = props => {
  const { className, tag: Tag, round, circle, ...attributes } = props;

  const classes = classNames("avatar", round && "rounded", circle && "rounded-circle", className);

  return <Tag {...attributes} className={classes} />;
};

Avatar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  round: PropTypes.bool,
  circle: PropTypes.bool
};

Avatar.defaultProps = {
  tag: "div",
  round: false,
  circle: false
};

export default Avatar;
export { Avatar as MDBAvatar };
