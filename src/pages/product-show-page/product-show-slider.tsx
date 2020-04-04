import React from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import { IProductWithItems } from "../../services/product.http";

interface ProductShowSliderProps {
  activeItem: IProductWithItems["items"][number];
}

const params = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,
};

const param2 = {
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  infinite: true,
};

export class ProductShowSlider extends React.PureComponent<
  ProductShowSliderProps,
  any
> {
  slider1: any;
  slider2: any;
  constructor(props: ProductShowSliderProps) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      photoIndex: 0,
      isOpen: false,
    });
  }

  render() {
    const { activeItem } = this.props;
    const { photoIndex, isOpen } = this.state;
    const images = activeItem.images.map((i) => i.image);
    return (
      <div className="d-flex flex-row-reverse justify-content-center">
        <img
          onClick={() => this.setState({ isOpen: true })}
          src="/assets/images/prod-plus.png"
          alt="zoom"
          className="zoom"
        />
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          {...params}
          className="slider-for"
        >
          {this.props.activeItem.images.map((image) => (
            <div key={image.image} className="item">
              <img
                style={{ maxHeight: "345px" }}
                src={image.image}
                alt=""
                draggable="false"
              />
            </div>
          ))}
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...param2}
          className="slider-nav d-none d-lg-flex flex-column justify-content-center"
        >
          {this.props.activeItem.images.map((image) => (
            <div key={image.image} className="item">
              <img style={{ maxHeight: "88px" }} src={image.image} alt="" />
            </div>
          ))}
        </Slider>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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
