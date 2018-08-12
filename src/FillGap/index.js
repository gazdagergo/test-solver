import React, { Component } from "react";
import classnames from "classnames";
import "./styles.css";

class FillGap extends Component {
  state = {
    selectedGapId: null
  };

  handleGapClick = event => {
    const { id: selectedGapId } = event.target;
    this.setState(prevState => {
      return prevState.selectedGapId !== selectedGapId
        ? { selectedGapId }
        : { selectedGapId: null };
    });
  };

  render() {
    const { selectedGapId } = this.state;
    return (
      <div className="fill-gap">
        <div>
          Hello{" "}
          <span
            id="gap1"
            className={classnames("gap", {
              gap__selected: selectedGapId === "gap1"
            })}
            onClick={this.handleGapClick}
          />.
        </div>
      </div>
    );
  }
}

export default FillGap;
