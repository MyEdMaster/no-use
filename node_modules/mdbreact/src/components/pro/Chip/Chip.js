import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../../Waves";
import "./Chip.css";
import Fa from "../../Fa";

const Chip = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    // Get Cursor Position
    e.stopPropagation();
    e.preventDefault();
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  const handleCloseClick = e => {
    if (props.handleClose) {
      props.handleClose(e);
    }
  };

  const {
    className,
    tag: Tag,
    size,
    bgColor,
    text,
    gradient,
    src,
    alt,
    close,
    waves,
    handleClose,
    ...attributes
  } = props;

  const classes = classNames(
    "chip",
    size && "chip-" + size,
    bgColor && bgColor,
    text && text + "-text",
    gradient && gradient + "-gradient",
    waves && "Ripple-parent",
    className
  );

  return (
    <Tag
      {...attributes}
      className={classes}
      onMouseDown={handleClick}
      onTouchStart={handleClick}
    >
      {src && <img src={src} alt={alt} />}
      {props.children}
      {waves && <Waves cursorPos={cursorPos} />}
      {close && <Fa icon="times" className="close" onClick={handleCloseClick} />}
    </Tag>
  );
};

Chip.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  gradient: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  close: PropTypes.bool,
  handleClose: PropTypes.func
};

Chip.defaultProps = {
  tag: "div"
};

export default Chip;
export { Chip as MDBChip };
