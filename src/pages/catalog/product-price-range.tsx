import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { ISortByPrice } from "../../hooks/useProducts/useProducts";

const STEP = 2;
const MIN = 0;
const MAX = 500;

class PriceRange extends React.Component {
  state = {
    values: [0, 500]
  };
  static contextType = PorductFilterContext;
  context!: React.ContextType<typeof PorductFilterContext>;
  rangeChange = (values: number[]) => {
    this.setState({ values }, () => {
      this.context.setProductFilterData(prevState => ({
        ...prevState,
        price_range: { min: this.state.values[0], max: this.state.values[1] }
      }));
    });
  };
  render() {
    return (
      <div className="money_range">
        <div className="input_blocks d-flex">
          <div className="inps_bl">
            <input
              type="text"
              min={0}
              className="price"
              name="priceFrom"
              value={this.state.values[0]}
              onChange={e => {
                let newValue = e.target.value;
                this.setState({
                  values: [newValue, this.state.values[1]]
                });
              }}
            />
          </div>
          <div className="inps_bl">
            <input
              type="text"
              min={0}
              className="price"
              name="priceEnd"
              value={this.state.values[1]}
              onChange={e => {
                let newValue = e.target.value;
                this.setState({
                  values: [this.state.values[0], newValue]
                });
              }}
            />
          </div>
          {/* <button className="ok-btn">OK</button> */}
        </div>
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={this.rangeChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#ccc", "#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "22px",
                width: "22px",
                borderRadius: "50%",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            ></div>
          )}
        />
      </div>
    );
  }
}

export { PriceRange };
