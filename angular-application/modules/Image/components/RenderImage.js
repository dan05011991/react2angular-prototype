import React, { Component } from 'react';

class RenderImage extends Component {

  render() {
    console.log('RENDER IMAGE', this.props);

    return (

      <div>
        <img src={this.props.imageUrl} alt=""/>
      </div>
      );
  }
}

export default RenderImage;
