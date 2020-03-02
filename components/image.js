import React, { Component } from 'react';

const Image = (props) => {
  const { src, id, isSelected } = props;
  return (
    <img
      className={isSelected ? 'selected' : ''}
      data-id={id}
      src={src}
      onClick={props.onSelect}
    />
  )
};

export default Image;
