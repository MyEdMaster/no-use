import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Testimonial = props => {
  const { className, tag: Tag, ...attributes } = props;

  const classes = classNames("testimonial", className);

  return <Tag {...attributes} className={classes} />;
};

Testimonial.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Testimonial.defaultProps = {
  tag: "div"
};

export default Testimonial;
export { Testimonial as MDBTestimonial };
