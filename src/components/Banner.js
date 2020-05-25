import React, {Component} from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUpload } from '@fortawesome/free-solid-svg-icons';
import Banner1 from '../images/banner-img-1.webp';
import Banner2 from '../images/banner-img-2.webp';
import Banner3 from '../images/banner-img-3.webp';
import Banner4 from '../images/banner-img-4.webp';
import Banner5 from '../images/banner-img-5.webp';

const images = [
  {
    src: Banner1,
    title: "Image Title 1",
    description: "Image Description 1"
  },
  {
    src: Banner2,
    title: "Image Title 2",
    description: "Image Description 2"
  },
  {
    src: Banner3,
    title: "Image Title 3",
    description: "Image Description 3"
  },
  {
    src: Banner4,
    title: "Image Title 4",
    description: "Image Description 4"
  },
  {
    src: Banner5,
    title: "Image Title 5",
    description: "Image Description 5"
  }
];

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className="banner">
          <img className="box a" onClick={() => this.setState({ isOpen: true })} src={Banner1} alt=""/>
          <img className="box b" onClick={() => this.setState({ isOpen: true })} src={Banner2} alt=""/>
          <img className="box c" onClick={() => this.setState({ isOpen: true })} src={Banner3} alt=""/>
          <img className="box d" onClick={() => this.setState({ isOpen: true })} src={Banner4} alt=""/>
          <img className="box e" onClick={() => this.setState({ isOpen: true })} src={Banner5} alt=""/> 
          <button className="btn btn-secondary banner-btn box f " onClick={() => this.setState({ isOpen: true })}>Show all photos</button>
          <button className="btn btn-primary action-btn"><FontAwesomeIcon icon={faBookmark} /> Save to wishlist</button>
          <button className="btn btn-primary action-btn"> <FontAwesomeIcon icon={faUpload} /> Share this hotel</button>
        </div>


        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageCaption={images[photoIndex].description}
            imageTitle={images[photoIndex].title}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}


