import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IProductPreordable } from "../../services/product.http";

interface ProductHotProps {
  productId: number;
  countdown: IProductPreordable;
}

const _ProductHot: React.FC<ProductHotProps> = ({ countdown, productId }) => {
  const [tillDate, setDate] = useState<number | null>(null);
  useEffect(() => {
    setDate(
      new Date().getTime() +
        countdown.s * 1000 +
        countdown.i * 1000 * 60 +
        countdown.h * 1000 * 3600 +
        countdown.d * 1000 * 60 * 60 * 24
    );
  }, [countdown]);
  if (!tillDate) return null;
  return (
    <div className="hot-block d-flex">
      <div className="timer d-flex flex-column align-items-center justify-content-center">
        <Countdown tillDate={tillDate} />
        <div className="progress">
          <div className="progress-bar" style={{ width: "70%" }} />
        </div>
      </div>
      {/* <ProductHeartBtn productId={productId} /> */}
      {/* <a
        href="#!"
        onClick={e => e.preventDefault()}
        className="bag d-flex align-items-center justify-content-center"
      >
        <img src="/assets/images/heartw.svg" alt="bag" />
        <img src="/assets/images/heart.svg" alt="bag" className="red" />
      </a> */}
    </div>
  );
};

export const ProductHot = connect()(_ProductHot);

const Countdown: React.FC<{
  tillDate: number;
}> = React.memo(({ tillDate }) => {
  const [, setRerender] = useState(0);
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = tillDate - now;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  useEffect(() => {
    const r = setInterval(() => {
      setRerender(p => p + 1);
    }, 1000);
    return () => {
      clearInterval(r);
    };
  }, []);

  if (distance < 0) {
    return null;
  }
  return (
    <div className="timer-num d-flex justify-content-center">
      <div className="num-item">
        {days.toString().length !== 2 ? "0" + days : days}
      </div>
      <div className="num-item">
        {hours.toString().length !== 2 ? "0" + hours : hours}
      </div>
      <div className="num-item dark">
        {minutes.toString().length !== 2 ? "0" + minutes : minutes}
      </div>
      <div className="num-item dark">
        {seconds.toString().length !== 2 ? "0" + seconds : seconds}
      </div>
    </div>
  );
});
