import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// @ts-ignore
import ScrollToTop from "react-scroll-up";

export const ScropllToTopOnPageChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ScrollToTop
      showUnder={10}
      style={{
        position: "fixed",
        bottom: 50,
        right: 30,
        cursor: "pointer",
        transitionDuration: "0.2s",
        transitionTimingFunction: "linear",
        transitionDelay: "0s",
        zIndex: 1000,
      }}
    >
      <button id="scrollTopBtn">
        <i className="fas fa-arrow-up"></i>
      </button>
    </ScrollToTop>
  );
};
