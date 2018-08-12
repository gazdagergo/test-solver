import React, { Component } from "react";
import classnames from "classnames";
import "./styles.css";

class FillGap extends Component {
  state = {
    gaps: [
      {
        id: 0,
        awaits: "world",
        value: null
      },
      {
        id: 1,
        awaits: "come",
        value: null
      }
    ],
    selectedGapId: 0,
    awaits: null,
    solutions: [
      { value: "word", picked: null },
      { value: "world", picked: null },
      { value: "goes", picked: null },
      { value: "come", picked: null }
    ]
  };

  check = () => {
    const { gaps } = this.state;
    let solved = true;
    let correct = true;
    gaps.forEach(gap => {
      if (gap.value === null) {
        solved = false;
      }
      if (gap.value !== gap.awaits) {
        correct = false;
      }
    });
    if (!solved) return null;
    if (solved && !correct) return -1;
    return 1;
  };

  handleGapClick = event => {
    let { id: selectedGapId } = event.target;
    selectedGapId = +selectedGapId;
    this.setState(prevState => {
      return prevState.selectedGapId === selectedGapId
        ? { selectedGapId: null }
        : { selectedGapId };
    });
  };

  handleSolutionClick = event => {
    const { dataset } = event.target;
    const { solution } = dataset;
    this.setState(prevState => {
      if (prevState.selectedGapId === null) return prevState;
      return {
        ...prevState,
        gaps: [
          ...prevState.gaps.map(gap => {
            if (gap.id === prevState.selectedGapId) {
              return { ...gap, value: solution };
            }
            return gap;
          })
        ],
        solutions: [
          ...prevState.solutions.map(s => {
            if (s.value === solution) {
              return { ...s, picked: true };
            }
            return { ...s };
          })
        ],
        selectedGapId: prevState.selectedGapId + 1
      };
    });
  };

  render() {
    const { selectedGapId, solutions, gaps } = this.state;
    const result = this.check();
    return (
      <div className="fill-gap">
        <div className="text-wrap">
          Hello{" "}
          <span
            id={0}
            data-awaits="word"
            className={classnames("gap", {
              gap__selected: selectedGapId === 0,
              gap__filled: gaps[0].value
            })}
            onClick={this.handleGapClick}
          >
            {gaps[0].value}
          </span>. Here I{" "}
          <span
            id={1}
            data-awaits="come"
            className={classnames("gap", {
              gap__selected: selectedGapId === 1,
              gap__filled: gaps[1].value
            })}
            onClick={this.handleGapClick}
          >
            {gaps[1].value}
          </span>.
        </div>
        <div className="solutions-wrap">
          {solutions.map(solution => (
            <div
              key={solution.value}
              className={classnames("solution", {
                solution__picked: solution.picked
              })}
              onClick={this.handleSolutionClick}
              data-solution={solution.value}
            >
              {solution.value}
            </div>
          ))}
        </div>
        {result && (
          <div
            className={classnames("result", {
              result__correct: result === 1,
              result__false: result === -1
            })}
            onClick={() => window.location.reload()}
          >
            {result === 1 ? "Correct" : "False"}
          </div>
        )}
      </div>
    );
  }
}

export default FillGap;
