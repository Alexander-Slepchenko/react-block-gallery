import React, { Component } from 'react';
import Image from './image';
import ImageEdit from './image-edit';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onMoveForward = this.onMoveForward.bind(this);
    this.onMoveBackward = this.onMoveBackward.bind(this);
    this.state = {
      images: this.props.images,
      selectedImage: null
    }
  }

  onSelectImage(e) {
    const id = e.target.dataset.id;
    this.setState({
      selectedImage: id
    });
  }

  onRemoveImage(id) {
    const { images } = this.state;

    const newOrder = images.filter((image, index) => index !== id);
    this.setState({
      images: newOrder,
      selectedImage: null
    })
  }

  onMove(item, offset) {
    const { images } = this.state;
    const newIndex = item + offset;
    if ( newIndex > -1 ) {
      const imageToMove = images.splice(item, 1)[0];
      images.splice(newIndex, 0, imageToMove);
    }

    this.setState({
      images: images,
      selectedImage: newIndex
    })
  }

  onMoveForward(id) {
    this.onMove(id, 1)
  }

  onMoveBackward(id) {
    this.onMove(id, -1)
  }

  render() {
    const { images, selectedImage } = this.state;
    return (
      <div className="gallery-container">
        {
          images.map((image, index) =>
            <div key={index} className='gallery-item'>
              <ImageEdit
                id={index}
                isSelected={index == selectedImage}
                isFirstItem={index === 0}
                isLastItem={index + 1 === images.length}
                onMoveForward={this.onMoveForward}
                onMoveBackward={this.onMoveBackward}
                onRemove={this.onRemoveImage}>
                  <Image
                    id={index} 
                    src={image} 
                    onSelect={this.onSelectImage}
                  />
              </ImageEdit>
            </div>
          )
        }
      </div>
    )
  }
}