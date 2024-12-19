import Slider from "react-slick";

const ProfileSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="border rounded-full h-[55px] w-[55px]"></div>
        </div>
        <div>
          <div className="border rounded-full h-[55px] w-[55px]"></div>
        </div>
        <div>
          <div className="border rounded-full h-[55px] w-[55px]"></div>
        </div>
        <div>
          <div className="border rounded-full h-[55px] w-[55px]"></div>
        </div>
      </Slider>
    </div>
  );
};

export default ProfileSlider;
