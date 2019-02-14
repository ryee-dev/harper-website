import React from 'react';
import Img from 'gatsby-image';

interface Props {
  albumImages: any;
}

class Lightbox extends React.Component<Props> {
  render() {
    const { albumImages } = this.props;
    return (
      <div>
        {albumImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </div>
    );
  }
}

export default Lightbox;
