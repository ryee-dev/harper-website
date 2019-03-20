import React from 'react';
// import Img from 'gatsby-image';

interface Props {
  albumImages: any;
}

class Lightbox extends React.Component<Props> {
  render() {
    const { albumImages } = this.props;
    return (
      <div>
        {albumImages.map(image => (
          <img
            key={image.node.id}
            src={image.node.public_id}
            alt={image.node.url}
          />
        ))}
      </div>
    );
  }
}

export default Lightbox;
