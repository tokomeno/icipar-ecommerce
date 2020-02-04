import React from "react"; 

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
export const CustomToggleMenuCartAndWish = React.forwardRef(({ children, onClick }, ref) => (
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    aria-haspopup="true"
    aria-expanded="false"
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </button>
));
 