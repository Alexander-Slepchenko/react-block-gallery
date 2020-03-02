import React, { Component } from 'react';
import classNames from 'classnames';

export default class ImageEdit extends Component {
  constructor(props) {
    super(props);

    this.onRemoveHandler = this.onRemoveHandler.bind(this);
    this.onMoveForwardHandler = this.onMoveForwardHandler.bind(this);
    this.onMoveBackwardHandler = this.onMoveBackwardHandler.bind(this);
  }

  onRemoveHandler() {
    const { id } = this.props;
    this.props.onRemove(id);
  }

  onMoveForwardHandler() {
    const { id } = this.props;
    this.props.onMoveForward(id);
  }

  onMoveBackwardHandler() {
    const { id } = this.props;
    this.props.onMoveBackward(id);
  }

  render() {
    const { isSelected, isFirstItem, isLastItem } = this.props;
    const className = classNames(
      'gallery-item-edit',
      {
			  'is-selected': isSelected,
      }
    );

    return (
      <figure className={className}>
        {this.props.children}
        <div className='gallery-item-edit-move gallery-item-edit-control'>
          <button onClick={isFirstItem ? undefined : this.onMoveBackwardHandler}>{'<'}</button>
          <button onClick={isLastItem ? undefined : this.onMoveForwardHandler}>{'>'}</button>
        </div>
        <div className='gallery-item-edit-remove gallery-item-edit-control'>
          <button onClick={this.onRemoveHandler}>{'X'}</button>
        </div>
      </figure>
    )
  }
}
